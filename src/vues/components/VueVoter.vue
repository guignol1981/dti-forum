<template>
	<div>
		<m-icon-button
			iconName="m-svg__arrow--up"
			buttonSize="32px"
			iconSize="20px"
			:skin="hasUpvote ? 'primary' : 'light'"
			@click="onUpvoteClicked()"
		></m-icon-button>
		{{ votable.upvotes.length }}
		<m-icon-button
			iconName="m-svg__arrow--down"
			buttonSize="32px"
			iconSize="20px"
			:skin="hasDownvote ? 'primary' : 'light'"
			@click="onDownvoteClicked()"
		></m-icon-button>
		{{ votable.downvotes.length }}
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { Prop, Emit, Watch } from 'vue-property-decorator';
	import { Votable } from '../../modules/Publications/PublicationDomaine';
	import { User } from '../../modules/User/UserDomaine';
	const _ = require('lodash');

	@Component
	export default class VueVoter extends Vue {
		@Prop({ required: true })
		public votable!: Votable;
		@Prop({ required: true })
		public user!: User;

		@Emit('modifiee')
		public emitModifiee(votable: Votable): void {}

		public get hasUpvote(): boolean {
			return !!this.votable.upvotes!.find(u => u == this.user._id);
		}

		public get hasDownvote(): boolean {
			return !!this.votable.downvotes!.find(u => u == this.user._id);
		}

		public onUpvoteClicked(): void {
			const clone: Votable = _.cloneDeep(this.votable);

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
			const clone: Votable = Object.assign({}, this.votable);

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
