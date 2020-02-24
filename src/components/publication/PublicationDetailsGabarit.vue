<template>
    <div>
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
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

    @Component
    export default class PublicationDetailsGabarit extends Vue {}
</script>

<style lang="scss"></style>
