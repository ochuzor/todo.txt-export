import { TodoTextFileWriter } from '../src/text-file-exporters/todo-file-writers';

describe('TodoTextFileWriter:', () => {
    const filePath = 'file-path';
    const mockWriter = {
        writeFileSync: jest.fn(),
    };
    const data = 'data string';
    let Sut: TodoTextFileWriter;

    beforeEach(() => {
        Sut = new TodoTextFileWriter(filePath, mockWriter);
        Sut.write(data);
    });

    it('should call writeFileSync', () => {
        expect(mockWriter.writeFileSync).toHaveBeenCalledWith(
            filePath,
            data,
            'utf8'
        );
    });
});
