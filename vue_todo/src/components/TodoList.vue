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
import { Component, Vue } from 'vue-property-decorator';
import { Todo } from '@/types/todo.interface';

@Component
export default class TodoList extends Vue {
  newTask!: string;
  todos: Todo[] = [];
  showRange = 'all';

  created(): void {
    this.newTask = '';
  }

  addTask(): void {
    if (this.newTask) {
      const todo: Todo = {
        id: this.todos.length,
        task: this.newTask,
        isDone: false
      }
      this.todos.push(todo);
      this.newTask = '';
    }
  }

  deleteTask(index: number): void {
    this.todos.splice(index, 1);
    this.todos.forEach((todo, index) => {
      todo.id = index;
    })
  }

  changeStatus(index: number): void {
      this.todos[index].isDone = !(this.todos[index].isDone);
  }

  get filteredTodos(): Todo[] {
    if (this.showRange === 'all') {
      return this.todos;
    } else if (this.showRange == 'working') {
      return this.todos.filter(todo => !(todo.isDone));
    } else {
      return this.todos.filter(todo => todo.isDone);
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
