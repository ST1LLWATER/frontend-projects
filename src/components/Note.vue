<script setup lang="ts">
const props = defineProps<{
  note: string;
  date: string;
}>();
</script>

<template>
  <div class="parent">
    <p class="note">{{ props.note }}</p>
    <p class="date">{{ props.date }}</p>
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
