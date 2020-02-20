<template>
    <div class="publication">
        <m-panel :highlighted="true" skin="dark" :padding="false">
            <div slot="header" class="publication__header">
                {{ publication.title | truncate(30) }}
            </div>
            <div class="publication__body">{{ publication.body }}</div>
            <div slot="footer" class="publication__footer">
                <div>
                    <m-icon-button
                        iconName="m-svg__arrow--up"
                        buttonSize="32px"
                        iconSize="20px"
                        skin="secondary"
                    ></m-icon-button
                    >(21)
                    <m-icon-button
                        iconName="m-svg__arrow--down"
                        buttonSize="32px"
                        iconSize="20px"
                        skin="secondary"
                    ></m-icon-button
                    >(12)
                </div>
                <div>
                    <m-link>détails</m-link>
                </div>
            </div>
        </m-panel>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Publication } from '../../modules/Publications/PublicationDomaine';

@Component
export default class PublicationVue extends Vue {
    @Prop({ required: true })
    public publication!: Publication;
}
</script>

<style scoped lang="scss">
@import '~@ulaval/modul-components/dist/styles/commons';

.publication {
    margin-top: $m-spacing--m;

    &__header {
        display: flex;
        justify-content: flex-start;
        font-weight: bold;
        font-size: $m-font-size--h3;
        background-color: transparentize($m-color--accent-light, 0.4);
        padding: 1rem;
    }

    &__body {
        text-align: start;
        padding: $m-spacing--m;
        min-height: 5rem;
    }

    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: $m-color--white;
        padding: $m-spacing--s !important;

        & > div > * {
            margin-left: $m-spacing--s;
        }
    }
}
</style>
