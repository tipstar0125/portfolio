<template>
  <div class="todo">
    <h2>ToDoリスト</h2>

    <label><input type="radio" name="status" value="all" checked>すべて</label>
    <label><input type="radio" name="status" value="working">作業中</label>
    <label><input type="radio" name="status" value="completed">完了</label>

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
        <tr v-for="(todo, index) in todos" :key="'todo' + index">
          <td>{{ index }}</td>
          <td>{{ todo.task }}</td>
          <td><button>{{ todo.isDone ? '完了' : '作業中' }}</button></td>
          <td><button @click="deleteTask(index)">削除</button></td>
        </tr>
      </tbody>
    </table>

    <h3>新規タスクの追加</h3>
    <input type="text" v-model="newTask" class="newtask">
    <input type="button" value="追加" @click="addTask">
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Todo } from '@/types/todo.interface';

export default defineComponent({
  
  setup() {
    const newTask = ref<string>();
    const todos = ref<Todo[]>([]);

    const addTask = (): void => {
      if (newTask.value) {
        const todo: Todo = {
          task: newTask.value,
          isDone: false
        }
        todos.value.push(todo);
        newTask.value = '';
      }
    }
    
    const deleteTask = (index: number): void => {
      todos.value.splice(index, 1);
    }

    return {
      newTask,
      todos,
      addTask,
      deleteTask,
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
