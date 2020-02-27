<template>
    <m-navbar
        class="menu"
        :max-width="mNavbarMaxWidthRegular"
        :selected="$route.name"
    >
        <m-navbar-item
            v-for="(location, index) in locations"
            :key="index"
            :value="location.name"
            :label="location.name"
            :url="{ name: location.name }"
        ></m-navbar-item>
    </m-navbar>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
    import { Location } from 'vue-router';
    import { NomRoutes } from '../../router';

    @Component
    export default class VueMenu extends Vue {
        public locations: Location[] = [
            {
                name: NomRoutes.PUBLICATIONS
            },
            {
                name: NomRoutes.PROFIL
            },
            {
                name: NomRoutes.ABOUT
            }
        ];

        public mNavbarMaxWidthRegular = '1000px';
    }
</script>

<style lang="scss" scoped>
    @import '~@ulaval/modul-components/dist/styles/commons';

    .menu {
        padding: 0 $m-spacing;

        @media (min-width: $m-mq--min--s) {
            padding: 0 $m-spacing--l;
        }
    }
</style>
