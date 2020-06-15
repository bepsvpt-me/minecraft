<template>
  <a
    :download="download"
    :href="href"
    class="link"
    referrerpolicy="no-referrer"
    rel="noopener noreferrer"
    target="_blank"
  >
    {{ text }}
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    download: {
      default: false,
      type: Boolean,
    },

    href: {
      required: true,
      type: String,
    },

    text: {
      required: true,
      type: String,
    },
  },
})
</script>

<style scoped>
.link {
  @apply text-blue-600;
}
</style>
