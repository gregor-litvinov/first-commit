<template>
  <div>
    <input type="text" v-model="newTodo" placeholder="add Todo">
    <button class="myBtn" v-on:click="addTodo">add</button>
    <ol>
      <li v-for="(todo, index) in todos" :key="index">
        {{todo}}
        <button v-on:click="remove(index)">&times;</button>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'Test2',
    data() {
      return {
        newTodo: '',
        todos: ['Buy milk', 'Do exercises', 'Write a book', 'Plant a tree'],
      };
    },
    methods: {
      addTodo() {
        this.todos.push(this.newTodo); // this.newTodo = 'sdfsdf'
        this.newTodo = '';
      },
      remove(index) {
        this.todos = this.todos.filter((item, i) => i !== index);
      },
    },

  };
</script>
