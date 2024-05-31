# PDF.js Vulnerability Demo Project
This project is intended to serve as a proof of concept to demonstrate exploiting the vulnerability in the PDF.js (pdfjs-dist) library reported in [CVE-2024-4367](https://nvd.nist.gov/vuln/detail/CVE-2024-4367)

## Getting Things Running
- Fork and clone from this repository
- `npm install`
- `npm run dev`

## Testing Things Out
- First go to [http://localhost:4321/](http://localhost:4321/)
- Choose whichever frontend framework component you want to test out (react, vue, svelte) by clicking on its corresponding card
- Make sure the sample PDF (not exploiting the vulnerability) loads up
- You can find and analyze all the sample PDFs in the `/public` directory. Each one attempts to demonstrate different ways to exploit the vulnerability.
- When ready to test out a PDF that does exploit the vulnerability change the PDF file that the component is pointing to with the one you want to try

  For Example:
  ```javascript
  // src/components/ReactPdfViewer.jsx
  <Document
    file='/ex1.pdf'
    onLoadSuccess={onDocumentLoadSuccess}
    options={{}}>
  ```


