<template>
    <m-form :formGroup="formGroup" @submit="onSubmit()">
        <m-textfield
            label="Email"
            v-model="emailControl.value"
            v-m-control="emailControl"
            :error="emailControl.hasError()"
            :error-message="emailControl.errorMessage"
        ></m-textfield>

        <div>
            <m-textfield
                label="Password"
                type="password"
                v-model="passwordControl.value"
                v-m-control="passwordControl"
                :error="passwordControl.hasError()"
                :error-message="passwordControl.errorMessage"
            ></m-textfield>
            <m-textfield
                label="Confirm password"
                type="password"
                v-model="confirmPasswordControl.value"
                v-m-control="confirmPasswordControl"
                :error="confirmPasswordControl.hasError()"
                :error-message="confirmPasswordControl.errorMessage"
            ></m-textfield>
        </div>

        <m-validation-message
            v-if="formGroup.hasError()"
            class="m-u--margin-top"
            :error="formGroup.hasError()"
            :error-message="formGroup.errorMessage"
        ></m-validation-message>

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
        RequiredValidator,
        CompareValidator,
        ControlValidatorValidationType,
        ControlValidator
    } from '@ulaval/modul-components';

    @Component
    export default class VueRegisterFormulaire extends Vue {
        @Emit('submit')
        public emitSubmit(value: { email: string; password: string }): void {}

        public formGroup: FormGroup = new FormGroup(
            {
                email: new FormControl<string>([RequiredValidator()]),
                password: new FormControl<string>([RequiredValidator()]),
                confirmPassword: new FormControl<string>([])
            },
            [
                {
                    validationFunction: (
                        control: FormControl<string>
                    ): boolean => {
                        return (
                            this.passwordControl.value ===
                            this.confirmPasswordControl.value
                        );
                    },
                    error: {
                        message:
                            'Les champs password et confirmation de mot de passe doivent correspondre'
                    },
                    validationType: ControlValidatorValidationType.Correction
                } as ControlValidator
            ]
        );

        public get emailControl(): FormControl<string> {
            return this.formGroup.getControl('email') as FormControl<string>;
        }

        public get passwordControl(): FormControl<string> {
            return this.formGroup.getControl('password') as FormControl<string>;
        }

        public get confirmPasswordControl(): FormControl<string> {
            return this.formGroup.getControl('confirmPassword') as FormControl<
                string
            >;
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
