const app = Vue.createApp({
    data() {
      return {
        todoList: [
          { id: 1, text: "Yapılacak İş 1", completed: false },
          { id: 2, text: "Yapılacak İş 2", completed: false },
          { id: 3, text: "Yapılacak İş 3", completed: false },
          { id: 4, text: "Yapılacak İş 4", completed: false },
          { id: 5, text: "Yapılacak İş 5", completed: false },
          { id: 6, text: "Yapılacak İş 6", completed: false },
          { id: 7, text: "Yapılacak İş 7", completed: false },
        ],
      };
    },
    methods: {
      addTodo(event) {
        this.todoList.push({
          id: new Date().getTime(),
          text: event.target.value,
          completed: false,
        });
        event.target.value = "";
      },
      removeItem(todoItem) {
        this.todoList = this.todoList.filter((todo) => todo !== todoItem);
      },
    },
    computed: {
      completedItemCount() {
        return this.todoList.filter((t) => t.completed).length;
      },
      unCompletedItemCount() {
        return this.todoList.filter((t) => !t.completed).length;
      },
    },
  }).mount("#app");