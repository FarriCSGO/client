"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
class Controller {
    constructor(config, spreadToRoot) {
        this.config = config;
        for (const propertyName in spreadToRoot)
            this[propertyName] = spreadToRoot[propertyName];
        for (const sectionName in this.config) {
            if (Controller.prototype[sectionName])
                this[sectionName] = this.config[sectionName];
        }
        this.applyKeys();
    }
    applyKeys() {
        for (const name in this.state)
            this.state[name].key(name);
    }
}
exports.Controller = Controller;
