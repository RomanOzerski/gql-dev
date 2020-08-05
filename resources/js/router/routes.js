import Home from '../components/Home';
import Hello from '../components/Hello';
import UsersIndex from '../components/UsersIndex';
import UsersEdit from '../components/UsersEdit';
import UsersCreate from '../components/UsersCreate';
import NotFound from '../components/NotFound';

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/hello',
        name: 'hello',
        component: Hello,
    },
    {
        path: '/users',
        name: 'users.index',
        component: UsersIndex,
    },
    {
        path: '/users/:id/edit',
        name: 'users.edit',
        component: UsersEdit,
    },
    {
      path: '/users/create',
      name: 'users.create',
      component: UsersCreate,
    },
    { 
        path: '/404',
        name: '404', 
        component: NotFound 
    },
    { 
        path: '*',
        redirect: '/404' 
    },
];