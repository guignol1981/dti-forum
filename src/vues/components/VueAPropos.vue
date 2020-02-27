<template>
    <div class="a-propos">
        <p class="m-u--no-margin">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            corrupti vero saepe ad, possimus accusantium minus dicta fugit,
            rerum, quae id sequi! Quibusdam, ducimus nobis. Vel consequuntur
            officia quos consequatur!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            corrupti vero saepe ad, possimus accusantium minus dicta fugit,
            rerum, quae id sequi! Quibusdam, ducimus nobis. Vel consequuntur
            officia quos consequatur!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            corrupti vero saepe ad, possimus accusantium minus dicta fugit,
            rerum, quae id sequi! Quibusdam, ducimus nobis. Vel consequuntur
            officia quos consequatur!
        </p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop, Emit } from 'vue-property-decorator';

    @Component
    export default class VueAPropos extends Vue {
        protected mounted(): void {
            this.$scrollTo.goToTop();
        }
    }
</script>

<style scoped lang="scss"></style>
