<template>
    <div class="m-u--app-body">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component
    export default class App extends Vue {}
</script>

<style lang="scss">
    // modul sass overrides here.
    $m-font-path: '~@ulaval/modul-components/dist/assets/fonts/'; //this is required.
    @import '~@ulaval/modul-components/dist/styles/main.scss';

    html,
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        min-width: 320px;
    }

    .m-u--app-body {
        height: 100%;
    }
</style>
