<template>
    <div class="entete">
        <div class="entete__menu">
            <m-accordion-transition>
                <m-navbar>
                    <m-navbar-item :value="1" label="home"
                        >Publication</m-navbar-item
                    >
                    <m-navbar-item :value="2" label="profile"> </m-navbar-item>
                    <m-navbar-item :value="3" label="About"> </m-navbar-item>
                </m-navbar>
            </m-accordion-transition>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    export default class EnteteVue extends Vue {}
</script>

<style lang="scss" scoped>
    .entete {
        &__menu {
            background-color: greenyellow;
        }
    }
</style>
