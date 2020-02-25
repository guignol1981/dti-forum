<template>
    <m-panel :highlighted="true">
        {{ publicationReponse.corps }}
    </m-panel>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Prop, Component } from 'vue-property-decorator';
    import { PublicationReponse } from '../modules/PublicationReponse/PublicationReponseDomaine';

    @Component
    export default class VuePublicationReponse extends Vue {
        @Prop({ required: true })
        public publicationReponse!: PublicationReponse;
    }
</script>

<style lang="scss" scoped></style>
