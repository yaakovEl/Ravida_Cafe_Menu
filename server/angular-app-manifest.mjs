
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Ravida_Cafe_Menu/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 12193, hash: '31679d41819dcacc42a2ab158b6c8c33cc5cd12b32f0ea10b87b9c612154a24d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10863, hash: 'a20a981d545909006ec7fb756cd7756b797099b5524a3512967e40e1d33569ed', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-SFEWVUZS.css': {size: 24507, hash: 'BfHXfSJqzTo', text: () => import('./assets-chunks/styles-SFEWVUZS_css.mjs').then(m => m.default)}
  },
};
