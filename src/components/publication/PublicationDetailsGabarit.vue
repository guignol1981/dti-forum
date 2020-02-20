<template>
    <div>
        <PublicationVue
            v-if="!!publication"
            :publication="publication"
        ></PublicationVue>
        <PublicationReponseVue
            v-for="(publicationReponse, index) in publicationReponses"
            :key="index"
            :publicationReponse="publicationReponse"
        ></PublicationReponseVue>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Publication } from '../../modules/Publications/PublicationDomaine';
import { PublicationReponses } from '../../modules/PublicationReponse/PublicationReponseDomaine';
import PublicationVue from './Publication.vue';
import PublicationReponseVue from './PublicationReponse.vue';

@Component({
    components: {
        PublicationVue,
        PublicationReponseVue
    }
})
export default class PublicationDetailsGabarit extends Vue {
    @Prop({ required: true })
    public publication!: Publication;

    @Prop({ required: true })
    public publicationReponses!: PublicationReponses;
}
</script>

<style lang="scss"></style>
