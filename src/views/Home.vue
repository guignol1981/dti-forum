<template>
    <div class="home">
        <m-searchfield class="home__search"></m-searchfield>
        <div class="home__liste">
            <publications-vue></publications-vue>
        </div>
    </div>
</template>

<script lang="ts">
import PublicationsVue from '../components/publication/Publications.vue';

export default {
    name: 'Home',
    components: {
        PublicationsVue
    }
};
</script>

<style scoped lang="scss">
.home {
    &__search {
        width: 10rem;
    }

    &__liste {
        display: flex;
        justify-content: center;
    }
}
</style>
