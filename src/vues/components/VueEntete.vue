<template>
    <m-accordion-transition class="entete">
        <m-navbar :max-width="'1000px'" :selected="selected">
            <m-navbar-item
                v-for="(location, index) in locations"
                :key="index"
                :value="index"
                :label="location.name"
                :url="location"
                @click="onNavbarItemClicked(location.name)"
            ></m-navbar-item>
        </m-navbar>
    </m-accordion-transition>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
    import { Location } from 'vue-router';
    import { NomRoutes } from '../../router';

    @Component
    export default class VueEntete extends Vue {
        public selected: number = 0;
        public locations: Location[] = [
            {
                name: NomRoutes.PUBLICATIONS
            },
            {
                name: NomRoutes.PROFILE
            },
            {
                name: NomRoutes.ABOUT
            }
        ];

        protected created(): void {
            this.selected = this.locations
                .map(l => l.name)
                .indexOf(this.$route.name);
        }

        public onNavbarItemClicked(nomRoute: string): void {
            this.selected = this.locations.map(l => l.name).indexOf(nomRoute);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@ulaval/modul-components/dist/styles/commons';

    .entete {
        padding: 0 $m-spacing;
    }
</style>
