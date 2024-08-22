<template>
    <div v-for="el in store.basket" class="flex flex-col sm:flex-row sm:items-center p-6 gap-4">
        <div><img :src="el.thumbnail" style="width: 5rem;" alt="">

            {{ el.title }}
            {{ el.brand }}
            <p class="m-0">Цена: {{ el.price }}</p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useProductStore } from '@/store/product';

const store = useProductStore();
</script>

<style scoped lang="scss"></style>