const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icons/.DS_Store","icons/dashboard.svg","icons/graph.svg","icons/list.svg","icons/logout.svg","icons/settings.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.885b2063.js","imports":["_app/immutable/entry/start.885b2063.js","_app/immutable/chunks/index.bc7c65c9.js","_app/immutable/chunks/singletons.49a35693.js","_app/immutable/chunks/index.53433d2b.js","_app/immutable/chunks/parse.d12b0d5b.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.a83376d0.js","imports":["_app/immutable/entry/app.a83376d0.js","_app/immutable/chunks/index.bc7c65c9.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-ae15d6d7.js'),
			() => import('./chunks/1-17619fd1.js'),
			() => import('./chunks/2-b825dc6e.js'),
			() => import('./chunks/3-8e179387.js'),
			() => import('./chunks/4-c5544b63.js'),
			() => import('./chunks/5-0583749e.js'),
			() => import('./chunks/6-74e23cfc.js'),
			() => import('./chunks/7-f30a7cdf.js'),
			() => import('./chunks/8-bd15cf12.js'),
			() => import('./chunks/9-14818604.js'),
			() => import('./chunks/10-1332ec3d.js'),
			() => import('./chunks/11-ab30c914.js'),
			() => import('./chunks/12-348c200a.js'),
			() => import('./chunks/13-1c8a220a.js'),
			() => import('./chunks/14-d03d3abc.js'),
			() => import('./chunks/15-651f923f.js'),
			() => import('./chunks/16-5f7f1d95.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(api)/admin/branches",
				pattern: /^\/admin\/branches\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-9fb7307b.js')
			},
			{
				id: "/(api)/admin/cash",
				pattern: /^\/admin\/cash\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-c577ac71.js')
			},
			{
				id: "/(api)/admin/general",
				pattern: /^\/admin\/general\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-f3213404.js')
			},
			{
				id: "/(api)/admin/report",
				pattern: /^\/admin\/report\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-b5e8f137.js')
			},
			{
				id: "/(pages)/(admin)/(home)/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(api)/guide/general",
				pattern: /^\/guide\/general\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-99d7f61b.js')
			},
			{
				id: "/(api)/guide/general/operators",
				pattern: /^\/guide\/general\/operators\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-c59c73d7.js')
			},
			{
				id: "/(api)/guide/general/regions",
				pattern: /^\/guide\/general\/regions\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-114a5899.js')
			},
			{
				id: "/(api)/guide/general/tours",
				pattern: /^\/guide\/general\/tours\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-bce37d10.js')
			},
			{
				id: "/(api)/guide/packets",
				pattern: /^\/guide\/packets\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-8f6403a2.js')
			},
			{
				id: "/(api)/guide/tickets",
				pattern: /^\/guide\/tickets\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-e2feebd2.js')
			},
			{
				id: "/(pages)/(guide)/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,2,4], errors: [1,,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(pages)/(admin)/(home)/live",
				pattern: /^\/live\/?$/,
				params: [],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(pages)/(admin)/report",
				pattern: /^\/report\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(pages)/(guide)/sales",
				pattern: /^\/sales\/?$/,
				params: [],
				page: { layouts: [0,2,4,5], errors: [1,,,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(pages)/(guide)/sales/add",
				pattern: /^\/sales\/add\/?$/,
				params: [],
				page: { layouts: [0,2,4,5], errors: [1,,,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(pages)/(guide)/sales/[id]",
				pattern: /^\/sales\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4,5], errors: [1,,,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(pages)/(guide)/sales/[id]/[ticketid]",
				pattern: /^\/sales\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"ticketid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4,5], errors: [1,,,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(pages)/(general)/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 11 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
