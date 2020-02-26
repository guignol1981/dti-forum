import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import PagePublications from '../vues/pages/PagePublications.vue';
import PagePublic from '../vues/pages/PagePublic.vue';
import PageLogin from '../vues/pages/PageLogin.vue';
import VueProfil from '../vues/components/VueProfil.vue';
import VueAPropos from '../vues/components/VueAPropos.vue';

Vue.use(VueRouter);

export enum NomRoutes {
    PUBLICATIONS = 'Publications',
    PUBLICATION = 'Publication',
    ABOUT = 'À propos',
    PROFIL = 'Profil',
    LOGIN = 'login'
}

const routes: RouteConfig[] = [
    {
        path: '/',
        name: NomRoutes.LOGIN,
        component: PageLogin
    },
    {
        path: '/public',
        component: PagePublic,
        redirect: {
            name: NomRoutes.PUBLICATIONS
        },
        children: [
            {
                path: '/publications',
                name: NomRoutes.PUBLICATIONS,
                component: PagePublications
            },
            {
                path: '/publications/:id',
                name: NomRoutes.PUBLICATION,
                component: () =>
                    import(
                        /* webpackChunkName: "publication" */ '../vues/pages/PagePublication.vue'
                    )
            },
            {
                path: '/profil',
                name: NomRoutes.PROFIL,
                component: VueProfil
            },
            {
                path: '/a-propos',
                name: NomRoutes.ABOUT,
                component: VueAPropos
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
