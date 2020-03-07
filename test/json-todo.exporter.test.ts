import { JsonTodoExporter } from '../src/string-format-exporters/json-todo.exporter';

describe('JsonTodoExporter:', () => {
    describe('with default JSON.stringify:', () => {
        let Sut: JsonTodoExporter;

        beforeEach(() => {
            Sut = new JsonTodoExporter();
        });

        it('export: should export and empty list', () => {
            const result = Sut.export([]);
            expect(result).toEqual('[]');
        });

        it('export: should export a list of one item with empty text', () => {
            const data = [{ id: 1, text: '' }];
            const result = Sut.export(data);
            expect(result).toEqual('[{"id":1,"text":""}]');
        });

        it('export: should export a list of one item', () => {
            const data = [{ id: 1, text: 'x close the deal' }];
            const result = Sut.export(data);
            expect(result).toEqual('[{"id":1,"text":"x close the deal"}]');
        });

        it('export: should export a list of two items', () => {
            const data = [
                { id: 1, text: 'x close the deal' },
                { id: 2, text: '(A) check the latest code' },
            ];
            const result = Sut.export(data);
            expect(result).toEqual(
                '[{"id":1,"text":"x close the deal"},{"id":2,"text":"(A) check the latest code"}]'
            );
        });

        it('export: should export a list of three items', () => {
            const data = [
                { id: 1, text: 'x close the deal' },
                { id: 2, text: '(A) check the latest code' },
                { id: 3, text: '(C) practice for the test @home' },
            ];
            const result = Sut.export(data);
            expect(result).toEqual(
                '[{"id":1,"text":"x close the deal"},{"id":2,"text":"(A) check the latest code"},{"id":3,"text":"(C) practice for the test @home"}]'
            );
        });
    });

    describe('with mock stringify:', () => {
        let Sut: JsonTodoExporter;
        const data = [{ id: 1, text: 'x close the deal' }];
        const mockJson = JSON.stringify(data);
        const mockStringify = jest.fn().mockReturnValue(mockJson);
        let result: string;

        beforeEach(() => {
            Sut = new JsonTodoExporter(mockStringify);
            result = Sut.export(data);
        });

        it('export: should call stringify', () => {
            expect(mockStringify).toHaveBeenCalledWith(data);
        });

        it('...with the right data', () => {
            expect(result).toEqual(mockJson);
        });
    });
});
