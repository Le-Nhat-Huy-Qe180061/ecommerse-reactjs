import { lazy } from 'react'; // thư viện để xử lý bất đồng bộ

const routers = [
    {
        path: '/',
        component: lazy(() => import('@components/HomePage/HomePage')) //import ở đây là bất đồng bộ
    },
    {
        path: '/blog',
        component: lazy(() => import('@components/Blog/Blog'))
    }
];

export default routers;
