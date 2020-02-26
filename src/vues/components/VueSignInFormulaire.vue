<template>
    <m-form :formGroup="formGroup" @submit="onSubmit()">
        <m-textfield
            label="Email"
            v-model="emailControl.value"
            v-m-control="emailControl"
            :error="emailControl.hasError()"
            :error-message="emailControl.errorMessage"
        ></m-textfield>
        <m-textfield
            label="Password"
            type="password"
            v-model="passwordControl.value"
            v-m-control="passwordControl"
            :error="passwordControl.hasError()"
            :error-message="passwordControl.errorMessage"
        ></m-textfield>
        <div class="sign-in-formulaire__actions">
            <m-button
                type="submit"
                class="sign-in-formulaire__actions__action"
                skin="primary"
                >Sign in</m-button
            >
            <m-button
                type="reset"
                class="sign-in-formulaire__actions__action"
                skin="secondary"
                >Reset</m-button
            >
        </div>
    </m-form>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { Emit } from 'vue-property-decorator';
    import {
        FormGroup,
        FormControl,
        RequiredValidator
    } from '@ulaval/modul-components';

    @Component
    export default class VueSignInFormulaire extends Vue {
        @Emit('submit')
        public emitSubmit(value: { email: string; password: string }): void {}

        public formGroup: FormGroup = new FormGroup({
            email: new FormControl<string>([RequiredValidator()]),
            password: new FormControl<string>([RequiredValidator()])
        });

        public get emailControl(): FormControl<string> {
            return this.formGroup.getControl('email') as FormControl<string>;
        }

        public get passwordControl(): FormControl<string> {
            return this.formGroup.getControl('password') as FormControl<string>;
        }

        public onSubmit(): void {
            this.emitSubmit(this.formGroup.value);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@ulaval/modul-components/dist/styles/commons';

    .sign-in-formulaire {
        &__actions {
            margin-top: $m-spacing--m;

            &__action {
                + .sign-in-formulaire__actions__action {
                    margin-left: $m-spacing--m;
                }
            }
        }
    }
</style>
