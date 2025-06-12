
export default {
  basePath: '/Ravida_Cafe_Menu',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
