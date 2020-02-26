<template>
    <div class="gabarit-login">
        <m-panel :highlighted="true">
            <slot name="header" slot="header"></slot>
            <slot></slot>
            <slot name="footer" slot="footer"></slot>
        </m-panel>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component
    export default class GabaritLogin extends Vue {}
</script>

<style lang="scss" scoped>
    @import '~@ulaval/modul-components/dist/styles/commons';

    .gabarit-login {
        margin: 0 auto;
        padding: $m-spacing--xxl $m-spacing;
        width: 100%;
        max-width: $m-max-width;
    }
</style>
