import { HttpService } from '@ulaval/modul-components/dist/utils/http/http';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import VueAPropos from '../vues/components/VueAPropos.vue';
import VueProfil from '../vues/components/VueProfil.vue';
import PageLogin from '../vues/pages/PageLogin.vue';
import PagePublic from '../vues/pages/PagePublic.vue';
import PagePublications from '../vues/pages/PagePublications.vue';

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
                meta: {
                    requiresAuth: true
                },
                component: PagePublications
            },
            {
                path: '/publications/:id',
                name: NomRoutes.PUBLICATION,
                meta: {
                    requiresAuth: true
                },
                component: () =>
                    import(
                        /* webpackChunkName: "publication" */ '../vues/pages/PagePublication.vue'
                    )
            },
            {
                path: '/profil',
                name: NomRoutes.PROFIL,
                meta: {
                    requiresAuth: true
                },
                component: VueProfil
            },
            {
                path: '/a-propos',
                name: NomRoutes.ABOUT,
                meta: {
                    requiresAuth: true
                },
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

const isAuthenticated: Function = (): Promise<boolean> => {
    return (Vue.prototype.$http as HttpService)
        .execute<boolean>({
            method: 'get',
            rawUrl: 'api/users/is-authenticated'
        })
        .then((response: any) => response.data)
        .catch(() => false);
};

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!(await isAuthenticated())) {
            next({ name: NomRoutes.LOGIN });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
