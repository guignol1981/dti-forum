<template>
	<m-form :formGroup="formGroup" @submit="onSubmit()">
		<m-textfield
			label="Email"
			v-model="emailControl.value"
			v-m-control="emailControl"
			max-width="100%"
			type="email"
			:error="emailControl.hasError()"
			:error-message="emailControl.errorMessage"
		></m-textfield>
		<m-textfield
			class="m-u--margin-top"
			label="Password"
			type="password"
			v-model="passwordControl.value"
			v-m-control="passwordControl"
			max-width="100%"
			:error="passwordControl.hasError()"
			:error-message="passwordControl.errorMessage"
		></m-textfield>
		<m-button class="m-u--margin-top--l" type="submit" skin="primary"
			>Sign in</m-button
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

<style lang="scss" scoped></style>
