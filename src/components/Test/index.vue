<template>
  <div class="wrap-center">
    <input type="text" placeholder="add text" v-model="newTitle">
    <button class="my-btn" type="submit" v-on:click="addComment">ADD</button>

    <ul>
      <li v-for="(item, index) in newArr" :key="index">
        <div v-if="editActive === item.id">
          <input type="text" v-if="editActive === item.id">
          <button class = my-btn2 type="submit" v-on:click="upDate(item.id)">upDate</button>
          <button class = my-btn2 type="submit" v-on:click="closeBtn(item.id)">Close</button>
        </div>
        <div v-else>
          {{item.title}}
          <button class="my-button" type="submit" v-on:click="deleteComment(item.id)">DElete</button>
          <button class = my-btn2 type="submit" v-on:click="edit(item.id)">Edit</button>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
  import './Test.scss';

  export default {
    name: 'Test',
    data() {
      return {
        newArr: [],
        newTitle: '',
        newText: '',
        editActive: null,
      };
    },
    methods: {
      addComment() {
        const postToAdd = {
          userId: 1,
          id: this.newArr.length + 1,
          title: this.newTitle,
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'post',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(postToAdd),
        })
          .then((response) => response.json())
          .then(() => {
            this.newArr.unshift(postToAdd);
            this.newTitle = '';
          })
          .catch((err) => console.log(err));
      },
      edit(id) {
        this.editActive = id;
      },
      closeBtn(id) {
        this.editActive = !id;
      },
      deleteComment(id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: 'delete',
        })
          .then((response) => response.json())
          .then((res) => {
            console.log(res);
            this.newArr = this.newArr.filter((item) => id !== item.id);
          });
      },

    },

    created() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((post) => {
          this.newArr = post;
        })
        .catch((err) => console.log(err));
    },
  };
</script>
