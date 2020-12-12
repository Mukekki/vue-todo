<template>
  <div> 
    <h2>ToDo 2v on Vue js</h2>
    <addTodo
    v-on:add-todo="addTodo" />
    <TodoList 
    v-on:removeTodo='removeTodoItem'
    v-on:edit-todo='editTodo'
    v-on:changeItemCompleted='changeCompleted'
    v-bind:todos='todos'
    v-on:textApply='applyText'
    />
    
  </div>
  
</template>



<script>

import TodoList from '../components/TodoList'
import addTodo from '@/components/addTodo'
export default {
   name: 'App',
   data() {
      return {
         todos: [],
      }
   },
   components: {
    TodoList, addTodo
  },
  methods: {
    removeTodoItem (id) {
      setTimeout(() => {
            this.todos = this.todos.filter(t => t.id !== id)
            localStorage.setItem('todo', JSON.stringify(this.todos))
         }, 300);
      
    },
    addTodo (object) {
      this.todos.push(object)
      localStorage.setItem('todo', JSON.stringify(this.todos))
    },
    editTodo(id) {
      
    },
    changeCompleted(object) {
      const index = this.todos.findIndex((item) =>{
         return item.id === object.id
      })
      this.todos[index].completed = !this.todos[index].completed
      this.saveLocalStorage()
    },
    saveLocalStorage() {
      localStorage.setItem('todo', JSON.stringify(this.todos))
    },
    applyText(object) {
      const index = this.todos.findIndex((item) =>{
        return item.id === object.id
      })
      this.todos[index].title = object.title
      this.saveLocalStorage()
    }
    
  },
  mounted() {
    const todoLocal = () => {
      const array = localStorage.getItem('todo');
      let todo = JSON.parse(array)
      if (todo === null) {
        return []
      }
      return todo
    }
    this.todos = todoLocal()
  }
}
</script>