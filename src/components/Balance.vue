<template>
  <div class="balance">
    <h4>YOUR BALANCE</h4>
    <h1>${{ myStore.totalAmount }}</h1>
  </div>
</template>



<script setup>
import { useCounterStore } from "@/stores/counter";
const myStore = useCounterStore();
</script>

<style scoped>
.balance {
  margin-bottom: 20px;
}
</style>


