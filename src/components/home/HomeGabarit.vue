<template>
    <div class="home">
        <slot name="title"></slot>
        <div class="home__publication">
            <PublicationVue
                v-for="(publication, index) in publications"
                :key="index"
                :publication="publication"
            ></PublicationVue>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Publications } from '../../modules/Publications/PublicationDomaine';
import PublicationVue from '../publication/Publication.vue';

@Component({
    components: {
        PublicationVue
    }
})
export default class HomeGabarit extends Vue {
    @Prop({ required: true })
    public publications!: Publications;
}
</script>

<style lang="scss" scoped>
@import '~@ulaval/modul-components/dist/styles/commons';

.home {
    &__publication {
        margin-top: $m-spacing--m;
    }
}
</style>
