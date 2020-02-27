<template>
    <div class="gabarit-login">
        <m-panel
            class="gabarit-login__page"
            :highlighted="true"
            :padding-large="true"
            :border="isMqMinS"
        >
            <template slot="header">
                <VueLogoApp></VueLogoApp>
            </template>
            <slot></slot>
            <slot name="footer" slot="footer"></slot>
        </m-panel>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import VueLogoApp from '../components/VueLogoApp.vue';
    import { MediaQueries } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';

    @Component({
        components: { VueLogoApp },
        mixins: [MediaQueries]
    })
    export default class GabaritLogin extends Vue {}
</script>

<style lang="scss" scoped>
    @import '~@ulaval/modul-components/dist/styles/commons';

    .gabarit-login {
        height: 100%;

        @media (min-width: $m-mq--min--s) {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: $m-spacing--l $m-spacing;
            background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pavillon_Louis-Jacques-Casault_-_Universit%C3%A9_-Laval_-_Quebec_City_-_October_2007.jpg/1280px-Pavillon_Louis-Jacques-Casault_-_Universit%C3%A9_-Laval_-_Quebec_City_-_October_2007.jpg');
            background-attachment: fixed;
            background-size: cover;
            background-repeat: no-repeat;
        }

        &::before {
            @media (min-width: $m-mq--min--s) {
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background: $m-color--black;
                opacity: 0.5;
                content: '';
            }
        }

        &__page {
            width: 100%;

            @media (min-width: $m-mq--min--s) {
                max-width: 420px;
                margin-top: auto;
                margin-bottom: auto;
            }
        }
    }
</style>
