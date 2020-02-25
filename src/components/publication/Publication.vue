<template>
    <div class="publication">
        <m-panel
            :highlighted="true"
            skin="light"
            :padding="false"
            :shadow="true"
        >
            <div slot="header" class="publication__header">
                <img
                    class="publication-photo"
                    src="https://scontent.fyhu1-1.fna.fbcdn.net/v/t1.0-1/p160x160/81753965_10162849836970002_8979231814983876608_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=RLIjMw-6k6MAX__AL46&_nc_ht=scontent.fyhu1-1.fna&_nc_tp=6&oh=5318bff02e71a49e8757a2da9f3d3f48&oe=5EBCCEC8"
                />
                <span>
                    {{ publication.titre | truncate(30) }}
                </span>
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
                    -{{ publication.downvoteCount }}
                </div>
                <div>
                    <m-link :url="publicationDetailsLocation">Détails</m-link>
                    <m-icon-button
                        @click="emitSupprimee(publication.id)"
                        iconName="m-svg__delete"
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
                    upvoteCount: ++this.publication.upvoteCount!
                })
            );
        }

        public onDownvoteClicked(): void {
            this.emitModifiee(
                Object.assign(this.publication, {
                    downvoteCount: ++this.publication.downvoteCount!
                })
            );
        }
    }
</script>

<style scoped lang="scss">
    @import '~@ulaval/modul-components/dist/styles/commons';

    .publication {
        position: relative;

        &-photo {
            width: 50px;
            border-radius: 100%;
        }

        + .publication {
            margin-top: $m-spacing--l;
        }

        &__header {
            display: flex;
            justify-content: flex-start;
            font-weight: bold;
            font-size: $m-font-size--h3;
            padding: 1rem;

            & > span {
                margin-left: $m-spacing--l;
            }
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
