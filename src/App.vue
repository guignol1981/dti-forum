<template>
    <div class="m-u--app-body">
        <m-button @click="onDeconnecterClicked()">Deconnecter</m-button>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { namespace } from 'vuex-class';
    import {
        ACTION_CHERCHER_USER,
        GETTER_USER,
        ACTION_LOGOUT
    } from './modules/User/UserModuleDefinitions';
    import { User } from './modules/User/UserDomaine';
    import { NomRoutes } from './router';

    const userModule = namespace('user');

    @Component
    export default class App extends Vue {
        @userModule.Action(ACTION_LOGOUT)
        public logout!: () => void;

        public onDeconnecterClicked(): void {
            this.logout();
            this.$router.push({ name: NomRoutes.LOGIN });
        }
    }
</script>

<style lang="scss">
    // modul sass overrides here.
    $m-font-path: '~@ulaval/modul-components/dist/assets/fonts/'; //this is required.
    @import '~@ulaval/modul-components/dist/styles/main.scss';

    html,
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        min-width: 320px;
    }

    .m-u--app-body {
        height: 100%;
    }
</style>
