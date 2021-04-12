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

export default defineComponent({
  
  setup() {
    const newTask = ref<string>();
    const todos = ref<Todo[]>([]);
    let showRange = ref<string>();

    onMounted(() => {
      showRange.value = 'all';
    })

    const addTask = (): void => {
      if (newTask.value) {
        const todo: Todo = {
          id: todos.value.length,
          task: newTask.value,
          isDone: false
        }
        todos.value.push(todo);
        newTask.value = '';
      }
    }
    
    const deleteTask = (index: number): void => {
      todos.value.splice(index, 1);
      todos.value.forEach((todo, index) => {
        todo.id = index;
      })
    }

    const changeStatus = (index: number): void => {
      todos.value[index].isDone = !(todos.value[index].isDone);
    }

    const filteredTodos = computed(() => {
      if (showRange.value === 'all') {
        return todos.value;
      } else if (showRange.value === 'working') {
        return todos.value.filter(todo => !(todo.isDone));
      } else {
        return todos.value.filter(todo => todo.isDone);
      }
    });

    return {
      newTask,
      todos,
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
