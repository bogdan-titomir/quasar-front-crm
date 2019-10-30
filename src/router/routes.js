
const routes = [
  {
    path: '',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '/services', component: () => import('pages/services.vue') },
      { path: '/', component: () => import('pages/auth.vue') },
      { path: '/dashboard', component: () => import('pages/dashboard.vue') },
      { path: '/about', component: () => import('pages/about-us.vue') },
      { path: '/map', component: () => import('pages/map.vue') },
      { path: '/addressbook', component: () => import('pages/addressbook.vue') },
      { path: '/users', component: () => import('pages/users.vue') },
      { path: '/groups', component: () => import('pages/groups.vue') },
      { path: '/calendar', component: () => import('pages/calendar.vue') },
      { path: '/charts', component: () => import('pages/charts.vue') },
      { path: '/pools', component: () => import('pages/pools.vue') },
      { path: '/knowledge', component: () => import('pages/knowledge-base.vue') },
      { path: '/structure', component: () => import('pages/structure.vue') },
      { path: '/settings', component: () => import('pages/settings.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
