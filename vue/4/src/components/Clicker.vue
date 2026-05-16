<script setup>
import { ref } from 'vue'

const props = defineProps({
  amount: {
    type: Number,
    default: 1
  }
})

const emit = defineEmits(['button-clicked'])

const count = ref(0)

const handleClick = () => {
  count.value += props.amount
  emit('button-clicked')
}
</script>

<template>
  <div class="clicker">
    <p>Количество очков: {{ count }}</p>

    <button class="clicker-button" @click="handleClick">
      <slot>Увеличить счетчик</slot>
    </button>
  </div>
</template>

<style scoped>
.clicker {
  padding: 16px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  text-align: center;
}

.clicker-button {
  padding: 8px 12px;
  cursor: pointer;
}
</style>