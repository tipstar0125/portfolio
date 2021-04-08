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
          <td><button>削除</button></td>
        </tr>
      </tbody>
    </table>

    <h3>新規タスクの追加</h3>
    <input type="text" v-model="newTask" class="newtask">
    <input type="button" value="追加" @click="addTask">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Todo } from '@/types/todo.interface';

@Component
export default class TodoList extends Vue {
  newTask!: string;
  todos: Todo[] = [];

  addTask(): void {
    if (this.newTask) {
      const todo: Todo = {
        task: this.newTask,
        isDone: false
      }
      this.todos.push(todo);
      this.newTask = '';
    }
  }

}
</script>


<style scoped>
table {
  border-spacing: 8px 2px;
}

input.newtask {
  width: 300px;
}
</style>
