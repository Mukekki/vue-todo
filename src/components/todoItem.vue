<template>
   <li>
    <div class="alert alert-secondary"
    v-bind:class="{done: todo.completed }">
         <label>
            <input type="checkbox" 
               v-bind:checked="todo.completed"
               v-on:change="completedStatus">
               <span v-bind:class="{done: todo.complited }">
                  {{index +1}}) {{todo.title}} </span>
         </label>
         <div>
            <button type="button" class="btn btn-primary"
            v-on:click="openModalWindow">Edit</button>
            <button class="btn btn-danger" v-on:click="$emit('remove-todo', todo.id)">Remove</button>
         </div>
      </div>
      
      <modal
      v-on:change-todo-statatus="completedStatus"
      v-on:removetodoitem="removetodo"
      v-bind:todo="todo" 
      v-on:applyText="textApply"/>
   </li>
   
</template>

<script>
import modal from '../components/modal'
export default {
   props: {
      todo: {
         type: Object,
         required: true
      },
      index: Number
      
   },
   components: {
      modal
   },
   methods: {
      removetodo(id) {
         this.$emit('remove-todo', id)
      },
      openModalWindow() {
         this.todo.openModal = true
         this.todo.closeModal = false
      },
      completedStatus() {
         this.$emit('changeCompletedStatus', this.todo)
      },
      textApply(object) {
         this.$emit('applyText', object)
      }
   }
}
</script>
<style scoped>
.alert.alert-secondary {
  display: flex;
  justify-content: space-between;
}
label {
   width: 70%;
   display: block;
   text-align: left;
}

.done {
   background-color:  rgb(158, 238, 150)
}
button {
   margin: 5px;
   margin-right: 0px;

}
</style>