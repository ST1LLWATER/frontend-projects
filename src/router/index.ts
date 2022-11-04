import { createRouter, createWebHistory } from 'vue-router';
import Day1 from '../views/UserGreetingView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'day1',
      component: Day1,
    },
    {
      path: '/day2',
      name: 'day2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NotesView.vue'),
    },
    // {
    //   path: '/day3',
    //   name: 'day3',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/RickMorty.vue'),
    // },
  ],
});

export default router;
