import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import PagePublications from '../pages/PagePublications.vue';

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
