<template>
    <HomeGabarit
        :publications="publications"
        @publicationSupprimee="onPublicationSupprimee($event)"
    >
        <div slot="titre">Home</div>
    </HomeGabarit>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';
import {
    GETTER_PUBLICATIONS,
    ACTION_CHERCHER_PUBLICATIONS,
    ACTION_SUPPRIMER_PUBLICATION
} from '../modules/Publications/PublicationModuleDefinition';
import { Publications } from '../modules/Publications/PublicationDomaine';
import HomeGabarit from '../components/home/HomeGabarit.vue';
const publicationModule = namespace('publication');

@Component({
    components: {
        HomeGabarit
    }
})
export default class HomePage extends Vue {
    @publicationModule.Getter(GETTER_PUBLICATIONS)
    public publications!: Publications;

    @publicationModule.Action(ACTION_CHERCHER_PUBLICATIONS)
    public chercherPublications!: () => void;
    @publicationModule.Action(ACTION_SUPPRIMER_PUBLICATION)
    public supprimerPublication!: (id: string) => void;

    protected created(): void {
        this.chercherPublications();
    }

    public onPublicationSupprimee(id: string): void {
        this.supprimerPublication(id);
    }
}
</script>

<style scoped lang="scss"></style>
