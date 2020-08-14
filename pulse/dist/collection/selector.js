"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computed_1 = require("../computed");
class Selector extends computed_1.default {
    constructor(collection, key) {
        if (!key)
            key = 0;
        // initialize computed constructor with initial compute state
        super(collection().instance, () => collection().findById(key).value);
        // computed function that returns a given item from collection
        this.func = () => collection().findById(this._masterSelected).value;
        // alias collection function
        this.collection = collection;
        this.type(Object);
        this._masterSelected = key;
    }
    set selected(val) {
        this._masterSelected = val;
        this.recompute();
    }
    get selected() {
        return this._masterSelected;
    }
    select(key) {
        this.selected = key;
    }
}
exports.default = Selector;
