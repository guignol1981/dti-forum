import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

export enum NomRoutes {
    HOME = 'Home',
    PUBLICATION = 'Publication'
}

const routes = [
    {
        path: '/',
        name: NomRoutes.HOME,
        component: Home
    },
    {
        path: '/publication/:id',
        name: NomRoutes.PUBLICATION,
        component: () =>
            import(
                /* webpackChunkName: "publication" */ '../components/publication/PublicationDetailsPage.vue'
            )
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
