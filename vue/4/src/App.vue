<script setup>
import Clicker from './components/Clicker.vue'

const showClickerAlert = (number) => {
  alert(`Clicker ${number} clicked!`)
}
</script>

<template>
  <main class="app">
    <h1>100 кликеров</h1>

    <div class="clickers">
      <Clicker
        v-for="number in 100"
        :key="number"
        :amount="number"
        @button-clicked="showClickerAlert(number)"
      >
        Кликер {{ number }}: +{{ number }}
      </Clicker>
    </div>
  </main>
</template>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  padding: 20px;
}

h1 {
  text-align: center;
}

.clickers {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
</style>