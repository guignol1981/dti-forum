<template>
    <div>Gabarit works!</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Publication } from '../../modules/Publications/PublicationDomaine';
import { PublicationReponses } from '../../modules/PublicationReponses/PublicationReponseDomaine';

@Component
export default class PublicationDetailsGabarit extends Vue {
    @Prop({ required: true })
    public publication!: Publication;

    @Prop({ required: true })
    public publicatonResponse!: PublicationReponses;
}
</script>

<style lang="scss"></style>
