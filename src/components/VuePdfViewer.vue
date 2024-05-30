
<script setup lang="ts">
import VuePdfEmbed from 'vue-pdf-embed';
import 'vue-pdf-embed/dist/style/index.css'

const pdfSource = "/sample.pdf";
</script>

<template>
  <div>
    <p>Vue Component Example:</p>
    <VuePdfEmbed :source="pdfSource"/>
  </div>
</template>

<style scoped>
  * {
    background-color: white;
  }
  h1 {
    margin-bottom: 20px;
  }
</style>

