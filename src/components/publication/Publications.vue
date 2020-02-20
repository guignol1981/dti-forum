<template>
    <div class="publications">
        <div v-for="(publication, index) in publications" :key="index">
            <publication-vue :publication="publication"></publication-vue>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import {
    GETTER_PUBLICATIONS,
    ACTION_CHERCHER_PUBLICATIONS
} from '../../modules/Publications/PublicationModuleDefinition';
import { Publications } from '../../modules/Publications/PublicationDomaine';
import PublicationVue from './Publication.vue';
const publicationModule = namespace('publication');
@Component({
    components: {
        PublicationVue
    }
})
export default class PublicationsVue extends Vue {
    @publicationModule.Getter(GETTER_PUBLICATIONS)
    public publications!: Publications;
    @publicationModule.Action(ACTION_CHERCHER_PUBLICATIONS)
    public chercherPublications!: () => void;

    protected created(): void {
        this.chercherPublications();
    }
}
</script>

<style scoped lang="scss">
.publications {
    width: 50%;
}
</style>
