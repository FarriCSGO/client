"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persist = void 0;
const state_1 = require("./state");
const computed_1 = require("./computed");
const collection_1 = require("./collection/collection");
const sub_1 = require("./sub");
const runtime_1 = require("./runtime");
const storage_1 = require("./storage");
const api_1 = require("./api/api");
const use_1 = require("./intergrations/use");
const controller_1 = require("./controller");
class Pulse {
    constructor(config = {}) {
        this.config = config;
        this.controllers = {};
        this.intergration = null;
        this.Controller = (config, spreadToRoot) => {
            this.controllers[name] = new controller_1.Controller(config, spreadToRoot);
            return this.controllers[name];
        };
        /**
         * Create Pulse API
         * @param config Object
         * @param config.options Object - Typescript default: RequestInit (headers, credentials, mode, etc...)
         * @param config.baseURL String - Url to prepend to endpoints (without trailing slash)
         * @param config.timeout Number - Time to wait for request before throwing error
         */
        this.Core = (core) => {
            if (!this.core && core)
                this.core = core;
            return this.core;
        };
        this.API = (config) => new api_1.default(config);
        /**
         * Create Pulse state
         * @param initialState Any - the value to initialze a State instance with
         */
        this.State = (initial) => new state_1.default(() => this, initial);
        /**
         * Create many Pulse states at the same time
         * @param stateGroup Object with keys as state name and values as initial state
         */
        this.StateGroup = (stateGroup) => state_1.StateGroup(() => this, stateGroup);
        /**
         * Create a Pulse computed function
         * @param deps Array - An array of state items to depend on
         * @param func Function - A function where the return value is the state, ran every time a dep changes
         */
        this.Computed = (func, deps) => new computed_1.default(() => this, func, deps);
        this.Collection = () => {
            return (config) => {
                return new collection_1.default(() => this, config);
            };
        };
        this.subController = new sub_1.default();
        this.runtime = new runtime_1.default(() => this);
        this.storage = new storage_1.default(() => this, config.storage || {});
        if (config.framework)
            this.initFrameworkIntergration(config.framework);
        this.globalBind();
    }
    initFrameworkIntergration(frameworkConstructor) {
        use_1.default(frameworkConstructor, this);
    }
    /**
     * Create a Pulse collection
     * @param config object
     * @param config.primaryKey The primary key for the collection.
     * @param config.groups Define groups for this collection.
     */
    // public Collection = <DataType = DefaultDataItem, G = GroupObj, S = SelectorObj>(config: Config<DataType, G, S>) =>
    //   new Collection<DataType, G, S>(() => this, config);
    // /**
    //  * Create a Pulse collection with automatic type inferring
    //  * @param config object
    //  * @param config.primaryKey string - The primary key for the collection.
    //  * @param config.groups object - Define groups for this collection.
    //  */
    // public TCollection = <G = GroupObj, S = SelectorObj>(config: Config<G, S>) => <DataType = DefaultDataItem>() =>
    //   new Collection<DataType, G, S>(() => this, config);
    /**
     * Create a Pulse collection with automatic type inferring
     * @param config object | function returning object
     * @param config.primaryKey string - The primary key for the collection.
     * @param config.groups object - Define groups for this collection.
     */
    Error(e, data) { }
    /**
     * Reset to initial state.
     * - Supports: State, Collections and Groupss
     * - Removes persisted state from storage.
     * @param Items Array of items to reset
     */
    reset(items) { }
    nextPulse(callback) {
        this.runtime.nextPulse(callback);
    }
    setStorage(storageConfig) {
        const persistedState = this.storage.persistedState;
        this.storage = new storage_1.default(() => this, storageConfig);
        this.storage.persistedState = persistedState;
        this.storage.persistedState.forEach((state) => state.persist(state.name));
    }
    Storage(storageConfig) {
        return this.setStorage(storageConfig);
    }
    /**
     * Global refrence to the first pulse instance created this runtime
     */
    globalBind() {
        try {
            if (!globalThis.__pulse)
                globalThis.__pulse = this;
        }
        catch (error) {
            // fail silently
        }
    }
}
exports.default = Pulse;
// Handy utils
function persist(items) {
    items.forEach((item) => item.persist(item.name));
}
exports.persist = persist;
