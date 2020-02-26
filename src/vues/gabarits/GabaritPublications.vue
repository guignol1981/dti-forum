<template>
    <div class="gabarit-publications">
        <main class="gabarit-publications__body">
            <slot></slot>
            <m-scroll-top
                class="gabarit-publications-scroll-top"
                position="fixed"
                duration="long"
            ></m-scroll-top>
        </main>
        <slot name="footer"></slot>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component
    export default class GabaritPublications extends Vue {}
</script>

<style lang="scss" scoped>
    @import '~@ulaval/modul-components/dist/styles/commons';

    .gabarit-publications {
        &-scroll-top {
            & > input {
                z-index: 2000 !important;
            }
        }

        &__body {
            margin: 0 auto;
            padding: $m-spacing--xxl $m-spacing;
            width: 100%;
            max-width: $m-max-width;
        }
    }
</style>
