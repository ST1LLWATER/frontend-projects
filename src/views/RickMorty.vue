<script setup lang="ts">
import { ref, watch } from 'vue';
const data = ref<ApiResponse | null>(null);
const api = ref<string>('https://rickandmortyapi.com/api/character');

interface Results {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: [Results];
}

fetch(api.value)
  .then((response) => response.json())
  .then((json) => (data.value = json));

function nextPage() {
  if (data.value?.info.next) {
    fetch(data.value.info.next)
      .then((response) => response.json())
      .then((json) => (data.value = json));
  }
}

watch(api, () => {
  fetch(api.value)
    .then((response) => response.json())
    .then((json) => (data.value = json));
});
</script>

<template>
  <div v-if="data" class="day3-parent">
    <div class="heading">
      <h1>Rick and Morty</h1>
      <button @click="api = data?.info.prev!" v-if="data && data.info.prev">
        Prev
      </button>
      <button @click="api = data?.info.next!" v-if="data && data.info.next">
        Next
      </button>
    </div>
    <div class="day3-data-parent">
      <div class="data" v-for="character in data.results" :key="character.id">
        <img :src="character.image" />
        <div class="content">
          <div>
            <h2>{{ character.name }}</h2>
            <h4>
              {{ character.gender }} -
              <span v-if="character.status === 'Alive'">🟢</span>
              <span v-else-if="character.status === 'Dead'">🔴</span>
              <span v-else>🟡</span>
              <span>{{ character.status }}</span>
            </h4>
          </div>
          <div>
            <h3>
              Species:
              <span>{{ character.species }}</span>
            </h3>
          </div>
          <div>
            <h3>
              Last Known Location:
              <span>{{ character.location.name }}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.heading {
  display: flex;
  /* justify-content: center; */
  gap: 10px;
  align-items: center;
}

.heading > h1 {
  font-weight: bold;
}

.heading > button {
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
.day3-parent {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

.day3-data-parent::-webkit-scrollbar {
  width: 5px;
  /* display: none; */
}

.day3-data-parent::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}

.day3-data-parent::-webkit-scrollbar-thumb {
  background-color: #302c2c;
  border-radius: 100px;
}

.day3-data-parent {
  display: flex;
  overflow: auto;
  flex-direction: column;
  align-items: flex-start;
}

.dead {
  color: red;
}

.alive {
  color: green;
}
.data {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 10px 0;
  width: 100%;
  padding-bottom: 15px;
  border-bottom: 1px solid gray;
}

.data:nth-last-child(1) {
  border-bottom: none;
}

.data > .content {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
}

.data > .content > div {
  line-height: 24px;
}

.data > .content > div > h3 {
  font-weight: bold;
  margin-bottom: 5px;
}

.data > .content > div > h2 {
  font-size: 24px;
  font-weight: bold;
}
.data > img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
