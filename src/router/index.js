import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Adventure from '../views/Adventure.vue';
import Campaign1 from '../views/campaigns/Campaign1.vue';
import Campaign2 from '../views/campaigns/Campaign2.vue';
import Campaign3 from '../views/campaigns/Campaign3.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/adventure',
    component: Adventure,
    children: [
      {
        path: 'lost-kingdom',
        component: Campaign1,
      },
      {
        path: 'shadows-abyss',
        component: Campaign2,
      },
      {
        path: 'eternal-flame',
        component: Campaign3,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
