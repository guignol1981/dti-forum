<template>
    <m-panel class="publication-reponse">
        {{ publicationReponse.body }}
    </m-panel>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';
import { PublicationReponse } from '../../modules/PublicationReponse/PublicationReponseDomaine';

@Component
export default class PublicationReponseVue extends Vue {
    @Prop({ default: '123' })
    public publicationReponse!: PublicationReponse;
}
</script>

<style lang="scss" scoped>
@import '~@ulaval/modul-components/dist/styles/commons';

.publication-reponse {
    margin-top: $m-spacing--m;
}
</style>
