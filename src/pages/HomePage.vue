<template>
    <HomeGabarit :publications="publications"></HomeGabarit>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';
import {
    GETTER_PUBLICATIONS,
    ACTION_CHERCHER_PUBLICATIONS
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

    protected created(): void {
        this.chercherPublications();
    }
}
</script>

<style scoped lang="scss"></style>
