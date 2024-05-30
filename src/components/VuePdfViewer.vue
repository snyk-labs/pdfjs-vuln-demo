
<script setup lang="ts">
import VuePdfEmbed from 'vue-pdf-embed';
import 'vue-pdf-embed/dist/style/index.css'

const pdfSource = "/ex1.pdf";
</script>

<template>
  <div>
    <p>Vue Component</p>
    <VuePdfEmbed :source="pdfSource"/>
  </div>
</template>

