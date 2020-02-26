<template>
    <article class="publication-details">
        <header class="publication-details__header">
            <h1 class="publication-details__title">
                {{ publication.titre | capitalize }}
            </h1>
            <div class="publication-details__right-header-contain">
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
            </div>
        </header>
        <div class="publication-details__body" v-html="publication.corps"></div>
    </article>
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
        width: 100%;
        max-width: $m-max-width;

        &__header {
            padding-bottom: 12px;
            border-bottom: 2px solid $m-color--border;

            + .publication-details__body {
                margin-top: $m-spacing--m;
            }

            @media (min-width: $m-mq--min--s) {
                display: flex;
                align-items: center;
            }
        }

        &__title {
            flex: 1 1 auto;

            + .publication-details__right-header-contain {
                margin-top: $m-spacing--s;
            }
        }

        &__right-header-contain {
            flex-shrink: 0;
        }
    }
</style>
