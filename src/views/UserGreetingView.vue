<script setup lang="ts">
import { ref, reactive, computed } from 'vue';

interface User {
  name: string;
  age: number;
}

const editing = ref<boolean>(false);

function submit() {
  editing.value = false;
}

const user = reactive<User>({
  name: 'Homie',
  age: 20,
});

const futureAge = computed<number>(() => {
  return user.age + 5;
});
</script>

<template>
  <div class="parent">
    <h1 v-if="!editing">Hey' Wassup {{ user.name }}</h1>
    <div v-else class="edit">
      <input id="name" type="text" v-model="user.name" />
      <button @click="submit">Submit</button>
    </div>
    <div>
      <h3>You got {{ user.age }} real quick ngl</h3>
      <h3>Soon u'll be {{ futureAge }} and you wont realise it...</h3>
    </div>

    <div class="actions">
      <button @click="user.age++">Click me to increase your age hehe</button>
      <button @click="editing = true">Click me to change name</button>
    </div>

    <!-- <button @click="count++">Increment</button> -->
  </div>
</template>

<style scoped>
.parent > h3 {
  margin: 5px 0;
}

.edit {
  display: flex;
  align-items: center;
  border: 1px solid gray;
  border-radius: 0.25rem;
  border-color: #2563eb;
  padding: 3px;
  box-shadow: 0 0 0 1px #2563eb;
}

.edit > button {
  margin-right: 5px;
  padding: 0.2rem 1.25rem;
  background-color: #6366f1;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

#name {
  padding: 0.5rem;
  margin-right: 1rem;
  flex-grow: 2;
  background: none;
  color: white;
  width: 100%;
  border: none;
}

#name:focus {
  outline: none;
}
.actions {
  display: flex;
  justify-content: flex-start;
  gap: 5px;
}

.actions > button {
  padding: 0.5rem 1.25rem;
  background-color: #6366f1;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
