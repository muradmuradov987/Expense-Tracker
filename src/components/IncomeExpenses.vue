<template>
  <div class="incomeExpense" >
    <div class="info__card" >
      <h5>INCOME</h5>
      <span class="in" >+${{ myStore.incomeAmount }}</span>
    </div>
    <div class="line"></div>
    <div class="info__card">
      <h5>EXPENSE</h5>
      <span class="out">${{myStore.expenseAmount }}</span>
    </div>
  </div>
</template>



<script setup>
import { useCounterStore } from "@/stores/counter";
const myStore = useCounterStore();
</script>


<style lang="scss" scoped>
.incomeExpense {
  background: white;
  box-shadow: 1px 4px 10px 1px rgba(147, 147, 147, 0.79);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  border-radius: 4px;
  .line {
    margin: 0 50px;
    width: 2px;
    height: 50px;
    background: black;
  }
  .info__card {
    text-align: center;
    h5 {
      margin-bottom: 10px;
    }
    span {
      font-weight: 700;
      font-size: 20px;
    }
    .in {
      color: green;
    }
    .out {
      color: red;
    }
  }
}
</style>>
