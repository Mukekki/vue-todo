<template>
   <ul>
       <hr>
       <div>ну а если тебя заебало можешь позалипать на </div>
         <button><router-link to="/">HomePage</router-link></button> 
       <hr>
       <todoItem 
       v-for="(todo, i) of todos" :key="todo.id"
       v-bind:todo="todo"
       v-bind:index="i"
       v-on:remove-todo="removeTodo"
       v-on:edit-todo="editTodo"
       v-on:changeCompletedStatus="changeStatus"
       v-on:applyText="applyText"
        />
   </ul>
</template>

<script>

import todoItem from '../components/todoItem.vue'

export default {
    props: ['todos'],
    components: {
    todoItem
  },
    methods: {
      removeTodo(id) {
        this.$emit('removeTodo', id)
      },
      editTodo(id){
        this.$emit('edit-todo', id)
      },
      changeStatus(object){
        this.$emit('changeItemCompleted', object)
      },
      applyText(object) {
        this.$emit('textApply', object)
      }
    }
}
</script>

<style scoped>
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>