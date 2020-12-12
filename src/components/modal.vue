<template>
   <div
    v-bind:class="[todo.openModal ? 'vmodal open' : 'vmodal close']"
   >
      <div class="vmodal_background">
         <div class="vmodal_content">
               <div class="vmodal_head">
                  <div class="vmodal_title">задача {{todo.title}}</div>
                  <div class="vmodal_exit" data-close="true"
                  v-on:click="closeModal()">&times;</div>
                  </div>
            <hr>
            <label>
                  <input type="checkbox" 
                  v-bind:checked="todo.completed"
                  v-on:change="changeItemStatus">
                  <span>Выполнено</span>
            </label>
            <hr>
            <form class="input-group mb-3"> 
               <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2"
               v-model="value"
               v-bind:placeholder="todo.title" >
            </form>
            <hr>
               <div class="buttons">
                  <button class="btn btn-success"
                  v-on:click='ApplyText'>Apply text</button>
                  <button class="btn btn-danger" 
                  v-on:click="closeModal, $emit('removetodoitem', todo.id)">Remove</button>
                  <button class="btn btn-primary" 
                  v-on:click="closeModal">Cancel</button>
               </div>
         </div>
      </div>
   </div> 
</template>

<script> 
export default {
   props: {
      todo: {
         type: Object,
         required: true
      }
   },
   data() {
      return {
         value: ''
      }
   },
   methods: {
      removetodoitem() {
         this.$nextTick( function () {
            closeModal()
         }).then(this.$emit('removetodoitem', todo.id))
         
      },
      closeModal() {
         this.todo.openModal = false
      },
      changeItemStatus() {
         this.$emit('change-todo-statatus', this.todo)
         
      },
      ApplyText () {
         if (this.value !== '') {
            this.closeModal()
            this.todo.title = this.value
            this.$emit('applyText', this.todo)

         }
         else {
            console.error('hui')
         }
         this.value = ''
      }
   }
}
</script>

<style>
/* modal theme */
.vmodal {
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   opacity: 0;
   z-index: -1;

}

/* modal open */
.vmodal.open {
   opacity: 1;
   z-index: 1000;
   transition: all .3s;
}

.vmodal.open .vmodal_background {
   background-color: rgba(0, 0, 0, 0.5);
   opacity: 1;
   z-index: 1000;

}


.vmodal.open .vmodal_content {
   transform: translateY(200px);
   background: #fff;
   z-index: 1000;
   box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, 0.5);
}
/* ========== */

/* modal close  */
.vmodal.close .vmodal_content {
   transform: translateY(0px);

}
.vmodal.open.close {
   opacity: 0;
   z-index: -1;
   background-color: rgba(0, 0, 0, 0.5);
   transition: all .3s;
}
/* ========  */

/* defaul value */

.vmodal_content {
   max-height: 900px;
   min-height: 200px;
   min-width: 600px;
   max-width: 500px;
   padding: 5px;
   background-color: #fff;
   margin: 0 auto;
   width: max-content;
   transform: translateY(-200px);
   transition: transform .5s;
   border-radius: 5px;
   font-size: 22px;
}

.vmodal_head {
   padding: 0px;
   display: flex;
   justify-content: space-between;
}
.vmodal_background {
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: rgba(0, 0, 0, 0.5);
   opacity: 0;
   z-index: -1;
   transition: opacity .5s;
}

.vmodal_exit {
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
   font-size: 50px;
   transition: transform .5s;
   transform: translateX(-10px);
}

.vmodal_exit:hover{
   transform: translateX(-10px);
   transform: translate(-10px, -2px);
   color: black;
   text-shadow: 1px 1px 10px rgba(0, 0, 0, 1);

}
.vmodal_title {
   padding: 10px;
}
.vmodal_text {
   padding: 10px;
}
.buttons button {
   margin: 5px;
}


</style>