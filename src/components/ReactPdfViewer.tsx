import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const style = {
	backgroundColor: 'white',
	h1: {
		marginBottom: '20px',
	}
};

export default function ReactPdfViewer() {
	function onDocumentLoadSuccess() {
		console.log('Document loaded successfully');
	}

	return (
		<div style={style}>
			<p>React Component Example:</p>
			<Document
				file='/sample.pdf'
				onLoadSuccess={onDocumentLoadSuccess}
				options={{}}
			>
				<Page pageNumber={1} />
			</Document>
		</div>
	);
}
