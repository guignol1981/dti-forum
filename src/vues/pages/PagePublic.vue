<template>
    <GabaritPrincipal>
        <VueMenu slot="menu"></VueMenu>
        <router-view v-if="!!user"></router-view>
    </GabaritPrincipal>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import GabaritPrincipal from '../gabarits/GabaritPrincipal.vue';
    import VueMenu from '../components/VueMenu.vue';
    import { namespace } from 'vuex-class';
    import {
        GETTER_USER,
        ACTION_CHERCHER_USER
    } from '../../modules/User/UserModuleDefinitions';
    import { User } from '../../modules/User/UserDomaine';

    const userModule = namespace('user');

    @Component({
        components: {
            GabaritPrincipal,
            VueMenu
        }
    })
    export default class PagePublic extends Vue {
        @userModule.Getter(GETTER_USER)
        public user!: User;

        @userModule.Action(ACTION_CHERCHER_USER)
        public chercherUser!: () => void;

        protected created(): void {
            this.chercherUser();
        }
    }
</script>

<style lang="scss" scoped></style>
