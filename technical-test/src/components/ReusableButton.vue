<template>
  <button class="btn" @click="$emit('on-press')">
    <span v-if="icon" class="icon">{{ icon }}</span>
    <span>{{ text }}</span>
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ""
  }
});
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  background: linear-gradient(135deg, #10b981, #059669);
  color: white;

  padding: 10px 20px;
  border-radius: 8px;

  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;

  box-shadow: 0 4px 10px rgba(16, 185, 129, 0.25);
  transition: 
    transform 0.15s ease,
    box-shadow 0.15s ease,
    background 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 14px rgba(16, 185, 129, 0.35);
  background: linear-gradient(135deg, #0fb178, #047857);
}

.btn:active {
  transform: scale(0.97);
}

.icon {
  font-size: 1.2rem;
}
</style>
