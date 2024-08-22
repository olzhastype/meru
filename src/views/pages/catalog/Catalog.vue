<script setup lang="ts">
import { useProductStore } from '@/store/product';
import { onMounted } from 'vue'

const store = useProductStore();


onMounted(() => {
    store.initFetch()
})

const addToCart = (item) => {
    store.addToCard(item)
}

</script>
<template>
    <div class="card">
        <h1>Косметика</h1>
    </div>
    <template v-if="!store.isLoaded">
        <div class="card loaded-card"><img style="width: 12rem;" src="../../../assets/animations2.gif" alt="">
            <span>Загрузка...</span>
        </div>
    </template>
    <template v-else>
        <Card v-for="el in store.items" class="product-card">
            <template #header>
                <img alt="user header" :src="el.thumbnail" />
            </template>
            <template #title>{{ el.title }}</template>
            <template #subtitle>{{ el.brand }}</template>
            <template #content>
                <div>

                    <p>{{ el.description }}</p>

                    <br />
                    <p class="m-0">Бренд: {{ el.brand }}</p>
                    <p class="m-0">Цена: {{ el.price }}</p>
                    <p class="m-0">Категория: {{ el.category }}</p>
                    <Rating v-model="el.rating" readonly />

                </div>
            </template>
            <template #footer>
                <div class="flex gap-4 mt-1">
                    <Button @click="addToCart(el)" label="Добавить в корзину" class="w-full" />
                </div>
            </template>
        </Card>


        <!-- <div class="card " v-for="el in store.items">
            <p> {{ el.title }}</p>
            <img :src="el.thumbnail" alt="">

            <p>Бренд: {{ el.brand }}</p>
            <p>Цена: {{ el.price }}</p>
            <p>Категория: {{ el.category }}</p>

            <Button label="Info" severity="info" />
        </div> -->

    </template>
</template>


<style lang="scss" scoped>
.product-card {
    width: 25rem;
    overflow: hidden;
    margin: 5px;
}

.loaded-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>