import { State } from './state';
import Collection from './collection';
import Computed from './computed';
export declare type StateObj = {
    [key: string]: State | Computed;
};
export declare type FuncObj = {
    [key: string]: () => any;
};
export interface ControllerConfig<S, C, A, H, R> {
    name?: string;
    state: S;
    collection: C;
    actions: A;
    helpers: H;
    routes: R;
}
export declare class Controller<S = StateObj, C = Collection, A = FuncObj, H = FuncObj, R = FuncObj> {
    name?: string;
    state: this['config']['state'] & StateObj;
    collection: this['config']['collection'];
    actions: this['config']['actions'] & FuncObj;
    helpers: this['config']['helpers'] & FuncObj;
    routes: this['config']['routes'] & FuncObj;
    config: ControllerConfig<S, C, A, H, R>;
    constructor(config: Partial<ControllerConfig<S, C, A, H, R>>, spreadToRoot: any);
    private applyKeys;
}
