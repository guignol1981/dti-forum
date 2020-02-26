<template>
    <div class="publication-reponses">
        <VuePublicationReponse
            class="publication-reponses__reponse"
            v-for="(publicationReponse, index) in publicationReponses"
            :key="index"
            :publicationReponse="publicationReponse"
        ></VuePublicationReponse>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Prop, Component } from 'vue-property-decorator';
    import VuePublicationReponse from './VuePublicationReponse.vue';
    import { PublicationReponses } from '../../modules/PublicationReponse/PublicationReponseDomaine';

    @Component({
        components: {
            VuePublicationReponse
        }
    })
    export default class VuePublicationReponses extends Vue {
        @Prop({ required: true })
        public publicationReponses!: PublicationReponses;
    }
</script>

<style lang="scss" scoped>
    @import '~@ulaval/modul-components/dist/styles/commons';

    .publication-reponses {
        &__reponse {
            + .publication-reponses__reponse {
                margin-top: $m-spacing--l;
            }
        }
    }
</style>
