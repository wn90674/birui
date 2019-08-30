<template>
  <div  class="markdown birui" v-html="content"></div>
</template>

<script>
import content from './file/platform.md'
export default {
  computed: {
    content() {
      return content
    }
  }
}
</script>
