export type Fx<P extends unknown[], R> = (...params: P) => R;
export type Callable<P extends unknown[], R> = {
    (...params: P): R;
};
export type OOF<T extends Fx<any[], any>> = Callable<Parameters<T>, ReturnType<T>> & {
    compose<RComposed>(f: Fx<[ReturnType<T>], RComposed>): OOF<Fx<Parameters<T>, RComposed>>;
};
export declare function oof<T extends Fx<any[], any>>(f: T): OOF<T>;
