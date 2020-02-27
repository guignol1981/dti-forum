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
        public pageLoginModes = PageLoginModes;
        public mode: PageLoginModes = PageLoginModes.SIGN_IN;

        protected mounted(): void {
            this.$scrollTo.goToTop();
        }

        public onSubmit(value: { email: string; password: string }): void {}

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
