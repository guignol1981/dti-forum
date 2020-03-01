<template>
	<m-panel :highlighted="true">
		{{ publicationReponse.corps }}
		<div slot="footer" class="publication-reponse__footer">
			<slot name="voter"></slot>
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
