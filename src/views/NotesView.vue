<script setup lang="ts">
import { ref } from 'vue';
import Note from '../components/Note.vue';

interface Note {
  note: string;
  date: string;
}

const notes = ref<Note[]>([]);
const addNote = ref<boolean>(false);
const newNote = ref<string>('');

function handleAddNote() {
  addNote.value = false;
  notes.value.push({
    note: newNote.value,
    date: new Date().toDateString(),
  });

  newNote.value = '';
}
</script>

<template>
  <div v-show="addNote" class="overlay">
    <button @click="addNote = false">✖</button>
    <div class="modal">
      <textarea name="note" v-model="newNote" id="note" cols="50" rows="8" />
      <button @click="handleAddNote">Add Note</button>
    </div>
  </div>
  <div class="day2-parent">
    <main>
      <h1>Notes</h1>
      <button @click="addNote = true">+</button>
    </main>
    <div class="notes">
      <Note v-for="note in notes" :note="note.note" :date="note.date" />
    </div>
  </div>
</template>

<style>
.modal {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  border: 0.5px solid #6366f1;
}

.overlay > button {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  right: 10px;
  border: none;
  background-color: #6366f1;
  border-radius: 999px;
  font-size: 1.2rem;
  width: 35px;
  height: 35px;
  color: white;
}

.modal > button {
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #6366f1;
  color: #ffffff;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  border: none;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

textarea {
  resize: none;
  position: relative;
  font-size: 1.2rem;
  background-color: rgba(0, 0, 0, 0.05);
  color: white;
  padding: 0.625rem;
  background-color: #374151;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 100%;
  border-radius: 0.5rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

textarea:focus {
  outline: none;
}

.overlay {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
}

.day2-parent {
  height: 100vh;
  padding: 30px 0;
}

.day2-parent > main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
}

main > button {
  padding: 0.5rem;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #6366f1;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.notes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>
