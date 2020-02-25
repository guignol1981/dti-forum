<template>
    <div>
        <header class="gabarit-principal__header">
            <div class="gabarit-principal__header-wraper">
                <h1>{{ titre }}</h1>
                <img
                    class="gabarit-principal-logo"
                    src="https://apifriends.com/wp-content/uploads/2018/04/stack-overflow-orange.png"
                />
            </div>
            <slot name="header"></slot>
        </header>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import EnteteVue from '../entete/Entete.vue';
    import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

    @Component({
        components: {
            EnteteVue
        }
    })
    export default class GabaritPrincipal extends Vue {
        @Prop({ default: 'DTI-Overflow' })
        public titre!: string;
    }
</script>

<style lang="scss" scoped>
    @import '~@ulaval/modul-components/dist/styles/commons';

    .gabarit-principal {
        &-logo {
            width: 35px;
            height: 35px;
            margin-left: $m-spacing;
        }

        &__header {
            background: $m-color--grey-lighter;
        }

        &__header-wraper {
            display: flex;
            margin: 0 auto;
            padding: $m-spacing--l $m-spacing;
            width: 100%;
            max-width: $m-max-width;
        }

        &__body {
            margin: 0 auto;
            padding: $m-spacing--xxl $m-spacing;
            width: 100%;
            max-width: $m-max-width;
        }

        &__footer {
        }
    }
</style>
