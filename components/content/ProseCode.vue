<script lang="ts">
import { useClipboard } from '@vueuse/core'
import { defineComponent } from '#imports'

export default defineComponent({
  props: {
    code: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array as () => number[],
      default: () => [],
    },
    meta: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const { copy, isSupported } = useClipboard({ legacy: true })
    const copied = ref(false)
    function copyCode() {
      copy(props.code)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 1000)
    }
    return {
      isSupported,
      copyCode,
      copied,
    }
  },

})
</script>

<template>
  <div class="code-wrap">
    <slot />
    <div v-if="isSupported" class="code-tools">
      <button>
        <div v-if="copied" class="i-icon-park-outline-check" />
        <div v-else class="i-icon-park-outline-copy" @click="copyCode()" />
      </button>
    </div>
  </div>
</template>
