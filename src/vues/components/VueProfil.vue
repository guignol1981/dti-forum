<template>
	<div class="profil">
		<div class="profil__image">
			<img
				src="https://cdn5.vectorstock.com/i/1000x1000/99/94/default-avatar-placeholder-profile-icon-male-vector-23889994.jpg"
			/>
		</div>
		<div class="profil__body">
			<h1 class="profil__name">{{ user.username }}</h1>
			<p class="profil__email">
				<a
					class="m-u--link"
					href="mailto:vincent.guillemette@dti.ulaval.ca"
					>{{ user.email }}</a
				>
			</p>
		</div>
		<m-button @click="onDeconnecterClicked()">Deconnecter</m-button>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { Component, Prop, Emit } from 'vue-property-decorator';
	import { namespace } from 'vuex-class';
	import {
		GETTER_USER,
		ACTION_SIGN_OUT
	} from '../../modules/User/UserModuleDefinitions';
	import { User } from '../../modules/User/UserDomaine';
	import { NomRoutes } from '../../router';

	const userModule = namespace('user');

	@Component
	export default class VueProfil extends Vue {
		@userModule.Getter(GETTER_USER)
		public user!: User;

		@userModule.Action(ACTION_SIGN_OUT)
		public signOut!: () => void;

		public onDeconnecterClicked(): void {
			this.signOut();
			this.$router.push({ name: NomRoutes.LOGIN });
		}
	}
</script>

<style scoped lang="scss">
	@import '~@ulaval/modul-components/dist/styles/commons';

	.profil {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background: $m-color--grey-lightest;
		padding: $m-spacing--m $m-spacing;
		border: 1px solid $m-color--grey-light;
		width: 100%;

		@media (min-width: $m-mq--min--s) {
			flex-direction: row;
			padding: $m-spacing--l;
		}

		&__image {
			flex-shrink: 0;
			margin-left: $m-spacing--s;
			width: 70px;
			height: 70px;
			overflow: hidden;
			border-radius: 50%;
			// display: flex;
			align-items: center;
			justify-content: center;
			background: $m-color--grey-light;

			img {
				width: 100%;
			}

			+ .profil__body {
				margin: $m-spacing 0 0 0;

				@media (min-width: $m-mq--min--s) {
					margin: 0 0 0 $m-spacing--l;
				}
			}
		}

		&__body {
			flex: 1 1 auto;
			width: 100%;

			@media (max-width: $m-mq--max--s) {
				text-align: center;
			}
		}

		&__email {
			margin-top: $m-spacing--s;
		}
	}
</style>
