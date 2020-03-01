<template>
	<m-overlay
		id="publication-formulaire"
		:open.sync="ouvertInterne"
		@portalAfterClose="onAfterClose()"
	>
		<template slot="header">
			<h2 class="m-u--no-margin">
				{{ 'publication:formulaire-titre' | translate }}
			</h2>
		</template>
		<m-form
			:form-group="formGroup"
			@submit="onSubmit($event)"
			ref="publication-formulaire"
			class="publication-formulaire"
		>
			<m-textfield
				v-model="titreControl.value"
				v-m-control="titreControl"
				label="Titre"
				tag-style="h3"
				max-width="100%"
				:error="titreControl.hasError()"
				:error-message="titreControl.errorMessage"
			></m-textfield>
			<m-textarea
				class="publication-formulaire__textarea m-u--margin-top--m"
				v-model="corpsControl.value"
				v-m-control="corpsControl"
				label="Texte de la publication"
				max-width="100%"
				:error="corpsControl.hasError()"
				:error-message="corpsControl.errorMessage"
			></m-textarea>
		</m-form>
		<template slot="footer">
			<m-button @click="onSubmitClicked()">Publier</m-button>
			<m-button
				class="m-u--margin-left"
				skin="secondary"
				@click="onAnnulerClicked()"
				>Annuler</m-button
			>
		</template>
	</m-overlay>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { Emit, Component, Prop, Watch } from 'vue-property-decorator';
	import { MForm } from '@ulaval/modul-components/dist/components/form/form';
	import {
		FormGroup,
		FormControl,
		RequiredValidator,
		AbstractControl
	} from '@ulaval/modul-components';
	import { Publication } from '../../modules/Publications/PublicationDomaine';

	@Component
	export default class VuePublicationFormulaire extends Vue {
		@Prop({ default: false })
		public ouvert!: boolean;

		@Emit('publicationCree')
		private emitPublicationCree(publication: Publication): void {}

		@Emit('ferme')
		public emitFerme(): void {}

		@Watch('ouvert', { immediate: true })
		public onOuvertChangement(): void {
			this.ouvertInterne = this.ouvert;
		}

		public ouvertInterne: boolean = false;

		public formGroup: FormGroup = new FormGroup({
			titre: new FormControl<string>([RequiredValidator()]),
			corps: new FormControl<string>([RequiredValidator()])
		});

		public get titreControl(): FormControl<string> {
			return this.formGroup.getControl('titre') as FormControl<string>;
		}

		public get corpsControl(): FormControl<string> {
			return this.formGroup.getControl('corps') as FormControl<string>;
		}

		public onSubmit(): void {
			this.emitPublicationCree(this.formGroup.value);
			this.close();
		}

		public onSubmitClicked(): void {
			(this.$refs['publication-formulaire'] as MForm).submit();
		}

		public onAnnulerClicked(): void {
			this.close();
		}

		private close(): void {
			(this.$refs['publication-formulaire'] as MForm).reset();
			this.ouvertInterne = false;
			this.emitFerme();
		}
	}
</script>

<style scoped lang="scss">
	@import '~@ulaval/modul-components/dist/styles/commons';

	.publication-formulaire {
		display: flex;
		flex-direction: column;
	}
</style>
