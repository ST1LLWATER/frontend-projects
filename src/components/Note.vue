<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  id: string;
  note: string;
  date: string;
}>();

// const emit = defineEmits<{
//   handleEditNote: (id: string, payload: string) => void;
// }>();

const isEditing = ref<boolean>(false);

watch(isEditing, (newData, oldData) => {
  console.log(newData, oldData);
});
</script>

<template>
  <div @click="isEditing = true" class="parent">
    <div v-if="isEditing === false">
      <p class="note">{{ props.note }}</p>
      <p class="date">{{ props.date }}</p>
    </div>
    <div v-if="isEditing">
      <input @change="$emit('handleEditNote', $event)" type="text" />
      <button @click="isEditing = false">Submit</button>
    </div>
  </div>
</template>

<style scoped>
.parent {
  border: 1px solid gray;
  position: relative;
  border-radius: 0.25rem;
  padding: 5px;
  box-shadow: 0 0 0 0.5px #2563eb;
  width: 100%;
  height: 120px;
}

.note {
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: #1e5fc8;
}
.date {
  font-size: 0.75rem;
  color: gray;
  position: absolute;
  bottom: 3px;
  right: 5px;
}
</style>
