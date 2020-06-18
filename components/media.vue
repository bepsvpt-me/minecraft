<template>
  <a :href="href" target="_blank">
    <picture>
      <source :srcset="webp" type="image/webp" />

      <img
        ref="img"
        :alt="alt"
        :class="contentClass"
        :src="origin"
        decoding="async"
        importance="low"
        loading="lazy"
        referrerpolicy="no-referrer"
        @load="onLoad"
      />
    </picture>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    alt: {
      required: true,
      type: String,
    },

    contentClass: {
      default: undefined,
      type: String,
    },

    open: {
      default: true,
      type: Boolean,
    },

    src: {
      required: true,
      type: String,
    },
  },

  data: () => ({
    isWebp: true,
  }),

  computed: {
    href(): string | undefined {
      if (!this.open) {
        return undefined
      }

      return this.isWebp ? this.webp : this.origin
    },

    origin(): string {
      return require(`~/assets/imgs/${this.src}`)
    },

    webp(): string {
      const pos = this.src.lastIndexOf('.')

      const base = this.src.substring(0, pos)

      return require(`~/assets/imgs/${base}.webp`)
    },
  },

  methods: {
    onLoad() {
      const img = this.$refs.img as HTMLImageElement

      const src = img.currentSrc || img.src

      if (!src.endsWith('.webp')) {
        this.isWebp = false
      }
    },
  },
})
</script>
