<template>
    <div class="m-u--app-body">
        <GabaritPrincipal>
            <template slot="header">
                <EnteteVue></EnteteVue>
            </template>
        </GabaritPrincipal>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import HomePage from './pages/HomePage.vue';
    import GabaritPrincipal from './components/gabarits/GabaritPrincipal.vue';
    import Component from 'vue-class-component';
    import EnteteVue from './components/entete/Entete.vue';

    @Component({
        components: {
            GabaritPrincipal,
            EnteteVue
        }
    })
    export default class App extends Vue {}
</script>

<style lang="scss">
    // modul sass overrides here.
    $m-font-path: '~@ulaval/modul-components/dist/assets/fonts/'; //this is required.
    @import '~@ulaval/modul-components/dist/styles/main.scss';
</style>
