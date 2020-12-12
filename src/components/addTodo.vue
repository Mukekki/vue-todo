<template>
   <form class="input-group mb-3"
      @submit.prevent="onSubmit">
      <input type="text" class="form-control" placeholder="write a task" aria-label="Recipient's username" aria-describedby="button-addon2"
      v-model="value">
      <div class="input-group-append">
         <button class="btn btn-success" type="submit" id="button-addon2">Submit</button>
      </div>
   </form>
</template>

<script>
export default {
   data() {
      return {
         value: ''
      }
   },
   methods: {
      onSubmit() {
         if (this.value !== '') {
            const newTodo = {
               id: Date.now(),
               title: this.value,
               completed: false,
               openModal: false
            }
            this.$emit('add-todo', newTodo)
            this.value = ''
         }
      }
   }
}
</script>
