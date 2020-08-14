import State from './state';
import Pulse from './pulse';
export declare class Computed<ComputedValueType = any> extends State<ComputedValueType> {
    instance: () => Pulse;
    func: Function;
    deps?: Array<State>;
    set value(val: ComputedValueType);
    set bind(val: ComputedValueType);
    constructor(instance: () => Pulse, func: Function, deps?: Array<State>);
    recompute(): void;
    reset(): this;
    patch(): this;
    persist(key?: string): this;
}
export default Computed;
