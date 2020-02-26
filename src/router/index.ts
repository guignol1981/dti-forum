import Vue from 'vue';
import VueRouter from 'vue-router';
import PagePublications from '../vues/pages/PagePublications.vue';

Vue.use(VueRouter);

export enum NomRoutes {
    PUBLICATIONS = 'Publications',
    PUBLICATION = 'Publication',
    ABOUT = 'About',
    PROFILE = 'Profile'
}

const routes = [
    {
        path: '/',
        name: NomRoutes.PUBLICATIONS,
        component: PagePublications
    },
    {
        path: '/profile',
        name: NomRoutes.PROFILE,
        component: PagePublications
    },
    {
        path: '/about',
        name: NomRoutes.ABOUT,
        component: PagePublications
    },
    {
        path: '/publications/:id',
        name: NomRoutes.PUBLICATION,
        component: () =>
            import(
                /* webpackChunkName: "publication" */ '../vues/pages/PagePublication.vue'
            )
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
