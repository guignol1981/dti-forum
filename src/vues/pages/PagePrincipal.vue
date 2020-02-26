<template>
    <GabaritPrincipal>
        <template slot="header">
            <VueEntete v-if="false"></VueEntete>
        </template>
    </GabaritPrincipal>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import GabaritPrincipal from '../gabarits/GabaritPrincipal.vue';
    import VueEntete from '../components/VueEntete.vue';

    @Component({
        components: {
            GabaritPrincipal,
            VueEntete
        }
    })
    export default class PagePrincipal extends Vue {}
</script>

<style lang="scss" scoped></style>
