import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage.vue';

Vue.use(VueRouter);

export enum NomRoutes {
    HOME_PAGE = 'Home',
    PUBLICATION = 'Publication'
}

const routes = [
    {
        path: '/',
        name: NomRoutes.HOME_PAGE,
        component: HomePage
    },
    {
        path: '/publication/:id',
        name: NomRoutes.PUBLICATION,
        component: () =>
            import(
                /* webpackChunkName: "publication" */ '../pages/PublicationDetailsPage.vue'
            )
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
