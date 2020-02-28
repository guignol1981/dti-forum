<template>
    <m-panel
        class="publication"
        :highlighted="true"
        skin="light"
        :padding="false"
        :shadow="true"
    >
        <div slot="header" class="publication__header">
            <div class="publication__header__author">
                <div class="publication__profile-image">
                    <img
                        src="https://cdn5.vectorstock.com/i/1000x1000/99/94/default-avatar-placeholder-profile-icon-male-vector-23889994.jpg"
                    />
                </div>
                <span> auteur: {{ publication.auteur.username }} </span>
            </div>

            <h2 class="publication__title">
                {{ publication.titre }}
            </h2>
        </div>
        <div class="publication__body" v-html="publication.corps"></div>
        <div slot="footer" class="publication__footer">
            <slot name="voter"></slot>
            <div>
                <m-link :url="publicationDetailsLocation">Détails</m-link>
                <m-icon-button
                    v-if="publication.auteur._id === this.user._id"
                    @click="emitSupprimee(publication._id)"
                    iconName="m-svg__delete"
                    buttonSize="32px"
                    iconSize="20px"
                    skin="light"
                ></m-icon-button>
            </div>
        </div>
    </m-panel>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
    import { Publication } from '../../modules/Publications/PublicationDomaine';
    import { NomRoutes } from '../../router';
    import { Location } from 'vue-router';
    import { namespace } from 'vuex-class';
    import { GETTER_USER } from '../../modules/User/UserModuleDefinitions';
    import { User } from '../../modules/User/UserDomaine';
    const _ = require('lodash');

    const userModule = namespace('user');

    @Component
    export default class VuePublication extends Vue {
        @Prop({ required: true })
        public publication!: Publication;

        @Emit('supprimee')
        public emitSupprimee(id: string): void {}
        @Emit('modifiee')
        public emitModifiee(publication: Publication): void {}

        @userModule.Getter(GETTER_USER)
        public user!: User;

        public publicationDetailsLocation: Location = {
            name: NomRoutes.PUBLICATION,
            params: {
                id: this.publication._id!
            }
        };

        public get hasUpvote(): boolean {
            return !!this.publication.upvotes!.find(u => u == this.user._id);
        }

        public get hasDownvote(): boolean {
            return !!this.publication.downvotes!.find(u => u == this.user._id);
        }

        public onUpvoteClicked(): void {
            const clone: Publication = _.cloneDeep(this.publication);

            if (!this.hasUpvote) {
                if (this.hasDownvote) {
                    clone.downvotes!.splice(
                        clone.downvotes!.indexOf(this.user._id!),
                        1
                    );
                }
                clone.upvotes!.push(this.user._id!);
            } else {
                clone.upvotes!.splice(
                    clone.upvotes!.indexOf(this.user._id!),
                    1
                );
            }
            this.emitModifiee(clone);
        }

        public onDownvoteClicked(): void {
            const clone: Publication = Object.assign({}, this.publication);

            if (!this.hasDownvote) {
                if (this.hasUpvote) {
                    clone.upvotes!.splice(
                        clone.upvotes!.indexOf(this.user._id!),
                        1
                    );
                }
                clone.downvotes!.push(this.user._id!);
            } else {
                clone.downvotes!.splice(
                    clone.downvotes!.indexOf(this.user._id!),
                    1
                );
            }
            this.emitModifiee(clone);
        }
    }
</script>

<style scoped lang="scss">
    @import '~@ulaval/modul-components/dist/styles/commons';

    .publication {
        position: relative;

        + .publication {
            margin-top: $m-spacing--l;
        }

        &__header {
            display: flex;
            align-items: center;
            font-weight: bold;
            font-size: $m-font-size--h3;
            padding: 1rem;

            &__author {
                font-size: $m-font-size--s;
            }
        }

        &__title {
            margin: 0 0 0 $m-spacing--s;

            @media (min-width: $m-mq--min--s) {
                margin: 0 0 0 $m-spacing--m;
            }
        }

        &__profile-image {
            flex-shrink: 0;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;
            background: $m-color--grey;

            @media (min-width: $m-mq--min--s) {
                width: 44px;
                height: 44px;
            }

            img {
                width: 100%;
            }
        }

        &__body {
            text-align: start;
            padding: $m-spacing--m;
            min-height: $m-spacing--xl;
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
