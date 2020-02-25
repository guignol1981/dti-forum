<template>
    <div class="gabarit-publication">
        <div class="gabarit-publication__header">
            <slot name="header"></slot>
        </div>
        <div class="gabarit-publication__main">
            <slot></slot>
        </div>
        <div class="gabarit-publication__footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component
    export default class GabaritPublication extends Vue {}
</script>

<style lang="scss" scoped>
    @import '~@ulaval/modul-components/dist/styles/commons';

    .gabarit-publication {
        margin: 0 auto;
        padding: $m-spacing--xxl $m-spacing;
        width: 100%;
        max-width: $m-max-width;
        &__header {
        }

        &__main {
        }

        &__footer {
            background-color: greenyellow;
        }
    }
</style>
