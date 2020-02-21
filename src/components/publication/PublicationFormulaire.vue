<template>
    <m-overlay
        id="publication-formulaire"
        :open.sync="ouvert"
        @portalAfterClose="onAfterClose()"
    >
        <template slot="header">
            <h2 class="m-u--no-margin">
                {{ 'publication:formulaire-titre' | translate }}
            </h2>
        </template>
        <m-form :form-group="formGroup" @submit="onSubmit($event)">
            <m-textfield
                v-model="titreControl.value"
                v-m-control="titreControl"
                :label="'# Titre'"
                :error="titreControl.hasError()"
                :error-message="titreControl.errorMessage"
            ></m-textfield>
            <m-textfield
                v-model="corpsControl.value"
                v-m-control="corpsControl"
                :label="'# Corps'"
                :error="corpsControl.hasError()"
                :error-message="corpsControl.errorMessage"
            ></m-textfield>
        </m-form>
        <template slot="footer">
            <m-button type="submit">Soumettre</m-button>
            <m-button class="m-u--margin-left" type="reset" skin="secondary"
                >Réinitialiser</m-button
            >
        </template>
    </m-overlay>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Emit, Component, Prop } from 'vue-property-decorator';
    import { Publication } from '../../modules/Publications/PublicationDomaine';
    import {
        FormGroup,
        FormControl,
        RequiredValidator,
        AbstractControl
    } from '@ulaval/modul-components';

    @Component
    export default class PublicationFormulaireVue extends Vue {
        public ouvert: boolean = true;

        @Emit('publication-cree')
        private emitPublicationCree(publication: Publication): void {}

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
            console.log(this.formGroup.value);
        }

        public onAfterClose(): void {
            this.$destroy();
        }
    }
</script>

<style scoped lang="scss">
    @import '@/styles/commun.scss';
</style>
