<template>
  <PublicationDetailsGabarit :publications="publications"></PublicationDetailsGabarit>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
const publicationModule = namespace('publication');
import Component from 'vue-class-component';
import PublicationDetailsGabarit from './PublicationDetailsGabarit.vue';
import {
  GETTER_PUBLICATIONS,
  ACTION_CHERCHER_PUBLICATIONS
} from '../../modules/Publications/PublicationModuleDefinition';
import { Publications } from '../../modules/Publications/PublicationDomaine';

@Component({
  components: {
    PublicationDetailsGabarit
  }
})
export default class PublicationDetailsPage extends Vue {
  @publicationModule.Getter(GETTER_PUBLICATIONS)
  public publications!: Publications;
  @publicationModule.Getter(ACTION_CHERCHER_PUBLICATIONS)
  public chercherPublication!: () => void;

  protected created(): void {
    this.chercherPublication();
  }
}
</script>

<style lang="scss"></style>
