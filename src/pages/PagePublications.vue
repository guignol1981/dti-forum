<template>
    <GabaritPublications>
        <div class="page-publications__body">
            <div class="page-publications-actions">
                <m-searchfield
                    placeholder="Rechercher..."
                    class="page-publications-actions__recherche"
                    @search="onSearch($event)"
                ></m-searchfield>
                <m-add @click="onAjouterPublicationClicked()"
                    >Ajouter publication</m-add
                >
            </div>
            <div>
                <PublicationVue
                    v-for="(publication, index) in publicationsPaginees"
                    :key="index"
                    :publication="publication"
                    @modifiee="onPublicationModifee($event)"
                    @supprimee="onPublicationSupprimee($event)"
                ></PublicationVue>
                <PublicationFormulaireVue
                    :ouvert="formulairePublicationOuvert"
                    @publicationCree="onPublicationCree($event)"
                    @ferme="onFormulaireFerme()"
                ></PublicationFormulaireVue>
            </div>
        </div>

        <template slot="footer">
            <m-pagination
                class="page-publications__pagination"
                v-model="indexPagination"
                :items-per-page="publicationsParPages"
                :items-total="publications.length"
                @change="scrollToTop()"
            ></m-pagination>
        </template>
    </GabaritPublications>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import GabaritPublications from '../components/gabarits/GabaritPublications.vue';
    import { namespace } from 'vuex-class';
    import {
        GETTER_PUBLICATIONS,
        ACTION_CHERCHER_PUBLICATIONS,
        ACTION_AJOUTER_PUBLICATION,
        ACTION_SUPPRIMER_PUBLICATION,
        ACTION_MODIFIER_PUBLICATION
    } from '../modules/Publications/PublicationModuleDefinition';
    import {
        Publication,
        Publications
    } from '../modules/Publications/PublicationDomaine';
    import PublicationFormulaireVue from '../components/publication/PublicationFormulaire.vue';
    import PublicationVue from '../components/publication/Publication.vue';
    import { ScrollToDuration } from '@ulaval/modul-components/dist/utils/scroll-to/scroll-to';

    const publicationModule = namespace('publication');

    @Component({
        components: {
            GabaritPublications,
            PublicationVue,
            PublicationFormulaireVue
        }
    })
    export default class PagePublication extends Vue {
        @publicationModule.Getter(GETTER_PUBLICATIONS)
        public publications!: Publications;

        @publicationModule.Action(ACTION_CHERCHER_PUBLICATIONS)
        public chercherPublications!: () => void;
        @publicationModule.Action(ACTION_MODIFIER_PUBLICATION)
        public modifierPublication!: (publication: Publication) => void;
        @publicationModule.Action(ACTION_AJOUTER_PUBLICATION)
        public ajouterPublication!: (publication: Publication) => void;
        @publicationModule.Action(ACTION_SUPPRIMER_PUBLICATION)
        public supprimerPublication!: (id: string) => void;

        public indexPagination: number = 1;
        public publicationsParPages: number = 20;
        public formulairePublicationOuvert: boolean = false;

        protected created(): void {
            this.chercherPublications();
        }

        public get publicationsPaginees(): Publications {
            return this.publications.slice(
                (this.indexPagination - 1) * this.publicationsParPages,
                (this.indexPagination - 1) * this.publicationsParPages +
                    this.publicationsParPages
            );
        }

        public onAjouterPublicationClicked(): void {
            this.formulairePublicationOuvert = true;
        }

        public onPublicationModifee(publication: Publication): void {
            this.modifierPublication(publication);
        }

        public onPublicationCree(publication: Publication): void {
            this.ajouterPublication(publication);
        }

        public onPublicationSupprimee(id: string): void {
            this.supprimerPublication(id);
        }

        public onFormulaireFerme(): void {
            this.formulairePublicationOuvert = false;
        }

        public onSearch(recherche: string): void {}

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

    .page-publications {
        &__body {
            padding-bottom: $m-spacing--xxxl;
        }

        &-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: $m-spacing--l;

            &__recherche {
                margin-top: $m-spacing--l;
            }
        }

        &__pagination {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: white;

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
