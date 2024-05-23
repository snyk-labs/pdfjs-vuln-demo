<script>
  import PdfViewer from 'svelte-pdf';
</script>

<div>
  <div>
    <p>Svelte Component</p>
    <input type="file" />
    <!-- <Document></Document> -->
    <PdfViewer url="/sample.pdf" />
  </div>
</div>

<style>
</style>
