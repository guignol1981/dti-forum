<template>
    <GabaritLogin>
        <m-navbar :selected.sync="mode" skin="tab-underline">
            <m-navbar-item
                :value="pageLoginModes.SIGN_IN"
                label="Sign in"
            ></m-navbar-item>
            <m-navbar-item
                :value="pageLoginModes.REGISTER"
                label="Register"
            ></m-navbar-item>
        </m-navbar>
        <m-slide-transition :direction="slideTransitionDirection">
            <VueSignInFormulaire
                v-if="mode === pageLoginModes.SIGN_IN"
                class="m-u--padding-top--m"
                @submit="onSubmit($event)"
            ></VueSignInFormulaire>
            <VueRegisterFormulaire
                v-else
                class="m-u--padding-top--m"
                @submit="onSubmit($event)"
            ></VueRegisterFormulaire>
        </m-slide-transition>
        <m-validation-message
            v-if="erreur"
            class="m-u--margin-top"
            :error="true"
            :error-message="erreur"
        ></m-validation-message>
    </GabaritLogin>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import GabaritLogin from '../gabarits/GabaritLogin.vue';
    import {
        FormGroup,
        FormControl,
        RequiredValidator,
        CompareValidator
    } from '@ulaval/modul-components';
    import VueSignInFormulaire from '../components/VueSignInFormulaire.vue';
    import VueRegisterFormulaire from '../components/VueRegisterFormulaire.vue';
    import { namespace, Getter } from 'vuex-class';
    import {
        GETTER_LOGIN_STATUS,
        ACTION_REGISTER,
        ACTION_SIGN_IN
    } from '../../modules/User/UserModuleDefinitions';
    import { NomRoutes } from '../../router';
    import { LoginStatus } from '../../modules/User/UserDomaine';
    import { Watch } from 'vue-property-decorator';

    const userModule = namespace('user');

    enum PageLoginModes {
        SIGN_IN = 'Sign in',
        REGISTER = 'Register'
    }

    @Component({
        components: {
            GabaritLogin,
            VueSignInFormulaire,
            VueRegisterFormulaire
        }
    })
    export default class PageLogin extends Vue {
        @Getter('erreur') erreur!: string;

        @userModule.Getter(GETTER_LOGIN_STATUS)
        public loginStatus!: LoginStatus;

        @userModule.Action(ACTION_REGISTER)
        public enregistrerUser!: (credential: {
            email: string;
            password: string;
        }) => void;

        @userModule.Action(ACTION_SIGN_IN)
        public signIn!: (credential: {
            email: string;
            password: string;
        }) => void;

        @Watch('loginStatus')
        public onLoginStatusChange(): void {
            if (this.loginStatus === LoginStatus.SUCCES) {
                this.$router.push({ name: NomRoutes.PUBLICATIONS });
            }
        }

        public pageLoginModes = PageLoginModes;
        public mode: PageLoginModes = PageLoginModes.SIGN_IN;

        protected mounted(): void {
            this.$scrollTo.goToTop();
        }

        public onSubmit(credential: {
            username?: string;
            email: string;
            password: string;
        }): void {
            if (this.mode === PageLoginModes.REGISTER) {
                this.enregistrerUser(credential);
            } else {
                this.signIn(credential);
            }
        }

        public get slideTransitionDirection(): string {
            return this.mode === PageLoginModes.SIGN_IN
                ? 'left-to-right'
                : 'right-to-left';
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@ulaval/modul-components/dist/styles/commons';
</style>
