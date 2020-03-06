import { StringTodoExporter } from '../src/string-todo.exporter';

describe('StringTodoExporter:', () => {
    let Sut: StringTodoExporter;
    beforeEach(() => {
        Sut = new StringTodoExporter();
    });

    it('export: should export and empty list', () => {
        const result = Sut.export([]);
        expect(result).toEqual('');
    });

    it('export: should export a list of one item with empty text', () => {
        const data = [{ id: 1, text: '' }];
        const result = Sut.export(data);
        expect(result).toEqual('');
    });

    it('export: should export a list of one item', () => {
        const data = [{ id: 1, text: 'x close the deal' }];
        const result = Sut.export(data);
        expect(result).toEqual('x close the deal');
    });

    it('export: should export a list of two items', () => {
        const data = [
            { id: 1, text: 'x close the deal' },
            { id: 2, text: '(A) check the latest code' },
        ];
        const result = Sut.export(data);
        expect(result).toEqual('x close the deal\n(A) check the latest code');
    });

    it('export: should export a list of three items', () => {
        const data = [
            { id: 1, text: 'x close the deal' },
            { id: 2, text: '(A) check the latest code' },
            { id: 3, text: '(C) practice for the test @home' },
        ];
        const result = Sut.export(data);
        expect(result).toEqual(
            'x close the deal\n(A) check the latest code\n(C) practice for the test @home'
        );
    });
});
