import { TextFileExporter } from '../src/text-file-exporters/text-file-exporter';

describe('TextFileExporter:', () => {
    let Sut: TextFileExporter;
    const mockExportedText = 'mock exported text';
    const mockStringExporter = {
        export: jest.fn().mockReturnValue(mockExportedText),
    };
    const mockfileWriter = {
        write: jest.fn(),
    };
    const mockData = [{ id: 1, text: 'x close the deal' }];

    beforeEach(() => {
        Sut = new TextFileExporter(mockfileWriter, mockStringExporter);
        Sut.export(mockData);
    });

    it('export: should call the string exporter', () => {
        expect(mockStringExporter.export).toHaveBeenLastCalledWith(mockData);
    });

    it('export: should call the filewriter', () => {
        expect(mockfileWriter.write).toHaveBeenCalledWith(mockExportedText);
    });
});
