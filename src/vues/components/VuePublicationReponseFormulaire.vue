<template>
    <m-form
        :formGroup="formGroup"
        @submit="onSubmit()"
        class="publication-reponse-formulaire"
    >
        <m-textarea
            v-model="corpsControl.value"
            class="publication-reponse-formulaire__text-area"
            label="Réponse"
            :error="corpsControl.hasError()"
            :error-message="corpsControl.errorMessage"
        ></m-textarea>
        <!-- <m-button type="submit">Répondre</m-button> -->
    </m-form>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { Emit, Prop } from 'vue-property-decorator';
    import {
        FormGroup,
        FormControl,
        RequiredValidator
    } from '@ulaval/modul-components';
    import { PublicationReponse } from '../../modules/PublicationReponse/PublicationReponseDomaine';

    @Component
    export default class VuePublicationReponseFormulaire extends Vue {
        @Emit('publicationReponseCree')
        public emitPublicationReponseCree(
            publicationReponse: PublicationReponse
        ): void {}

        public formGroup: FormGroup = new FormGroup({
            corps: new FormControl<string>([RequiredValidator()])
        });

        public get corpsControl(): FormControl<string> {
            return this.formGroup.getControl('corps') as FormControl<string>;
        }

        public onSubmit(): void {
            this.emitPublicationReponseCree(this.formGroup.value);
        }
    }
</script>

<style lang="scss" scoped>
    .publication-reponse-formulaire {
        display: flex;
        justify-content: space-between;

        &__text-area {
            max-width: 75% !important;
        }
    }
</style>
