<script setup lang="ts">
import { ref, reactive } from 'vue';

interface User {
  name: string;
  age: number;
}

const editing = ref<boolean>(false);

function submit() {
  editing.value = false;
}

const user = reactive<User>({
  name: 'Alok',
  age: 20,
});
</script>

<template>
  <div>
    <h1 v-if="!editing">Hey' Wassup {{ user.name }}</h1>
    <div v-else="!editing">
      <input type="text" v-model="user.name" />
      <button @click="submit">Submit</button>
    </div>
    <p>You got {{ user.age }} real quick ngl</p>
    <button @click="">Click me to increase your age xD</button>
    <button @click="editing = true">Click me to change name</button>

    <!-- <button @click="count++">Increment</button> -->
  </div>
</template>
