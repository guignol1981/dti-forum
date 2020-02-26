<template>
    <m-form :formGroup="formGroup" @submit="onSubmit()">
        <m-textfield
            v-model="emailControl.value"
            v-m-control="emailControl"
            label="Email"
            type="email"
            max-width="100%"
            :error="emailControl.hasError()"
            :error-message="emailControl.errorMessage"
        ></m-textfield>

        <m-textfield
            v-model="passwordControl.value"
            v-m-control="passwordControl"
            class="m-u--margin-top"
            label="Password"
            type="password"
            max-width="100%"
            :error="passwordControl.hasError()"
            :error-message="passwordControl.errorMessage"
        ></m-textfield>
        <m-textfield
            v-model="confirmPasswordControl.value"
            v-m-control="confirmPasswordControl"
            class="m-u--margin-top"
            label="Confirm password"
            type="password"
            max-width="100%"
            :error="confirmPasswordControl.hasError()"
            :error-message="confirmPasswordControl.errorMessage"
        ></m-textfield>

        <m-validation-message
            v-if="formGroup.hasError()"
            class="m-u--margin-top"
            :error="formGroup.hasError()"
            :error-message="formGroup.errorMessage"
        ></m-validation-message>

        <m-button class="m-u--margin-top--l" type="submit" skin="primary"
            >Register</m-button
        >
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

<style lang="scss" scoped></style>