<template>
    <div class="liste-publications">
        <slot></slot>
        <div class="liste-publications__actions">
            <m-searchfield
                v-model="valeurRecherche"
                label="Rechercher"
                class="liste-publications__searchfield"
                @search="onSearch($event)"
            ></m-searchfield>
            <m-add @click="onAjouterPublicationClicked()">
                <span v-if="isMqMinS">Créer une publication</span>
            </m-add>
        </div>
        <div class="m-u--margin-top--xl">
            <VuePublication
                v-for="(publication, index) in publicationsPaginees"
                :key="index"
                :publication="publication"
                @modifiee="onPublicationModifee($event)"
                @supprimee="onPublicationSupprimee($event)"
            >
                <VueVoter
                    slot="voter"
                    :publication="publication"
                    :user="user"
                    @modifiee="onPublicationModifee($event)"
                ></VueVoter>
            </VuePublication>
            <VuePublicationFormulaire
                :ouvert="formulairePublicationOuvert"
                @publicationCree="onPublicationCree($event)"
                @ferme="onFormulaireFerme()"
            ></VuePublicationFormulaire>
        </div>
        <m-pagination
            class="liste-publications__pagination"
            v-model="indexPagination"
            :items-per-page="publicationsParPages"
            :items-total="publicationsFiltrees.length"
            @change="scrollToTop()"
        ></m-pagination>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop, Emit } from 'vue-property-decorator';
    import { namespace } from 'vuex-class';
    import {
        GETTER_PUBLICATIONS,
        ACTION_CHERCHER_PUBLICATIONS,
        ACTION_AJOUTER_PUBLICATION,
        ACTION_SUPPRIMER_PUBLICATION,
        ACTION_MODIFIER_PUBLICATION
    } from '../../modules/Publications/PublicationModuleDefinition';
    import {
        Publication,
        Publications
    } from '../../modules/Publications/PublicationDomaine';
    import { ScrollToDuration } from '@ulaval/modul-components/dist/utils/scroll-to/scroll-to';
    import VuePublicationFormulaire from '../components/VuePublicationFormulaire.vue';
    import GabaritPublications from '../gabarits/GabaritPublications.vue';
    import VuePublication from '../components/VuePublication.vue';
    import { MediaQueries } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
    import { User } from '../../modules/User/UserDomaine';
    import VueVoter from './VueVoter.vue';

    const publicationModule = namespace('publication');

    @Component({
        components: {
            VuePublication,
            VuePublicationFormulaire,
            VueVoter
        },
        mixins: [MediaQueries]
    })
    export default class VueListePublications extends Vue {
        @Prop()
        public publications!: Publications;
        @Prop({ required: true })
        public user!: User;

        @Emit('ajouter-publication')
        public emitAjouterPublication(publication: Publication) {}
        @Emit('modifier-publication')
        public emitModifierPublication(publication: Publication) {}
        @Emit('supprimer-publication')
        public emitSupprimerPublication(id: string) {}

        public indexPagination: number = 1;
        public publicationsParPages: number = 20;
        public formulairePublicationOuvert: boolean = false;
        public valeurRecherche: string = '';

        public get publicationsFiltrees(): Publications {
            return this.publications.filter(p =>
                p.titre
                    .toLowerCase()
                    .includes(this.valeurRecherche.toLowerCase())
            );
        }

        public get publicationsPaginees(): Publications {
            return this.publicationsFiltrees.slice(
                (this.indexPagination - 1) * this.publicationsParPages,
                (this.indexPagination - 1) * this.publicationsParPages +
                    this.publicationsParPages
            );
        }

        public onAjouterPublicationClicked(): void {
            this.formulairePublicationOuvert = true;
        }

        public onPublicationModifee(publication: Publication): void {
            this.emitModifierPublication(publication);
        }

        public onPublicationCree(publication: Publication): void {
            this.emitAjouterPublication(publication);
        }

        public onPublicationSupprimee(id: string): void {
            this.emitSupprimerPublication(id);
        }

        public onFormulaireFerme(): void {
            this.formulairePublicationOuvert = false;
        }

        public scrollToTop(): void {
            const offsetToScroll: number =
                (this.$el as HTMLElement).offsetTop - 1000;
            this.$scrollTo.goTo(
                document.body,
                offsetToScroll,
                ScrollToDuration.Regular
            );
        }
    }
</script>

<style scoped lang="scss">
    @import '~@ulaval/modul-components/dist/styles/commons';

    .liste-publications {
        width: 100%;
        padding-bottom: $m-spacing--xxxl + $m-spacing--xxl;

        &__actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__searchfield {
            margin-top: 0;
        }

        &__pagination {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: white;
            z-index: 0;

            &::before {
                display: block;
                content: '';
                position: absolute;
                top: -$m-spacing--xxxl;
                background-image: linear-gradient(
                    rgba(white, 0),
                    $m-color--white
                );
                height: $m-spacing--xxxl;
                width: 100%;
            }
        }
    }
</style>
