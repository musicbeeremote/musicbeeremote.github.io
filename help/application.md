---
layout: page
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const params = window.location.search
  window.location.replace(`/help/1.7/${params}`)
})
</script>

Redirecting to the [latest application guide](/help/1.7/)...
