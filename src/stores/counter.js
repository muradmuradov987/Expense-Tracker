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
        text: "Flower",
        amount: -19.99,
      },
      {
        id: 2,
        text: "Salary",
        amount: 299.97,
      },
      {
        id: 3,
        text: "Book",
        amount: -10,
      },
      {
        id: 4,
        text: "Camera",
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
      toast.success("Transaction added");
      this.text = null;
      this.amount = null;
    },
    deleteTransaction(id) {
      this.transactionList = this.transactionList.filter((item) => {
        return item.id !== id
      });
      toast.success('Transaction deleted')
    },
  },

  getters: {
    totalAmount(state) {
      return state.transactionList
        .reduce((acc, transaction) => acc + transaction.amount, 0)
        .toFixed(2);
    },

    incomeAmount(state) {
      return state.transactionList
        .filter((item) => item.amount > 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0)
        .toFixed(2);
    },

    expenseAmount(state) {
      return state.transactionList
        .filter((item) => item.amount < 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0)
        .toFixed(2);
    },
  },
});
