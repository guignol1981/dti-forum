<template>
	<div class="gabarit-principal">
		<header class="gabarit-principal__header-area">
			<div class="gabarit-principal__header">
				<VueLogoApp
					class="gabarit-principal__header-wraper"
				></VueLogoApp>
			</div>
			<slot name="menu"></slot>
		</header>
		<main class="gabarit-principal__body">
			<div class="gabarit-principal__body-wraper">
				<slot></slot>
			</div>
		</main>
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
	import VueLogoApp from '../components/VueLogoApp.vue';

	@Component({
		components: {
			VueLogoApp
		}
	})
	export default class GabaritPrincipal extends Vue {}
</script>

<style lang="scss" scoped>
	@import '~@ulaval/modul-components/dist/styles/commons';

	.gabarit-principal {
		&__logo {
			width: 35px;
			height: 35px;
			margin-left: $m-spacing;
		}

		&__header-area {
			background: $m-color--grey-lighter;
		}

		&__header {
			padding: $m-spacing--l $m-spacing;

			@media (min-width: $m-mq--min--s) {
				padding: $m-spacing--l $m-spacing--l;
			}
		}

		&__header-wraper,
		&__body-wraper {
			display: flex;
			margin: 0 auto;
			width: 100%;
			max-width: $m-max-width;
		}

		&__body {
			padding: $m-spacing--xl $m-spacing;

			@media (min-width: $m-mq--min--s) {
				padding: $m-spacing--xl $m-spacing--l;
			}
		}
	}
</style>
