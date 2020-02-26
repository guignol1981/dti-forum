<template>
    <div class="m-u--app-body">
        <GabaritPrincipal>
            <template slot="header">
                <VueEntete></VueEntete>
            </template>
        </GabaritPrincipal>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import VueEntete from './vues/components/VueEntete.vue';
    import GabaritPrincipal from './vues/gabarits/GabaritPrincipal.vue';

    @Component({
        components: {
            GabaritPrincipal,
            VueEntete
        }
    })
    export default class App extends Vue {}
</script>

<style lang="scss">
    // modul sass overrides here.
    $m-font-path: '~@ulaval/modul-components/dist/assets/fonts/'; //this is required.
    @import '~@ulaval/modul-components/dist/styles/main.scss';
</style>
