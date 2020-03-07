import { ITodoExporter, ITodoDoc } from '../index.types';

export interface IUrlTodo {
    href: string;
}

export interface Encoder {
    encode(data: ITodoDoc[]): string;
}

export class UrlTodoExporter implements ITodoExporter<IUrlTodo> {
    /**
     *
     * @param _baseUrl is the return from window.location.origin
     * @param _encoder is a converter from ITodo[] into a hash string
     */
    constructor(private _baseUrl: string, private _encoder: Encoder) {}

    export(lsTodos: ITodoDoc[]): IUrlTodo {
        const href = this._baseUrl + '/#' + this._encoder.encode(lsTodos);
        return { href };
    }
}
