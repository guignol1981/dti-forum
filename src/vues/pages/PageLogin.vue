<template>
    <GabaritLogin>
        <div slot="header">
            <m-navbar :selected="mode" skin="tab-underline">
                <m-navbar-item
                    :value="pageLoginModes.SIGN_IN"
                    @click="mode = pageLoginModes.SIGN_IN"
                    label="Sign in"
                ></m-navbar-item>
                <m-navbar-item
                    :value="pageLoginModes.REGISTER"
                    @click="mode = pageLoginModes.REGISTER"
                    label="Register"
                ></m-navbar-item>
            </m-navbar>
        </div>
        <VueSignInFormulaire
            v-if="mode === pageLoginModes.SIGN_IN"
            @submit="onSubmit($event)"
        ></VueSignInFormulaire>
        <VueRegisterFormulaire
            v-else
            @submit="onSubmit($event)"
        ></VueRegisterFormulaire>
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

        public onSubmit(value: { email: string; password: string }): void {}
    }
</script>

<style lang="scss" scoped>
    @import '~@ulaval/modul-components/dist/styles/commons';
</style>
