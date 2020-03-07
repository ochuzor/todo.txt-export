import { ITodoExporter, ITodoDoc } from '../index.types';

export type stringifyFn = (lsTodos: ITodoDoc[]) => string;

export class JsonTodoExporter implements ITodoExporter<string> {
    constructor(private stringify: stringifyFn = JSON.stringify) {}

    export(lsTodos: ITodoDoc[]): string {
        return this.stringify(lsTodos);
    }
}
