<template>
    <div>
        <m-icon-button
            iconName="m-svg__arrow--up"
            buttonSize="32px"
            iconSize="20px"
            :skin="hasUpvote ? 'primary' : 'light'"
            @click="onUpvoteClicked()"
        ></m-icon-button>
        {{ publication.upvotes.length }}
        <m-icon-button
            iconName="m-svg__arrow--down"
            buttonSize="32px"
            iconSize="20px"
            :skin="hasDownvote ? 'primary' : 'light'"
            @click="onDownvoteClicked()"
        ></m-icon-button>
        {{ publication.downvotes.length }}
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { Prop, Emit } from 'vue-property-decorator';
    import { Publication } from '../../modules/Publications/PublicationDomaine';
    import { User } from '../../modules/User/UserDomaine';
    const _ = require('lodash');

    @Component
    export default class VueVoter extends Vue {
        @Prop({ required: true })
        public publication!: Publication;
        @Prop({ required: true })
        public user!: User;

        @Emit('modifiee')
        public emitModifiee(publication: Publication): void {}

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

<style lang="scss" scoped></style>
