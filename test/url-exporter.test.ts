import {UrlTodoExporter, IUrlTodo} from '../src/url-exporter';

describe('UrlTodoExporter:', () => {
    let Sut: UrlTodoExporter;
    let result: IUrlTodo;
    const baseUrl = 'http://localhost';
    const mockHash = 'mock-hash-value';
    const mockEncoder = {
        encode: jest.fn().mockReturnValue(mockHash)
    };
    const mockData = [{ id: 1, text: 'x write some tests' }];

    beforeEach(() => {
        Sut = new UrlTodoExporter(baseUrl, mockEncoder);
        result = Sut.export(mockData);
    });

    it('should encode the data', () => {
        expect(mockEncoder.encode).toHaveBeenLastCalledWith(mockData);
    });

    it('should return the right result', () => {
        const expectedResult = {href: 'http://localhost/#mock-hash-value'}
        expect(result).toEqual(expectedResult);
    });
});