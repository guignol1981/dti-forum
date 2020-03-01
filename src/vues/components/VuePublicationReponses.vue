<template>
	<div class="publication-reponses">
		<VuePublicationReponse
			class="publication-reponses__reponse"
			v-for="(publicationReponse, index) in publicationReponses"
			:key="index"
			:publicationReponse="publicationReponse"
		>
			<template slot="voter">
				<VueVoter
					:votable="publicationReponse"
					:user="user"
					@modifiee="emitPublicationReponseModifiee($event)"
				></VueVoter>
			</template>
		</VuePublicationReponse>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { Prop, Component, Emit } from 'vue-property-decorator';
	import VuePublicationReponse from './VuePublicationReponse.vue';
	import {
		PublicationReponses,
		PublicationReponse
	} from '../../modules/PublicationReponse/PublicationReponseDomaine';
	import VueVoter from './VueVoter.vue';
	import { User } from '../../modules/User/UserDomaine';

	@Component({
		components: {
			VuePublicationReponse,
			VueVoter
		}
	})
	export default class VuePublicationReponses extends Vue {
		@Prop({ required: true })
		public publicationReponses!: PublicationReponses;
		@Prop({ required: true })
		public user!: User;

		@Emit('publication-reponse-modifiee')
		public emitPublicationReponseModifiee(
			publicationReponse: PublicationReponse
		): void {}
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
