<template>
    <GabaritPrincipal>
        <VueMenu slot="menu"></VueMenu>
        <router-view></router-view>
    </GabaritPrincipal>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import GabaritPrincipal from '../gabarits/GabaritPrincipal.vue';
    import VueMenu from '../components/VueMenu.vue';

    @Component({
        components: {
            GabaritPrincipal,
            VueMenu
        }
    })
    export default class PagePublic extends Vue {}
</script>

<style lang="scss" scoped></style>
