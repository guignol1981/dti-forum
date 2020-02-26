<template>
    <m-panel :highlighted="true">
        {{ publicationReponse.corps }}

        <div slot="footer" class="publication-reponse__footer">
            <m-icon-button
                iconName="m-svg__arrow--up"
                buttonSize="32px"
                iconSize="20px"
                skin="light"
                @click="onUpvoteClicked()"
            ></m-icon-button>
            0
            <m-icon-button
                iconName="m-svg__arrow--down"
                buttonSize="32px"
                iconSize="20px"
                skin="light"
                @click="onDownvoteClicked()"
            ></m-icon-button>
            0
        </div>
    </m-panel>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Prop, Component } from 'vue-property-decorator';
    import { PublicationReponse } from '../../modules/PublicationReponse/PublicationReponseDomaine';

    @Component
    export default class VuePublicationReponse extends Vue {
        @Prop({ required: true })
        public publicationReponse!: PublicationReponse;

        public onUpvoteClicked(): void {}

        public onDownvoteClicked(): void {}
    }
</script>

<style lang="scss" scoped>
    @import '~@ulaval/modul-components/dist/styles/commons';

    .publication-reponse {
        &__footer {
            // background-color: $m-color--success;
        }
    }
</style>
