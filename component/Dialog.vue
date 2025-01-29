<script setup lang="ts">
const modal = ref<HTMLDialogElement>();

const showModal = () => {
  if (!modal.value) return;
  modal.value.showModal();
};

const closeModal = () => {
  if (!modal.value) return;
  modal.value.close();
};

defineExpose({ showModal });
</script>

<template>
  <dialog ref="modal">
    <button class="close-button" @click="closeModal">x</button>
    <div class="modal-content">
      <p>Added to Cart</p>
    </div>
  </dialog>
</template>

<style scoped>
dialog {
  width: 300px;
  padding: 20px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  background-color: white;
  text-align: center;
  position: relative;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Backdrop Styling */
dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
}

/* Close Button (X) */
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #555;
  transition: color 0.2s ease;
}

.close-button:hover {
  color: #d62872;
}
</style>
