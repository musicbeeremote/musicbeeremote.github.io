---
outline: deep
---

<script setup>
import { onMounted, ref } from 'vue'

const version = ref(null)
const docsVersion = ref('1.6')

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const v = params.get('version')
  if (v) {
    version.value = v
    const [major, minor] = v.split('.').map(Number)
    // Versions before 1.6.0 use the 1.5 (legacy) docs
    if (major < 1 || (major === 1 && minor < 6)) {
      docsVersion.value = '1.5'
    }
  }
})
</script>

# User Guide

Here you can learn how to get started with MusicBee Remote.

<div v-if="version" class="custom-block tip">
  <p class="custom-block-title">App version {{ version }}</p>
  <p v-if="docsVersion === '1.5'">
    You are using an older version of the app. The documentation below matches your version.
    <a href="/help/1.6/">View the latest documentation</a> for the newest features.
  </p>
  <p v-else>
    You are viewing the documentation for the latest version of MusicBee Remote.
  </p>
</div>

## Plugin

For information on setting up the MusicBee plugin, see the [Plugin Guide](./plugin/).

## Application

<div v-if="docsVersion === '1.5'">

For information on using the application, see the [Application Guide (v1.5)](./1.5/application).

</div>
<div v-else>

For information on using the application, see the [Application Guide (v1.6)](./1.6/).

</div>
