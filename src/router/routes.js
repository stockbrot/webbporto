import { Trans } from '@/plugins/Translation'

function load (component) {
  // '@' is aliased to src/components
  return () => import(/* webpackChunkName: "[request]" */ `@/pages/${component}.vue`)
}

export default [
  {
    beforeEnter: Trans.routeMiddleware,
    path: '/:lang',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home2', component: load('Home') },
      { path: 'home', name: 'home', component: load('Home') },
      { path: 'contact', name: 'contact', component: load('Contact') },
      { path: 'about', name: 'about', component: load('About') },
      { path: 'games', name: 'games', component: load('Games') },
      { path: 'sites', name: 'sites', component: load('Sites') },
      { path: 'design', name: 'design', component: load('Design') },
      { path: '*', name: '404', component: load('404') }
    ]
  },
  {
    // Redirect user to supported lang version.
    path: '*',
    redirect () {
      return Trans.getUserSupportedLang() + '/'
    }
  }
]
