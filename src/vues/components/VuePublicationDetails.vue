<template>
    <div class="publication-details">
        <h2>{{ publication.titre | capitalize }}</h2>
        <div class="publication-details__body">
            {{ publication.corps }}
        </div>
        <template>
            <m-icon-button
                iconName="m-svg__arrow--up"
                buttonSize="32px"
                iconSize="20px"
                skin="light"
                @click="onUpvoteClicked()"
            ></m-icon-button>
            {{ publication.upvoteCount }}
            <m-icon-button
                iconName="m-svg__arrow--down"
                buttonSize="32px"
                iconSize="20px"
                skin="light"
                @click="onDownvoteClicked()"
            ></m-icon-button>
            -{{ publication.downvoteCount }}
        </template>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { Prop } from 'vue-property-decorator';
    import { Publication } from '../../modules/Publications/PublicationDomaine';

    @Component
    export default class VuePublicationDetails extends Vue {
        @Prop({ required: true })
        public publication!: Publication;
    }
</script>

<style lang="scss" scoped>
    @import '~@ulaval/modul-components/dist/styles/commons';

    .publication-details {
        margin: 0 auto;
        padding: $m-spacing--xxl $m-spacing;
        width: 100%;
        max-width: $m-max-width;

        &__body {
            padding: $m-spacing;
        }
    }
</style>
