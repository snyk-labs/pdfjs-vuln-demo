<script setup lang="ts">
import { ref } from 'vue';
import { VuePdfEmbed } from 'vue-pdf-embed';
import 'vue-pdf-embed/dist/style/index.css'

const pdfSrc = ref('/sample.pdf');

const onFileChange = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    pdfSrc.value = URL.createObjectURL(file);
  };
  reader.readAsArrayBuffer(file);
};
</script>

<template>
  <div>
    <p>Vue Component</p>
    <input type="file" @change="onFileChange" />
    <VuePdfEmbed :source="sample.pdf" />
  </div>
</template>

