<template>
    <div class="home">
        <div class="home__header">
            <slot name="header"></slot>
        </div>
        <div class="home__corps">
            <slot name="corps"></slot>
        </div>
        <div class="home__footer m-u--margin-top--m">
            <slot name="footer"></slot>
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
        &__corps {
            width: 50%;
        }

        &__footer {
            align-self: flex-start;
        }
    }
</style>
