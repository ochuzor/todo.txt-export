export type IdType = number | string;

export interface ITodoDoc {
    id: IdType;
    text: string;
}

export interface ITodoExporter<T> {
    export(lsTodos: ITodoDoc[]): T;
}
