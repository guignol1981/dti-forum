<template>
	<div class="logo-app">
		<p class="m-u--h1">DTI-Overflow</p>
		<img
			class="logo-app__image"
			src="https://apifriends.com/wp-content/uploads/2018/04/stack-overflow-orange.png"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { Component, Prop, Emit } from 'vue-property-decorator';

	@Component
	export default class VueLogoApp extends Vue {}
</script>

<style scoped lang="scss">
	@import '~@ulaval/modul-components/dist/styles/commons';

	.logo-app {
		display: flex;
		align-items: center;

		&__image {
			flex-shrink: 0;
			margin-left: $m-spacing--s;
			width: 40px;
		}
	}
</style>
