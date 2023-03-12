import 'moment';
import './utils-ae3035df.js';
import { U as UNDEFINED, N as NAN, P as POSITIVE_INFINITY, a as NEGATIVE_INFINITY, b as NEGATIVE_ZERO, H as HOLE } from './constants-34d965bd.js';
import './index2-f68ebe74.js';
import { m as monetize } from './monetize-999b067f.js';

/**
 * Revive a value serialized with `devalue.stringify`
 * @param {string} serialized
 * @param {Record<string, (value: any) => any>} [revivers]
 */
function parse(serialized, revivers) {
	return unflatten(JSON.parse(serialized), revivers);
}

/**
 * Revive a value flattened with `devalue.stringify`
 * @param {number | any[]} parsed
 * @param {Record<string, (value: any) => any>} [revivers]
 */
function unflatten(parsed, revivers) {
	if (typeof parsed === 'number') return hydrate(parsed, true);

	if (!Array.isArray(parsed) || parsed.length === 0) {
		throw new Error('Invalid input');
	}

	const values = /** @type {any[]} */ (parsed);

	const hydrated = Array(values.length);

	/**
	 * @param {number} index
	 * @returns {any}
	 */
	function hydrate(index, standalone = false) {
		if (index === UNDEFINED) return undefined;
		if (index === NAN) return NaN;
		if (index === POSITIVE_INFINITY) return Infinity;
		if (index === NEGATIVE_INFINITY) return -Infinity;
		if (index === NEGATIVE_ZERO) return -0;

		if (standalone) throw new Error(`Invalid input`);

		if (index in hydrated) return hydrated[index];

		const value = values[index];

		if (!value || typeof value !== 'object') {
			hydrated[index] = value;
		} else if (Array.isArray(value)) {
			if (typeof value[0] === 'string') {
				const type = value[0];

				const reviver = revivers?.[type];
				if (reviver) {
					return (hydrated[index] = reviver(hydrate(value[1])));
				}

				switch (type) {
					case 'Date':
						hydrated[index] = new Date(value[1]);
						break;

					case 'Set':
						const set = new Set();
						hydrated[index] = set;
						for (let i = 1; i < value.length; i += 1) {
							set.add(hydrate(value[i]));
						}
						break;

					case 'Map':
						const map = new Map();
						hydrated[index] = map;
						for (let i = 1; i < value.length; i += 2) {
							map.set(hydrate(value[i]), hydrate(value[i + 1]));
						}
						break;

					case 'RegExp':
						hydrated[index] = new RegExp(value[1], value[2]);
						break;

					case 'Object':
						hydrated[index] = Object(value[1]);
						break;

					case 'BigInt':
						hydrated[index] = BigInt(value[1]);
						break;

					case 'null':
						const obj = Object.create(null);
						hydrated[index] = obj;
						for (let i = 1; i < value.length; i += 2) {
							obj[value[i]] = hydrate(value[i + 1]);
						}
						break;

					default:
						throw new Error(`Unknown type ${type}`);
				}
			} else {
				const array = new Array(value.length);
				hydrated[index] = array;

				for (let i = 0; i < value.length; i += 1) {
					const n = value[i];
					if (n === HOLE) continue;

					array[i] = hydrate(n);
				}
			}
		} else {
			/** @type {Record<string, any>} */
			const object = {};
			hydrated[index] = object;

			for (const key in value) {
				const n = value[key];
				object[key] = hydrate(n);
			}
		}

		return hydrated[index];
	}

	return hydrate(0);
}

function guard$1(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const invalidateAll = guard$1("invalidateAll");
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const applyAction = guard("applyAction");
function deserialize(result) {
  const parsed = JSON.parse(result);
  if (parsed.data) {
    parsed.data = parse(parsed.data);
  }
  return parsed;
}
const updatePageData = async function(event) {
  const data = new FormData(this);
  const response = await fetch(this.action, {
    method: "POST",
    body: data
  });
  const result = deserialize(await response.text());
  if (result.type === "success") {
    await invalidateAll();
  }
  applyAction(result);
};
const load = async () => {
  return {
    monetize,
    updatePageData
  };
};

var _layout_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	load: load
});

const index = 0;
const component = async () => (await import('./_layout.svelte-1bf4071a.js')).default;
const file = '_app/immutable/entry/_layout.svelte.0dc9c227.js';
const universal_id = "src/routes/+layout.ts";
const imports = ["_app/immutable/entry/_layout.svelte.0dc9c227.js","_app/immutable/chunks/index.bc7c65c9.js","_app/immutable/chunks/index.53433d2b.js","_app/immutable/entry/_layout.ts.334a5ff3.js","_app/immutable/chunks/monetize.26b98f74.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/chunks/singletons.49a35693.js","_app/immutable/chunks/index.53433d2b.js","_app/immutable/chunks/index.bc7c65c9.js","_app/immutable/chunks/navigation.f5e505e3.js","_app/immutable/chunks/_layout.ff1c7f11.js"];
const stylesheets = ["_app/immutable/assets/_layout.ead76bed.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _layout_ts as universal, universal_id };
//# sourceMappingURL=0-ae15d6d7.js.map
