<template>
    <div class="home">
        <PublicationFormulaireVue></PublicationFormulaireVue>
        <div class="home__titre">
            <slot name="titre"></slot>
        </div>
        <div class="home__corps">
            <slot name="corps"></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { Prop, Emit } from 'vue-property-decorator';
    import { Publications } from '../../modules/Publications/PublicationDomaine';
    import PublicationFormulaireVue from '../publication/PublicationFormulaire.vue';

    @Component({
        components: {
            PublicationFormulaireVue
        }
    })
    export default class HomeGabarit extends Vue {}
</script>

<style lang="scss" scoped>
    @import '~@ulaval/modul-components/dist/styles/commons';

    .home {
        display: flex;
        flex-direction: column;
        align-items: center;

        &__titre {
            font-size: $m-font-size--h2;
        }

        &__corps {
            width: 50%;
        }
    }
</style>
