import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/intro',
    component: () => import('../layouts/IntroLayout.vue'),
    children: [
      { path: 'overview', component: () => import('../pages/intro/OverviewPage.vue') },
      { path: 'client',   component: () => import('../pages/intro/ClientPage.vue') },
      { path: 'server',  component: () => import('../pages/intro/ServerPage.vue') },
      { path: '', redirect: '/intro/overview' },
    ],
  },
  {
    path: '/getting-started',
    component: () => import('../layouts/GettingStartedLayout.vue'),
    children: [
      { path: 'hisonjv',  component: () => import('../pages/getting-started/HisonjvGettingStartedPage.vue') },
      { path: 'hisonjs',  component: () => import('../pages/getting-started/HisonjsGettingStartedPage.vue') },
      { path: 'hisonvue', component: () => import('../pages/getting-started/HisonvueGettingStartedPage.vue') },
      { path: '', redirect: '/getting-started/hisonjv' },
    ],
  },
  {
    path: '/api',
    component: () => import('../layouts/ApiLayout.vue'),
    children: [
      { path: 'hisonjv',  component: () => import('../pages/api/HisonjvApiPage.vue') },
      { path: 'hisonjs',  component: () => import('../pages/api/HisonjsApiPage.vue') },
      { path: 'hisonvue', component: () => import('../pages/api/HisonvueApiPage.vue') },
      { path: '', redirect: '/api/hisonjv' },
    ],
  },
  { path: '/', redirect: '/intro/overview' },
  { path: '/:pathMatch(.*)*', redirect: '/intro/overview' },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});
export default router;