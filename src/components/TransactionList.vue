<template>
  <div class="transactionList">
    <h4>History</h4>
    <ul>
      <li
        :class="item.amount < 0 ? 'negative' : 'positive'"
        v-for="item in myStore.transactionList"
        :key="item.id"
      >
        <div class="text">{{ item.text }}</div>
        <div class="amount">${{ item.amount }}</div>
        <div class="removeTransaction">x</div>
      </li>
    </ul>
  </div>
</template>


<script setup>
import { useCounterStore } from "@/stores/counter";
const myStore = useCounterStore();
</script>



<style lang="scss" scoped>
.transactionList {
  margin-bottom: 50px;
  h4 {
    border-bottom: 1px solid grey;
    padding: 10px 0;
    margin-block: 20px;
  }
  ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
    li {
      list-style: none;
      padding: 10px;
      padding-right: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 1px 2px 4px 1px rgba(147, 147, 147, 0.79);
      position: relative;
      &:hover {
        .removeTransaction {
          visibility: visible;
        }
      }
    }
    .negative {
      &:after {
        content: "";
        width: 4px;
        height: 100%;
        background: red;
        position: absolute;
        right: 0;
      }
    }
    .positive {
      &:after {
        content: "";
        width: 4px;
        height: 100%;
        background: green;
        position: absolute;
        right: 0;
      }
    }
    .removeTransaction {
      width: 20px;
      height: 20px;
      background: red;
      text-align: center;
      border-radius: 4px;
      position: absolute;
      color: white;
      left: -20px;
      cursor: pointer;
      visibility: hidden;
    }
  }
}
</style>