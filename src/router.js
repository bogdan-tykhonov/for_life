import {createRouter, createWebHashHistory} from 'vue-router';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'Home',
      component: () => import('./views/Home')
    },
    { 
      path: '/about',
      name: 'About',
      component: () => import('./views/About')
    },
    { 
      path: '/programs',
      name: 'Programs',
      component: () => import('./views/Programs')
    },
    { 
      path: '/mision',
      name: 'Mision',
      component: () => import('./views/Mision')
    },
    { 
      path: '/contacts',
      name: 'Contacts',
      component: () => import('./views/Contacts')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/home'
    }
  ],
  scrollBehavior () {
    return { 
      top: 0
    };
  }
});
