import fs from 'fs';

export interface ITodoFileWriter {
    write(data: string): void;
}

export interface ITextFileWriter {
    writeFileSync(filePath: string, data: string, encoding: string): void;
}

export class TodoTextFileWriter implements ITodoFileWriter {
    constructor(private filePath: string, private writer: ITextFileWriter = fs) {}

    write(data: string): void {
        this.writer.writeFileSync(this.filePath, data, 'utf8');
    }
}
