<template>
  <div class="">
    <div
      @click="$emit('closeModal')"
      class="glass h-screen w-full fixed top-0 right-0 z-50 hover:cursor-pointer"
    ></div>
    <div class="absolute z-[70] md:w-[30%] w-[90%] main-content">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.glass {
  background: rgba(0, 0, 0, 0.5);
}

.main-content {
  top: 20%;

  right: 0;
}
</style>
