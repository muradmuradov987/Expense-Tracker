<template>
  <div class="addTransaction">
    <h4>Add new transaction</h4>

    <div class="form__control">
      <label for="">Text</label>
      <input type="text" placeholder="Enter text..." v-model="myStore.text" />
    </div>
    <div class="form__control">
      <label for="">Amount (negative -expense, positive-income)</label>
      <input
        type="text"
        placeholder="Enter amount..."
        v-model="myStore.amount"
      />
    </div>
    <button class="addTransaction" @click="myStore.addTransaction()">Add transaction</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
const myStore = useCounterStore();

</script>



<style lang="scss" scoped>
.addTransaction {
  margin-bottom: 30px;
  h4 {
    border-bottom: 1px solid grey;
    padding: 10px 0;
    margin-block: 20px;
  }
  .form__control {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    input {
      border: none;
      padding: 10px;
      outline: none;
      font-size: 16px;
      border-radius: 4px;
    }
  }
  .addTransaction {
    margin-top: 30px;
    width: 100%;
    padding: 10px;
    text-align: center;
    border: none;
    background: rgb(164, 99, 229);
    color: white;
    cursor: pointer;
    border-radius: 4px;
    font-size: 18px;
  }
}
</style>