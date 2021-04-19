<template>
  <div class="todo">
    <h2>ToDoリスト</h2>

    <label><input type="radio" name="show-range" value="all" v-model="showRange">すべて</label>
    <label><input type="radio" name="show-range" value="working" v-model="showRange">作業中</label>
    <label><input type="radio" name="show-range" value="completed" v-model="showRange">完了</label>

    <table>
      <thead>
        <tr>
            <th>ID</th>
            <th>コメント</th>
            <th>状態</th>
            <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(todo, index) in filteredTodos" :key="'todo' + index">
          <td>{{ todo.id }}</td>
          <td>{{ todo.task }}</td>
          <td><button @click="changeStatus(todo.id)">{{ todo.isDone ? '完了' : '作業中' }}</button></td>
          <td><button @click="deleteTask(todo.id)">削除</button></td>
        </tr>
      </tbody>
    </table>

    <h3>新規タスクの追加</h3>
    <input type="text" v-model="newTask" class="newtask">
    <input type="button" value="追加" @click="addTask">
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { Todo } from '@/types/todo.interface';
import { useStore } from "@/store/index";
import * as ActionTypes from "@/store/actionTypes"

export default defineComponent({
  
  setup() {
    const newTask = ref<string>();
    let showRange = ref<string>();
    const store = useStore()

    onMounted(() => {
      showRange.value = 'all';
    })

    const addTask = async () => {
      if (newTask.value) {
        await store.dispatch(ActionTypes.ADD_TODO_ITEM, newTask.value);
        newTask.value = '';
      }
    }
    
    const deleteTask = async (index: number) => {
      await store.dispatch(ActionTypes.DELETE_TODO_ITEM, index);
    }

    const changeStatus = async (index: number) => {
      await store.dispatch(ActionTypes.CHANGE_STATUS, index);
    }

    const filteredTodos = computed(() => {
      const todos = store.getters.getTodos;
      if (showRange.value === 'all') {
        return todos;
      } else if (showRange.value === 'working') {
        return todos.filter((todo: Todo) => !(todo.isDone));
      } else {
        return todos.filter((todo: Todo) => todo.isDone);
      }
    });

    return {
      newTask,
      showRange,
      addTask,
      deleteTask,
      changeStatus,
      filteredTodos
    }
  }
});
</script>

<style scoped>
table {
  border-spacing: 8px 2px;
}

input.newtask {
  width: 300px;
}
</style>
