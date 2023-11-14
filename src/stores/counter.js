import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

const toast = useToast();

export const useCounterStore = defineStore({
  id: "counter",

  state: () => ({
    text: null,
    amount: null,
    transactionList: [
      {
        id: 1,
        text: "AAA",
        amount: -19.99,
      },
      {
        id: 2,
        text: "BBB",
        amount: 299.97,
      },
      {
        id: 3,
        text: "CCC",
        amount: -10,
      },
      {
        id: 4,
        text: "DDD",
        amount: 150,
      },
    ],
  }),

  actions: {
    addTransaction() {
      if (!this.text || !this.amount) {
        toast.error("Both fields must be filled");
        return;
      }

      this.transactionList.push({
        id: Math.floor(Math.random() * 100000),
        text: this.text,
        amount: this.amount,
      });
      this.text = null;
      this.amount = null;
    },
  },

  getters: {
    totalAmount(state) {
      return state.transactionList.reduce(
        (acc, transaction) => acc + transaction.amount,
        0
      );
    },

    incomeAmount(state) {
      return state.transactionList
        .filter((item) => item.amount > 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0);
    },

    expenseAmount(state) {
      return state.transactionList
        .filter((item) => item.amount < 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0);
    },
  },
});
