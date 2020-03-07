import { ITodoExporter, ITodoDoc } from '../index.types';

function destroyClickedElement(event: any) {
    document.body.removeChild(event.target);
}

export class WebFileExporter implements ITodoExporter<void> {
    constructor(
        private fileName: string,
        private stringExporter: ITodoExporter<string>
    ) {}

    export(lsTodos: ITodoDoc[]): void {
        const text = this.stringExporter.export(lsTodos);

        const textBlob = new Blob([text], { type: 'text/plain' });
        const downloadLink = document.createElement('a');
        downloadLink.download = this.fileName;

        if (window.webkitURL != null) {
            downloadLink.href = window.webkitURL.createObjectURL(textBlob);
        } else {
            downloadLink.href = window.URL.createObjectURL(textBlob);
            downloadLink.style.display = 'none';
            document.body.appendChild(downloadLink);
            downloadLink.onclick = destroyClickedElement;
        }

        downloadLink.click();
    }
}
