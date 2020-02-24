<template>
    <div class="publication">
        <m-panel :highlighted="true" skin="light" :padding="false">
            <div slot="header" class="publication__header">
                {{ publication.titre | truncate(30) }}
            </div>
            <div class="publication__body">{{ publication.corps }}</div>
            <div slot="footer" class="publication__footer">
                <div>
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
                    {{ publication.downvoteCount }}
                </div>
                <div>
                    <m-link :url="publicationDetailsLocation">détails</m-link>
                    <m-icon-button
                        @click="emitSupprimee(publication.id)"
                        buttonSize="32px"
                        iconSize="20px"
                        skin="light"
                    ></m-icon-button>
                </div>
            </div>
        </m-panel>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
    import { Publication } from '../../modules/Publications/PublicationDomaine';
    import { NomRoutes } from '../../router';
    import { Location } from 'vue-router';

    @Component
    export default class PublicationVue extends Vue {
        @Prop({ required: true })
        public publication!: Publication;
        @Emit('supprimee')
        public emitSupprimee(id: string): void {}
        @Emit('modifiee')
        public emitModifiee(publication: Publication): void {}

        public publicationDetailsLocation: Location = {
            name: NomRoutes.PUBLICATION,
            params: {
                id: this.publication.id!
            }
        };

        public onUpvoteClicked(): void {
            this.emitModifiee(
                Object.assign(this.publication, {
                    upvoteCount: ++this.publication.upvoteCount
                })
            );
        }

        public onDownvoteClicked(): void {
            this.emitModifiee(
                Object.assign(this.publication, {
                    downvoteCount: ++this.publication.downvoteCount
                })
            );
        }
    }
</script>

<style scoped lang="scss">
    @import '~@ulaval/modul-components/dist/styles/commons';

    .publication {
        margin-top: $m-spacing--m;

        &__header {
            display: flex;
            justify-content: flex-start;
            font-weight: bold;
            font-size: $m-font-size--h3;
            padding: 1rem;
        }

        &__body {
            text-align: start;
            padding: $m-spacing--m;
            min-height: 5rem;
        }

        &__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: $m-color--white;
            padding: $m-spacing--s !important;

            & > div > * {
                margin-left: $m-spacing--s;
            }
        }
    }
</style>
