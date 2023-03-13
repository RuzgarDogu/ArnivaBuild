const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icons/.DS_Store","icons/dashboard.svg","icons/graph.svg","icons/list.svg","icons/logout.svg","icons/settings.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.04ffe91c.js","imports":["_app/immutable/entry/start.04ffe91c.js","_app/immutable/chunks/index.e58ce54e.js","_app/immutable/chunks/singletons.6943d2ca.js","_app/immutable/chunks/index.76836604.js","_app/immutable/chunks/parse.d12b0d5b.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.50de3b81.js","imports":["_app/immutable/entry/app.50de3b81.js","_app/immutable/chunks/index.e58ce54e.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-2105daa7.js'),
			() => import('./chunks/1-675964ab.js'),
			() => import('./chunks/2-e15e8772.js'),
			() => import('./chunks/3-2ebb3c23.js'),
			() => import('./chunks/4-a1d3ca57.js'),
			() => import('./chunks/5-47365062.js'),
			() => import('./chunks/6-78ba1be2.js'),
			() => import('./chunks/7-19489a1f.js'),
			() => import('./chunks/8-b77dd5f5.js'),
			() => import('./chunks/9-4ad6e47c.js'),
			() => import('./chunks/10-25eeb6a9.js'),
			() => import('./chunks/11-3f23395e.js'),
			() => import('./chunks/12-9adeb2d3.js'),
			() => import('./chunks/13-fbe3d8b5.js'),
			() => import('./chunks/14-65af2e27.js'),
			() => import('./chunks/15-679a01d6.js'),
			() => import('./chunks/16-c4cd2e1d.js')
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
				endpoint: () => import('./chunks/_server.ts-00a077d7.js')
			},
			{
				id: "/(api)/admin/cash",
				pattern: /^\/admin\/cash\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-498e2a9f.js')
			},
			{
				id: "/(api)/admin/general",
				pattern: /^\/admin\/general\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-9099d8c4.js')
			},
			{
				id: "/(api)/admin/report",
				pattern: /^\/admin\/report\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-f6ab722a.js')
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
				endpoint: () => import('./chunks/_server.ts-9f1e69a9.js')
			},
			{
				id: "/(api)/guide/general/regions",
				pattern: /^\/guide\/general\/regions\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-d428a630.js')
			},
			{
				id: "/(api)/guide/general/tours",
				pattern: /^\/guide\/general\/tours\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-a172dd4f.js')
			},
			{
				id: "/(api)/guide/packets",
				pattern: /^\/guide\/packets\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-6ff470dc.js')
			},
			{
				id: "/(api)/guide/tickets",
				pattern: /^\/guide\/tickets\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-a46d27f2.js')
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
