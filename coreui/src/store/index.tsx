let mobx = require('mobx');
let { observable } = mobx;
const urlRouter = require('@fendy3002/url-router').default;

export default class store {
    constructor(context) {
        this.context = context;
        [
        ].forEach((handler) => {
            this[handler] = this[handler].bind(this);
        });
    }
    context;
};