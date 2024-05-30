<script>
  import PdfViewer from 'svelte-pdf';
</script>

<div>
  <div>
    <h1>Svelte Component Example:</h1>
    <PdfViewer url="/sample.pdf" />
  </div>
</div>

<style>
  * {
    background-color: white;
  }
  h1 {
    margin-bottom: 20px;
  }
</style>
