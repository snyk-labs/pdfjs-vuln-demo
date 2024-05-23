import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ReactPdfViewer() {
	const [numPages, setNumPages] = useState(null);

	function onDocumentLoadSuccess() {
		console.log('Document loaded successfully');
	}

	return (
		<>
			<div>
				<p>React Component</p>
				<Document
					file={'/sample.pdf'}
					onLoadSuccess={onDocumentLoadSuccess}
					onError={(error) => console.log('Error while loading document:', error)}
				>
					<Page pageNumber={1} />
				</Document>
			</div>
		</>
	);
}
