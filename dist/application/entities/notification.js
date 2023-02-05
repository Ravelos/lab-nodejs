"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const node_crypto_1 = require("node:crypto");
class Notification {
    constructor(props, id) {
        this._id = id !== null && id !== void 0 ? id : (0, node_crypto_1.randomUUID)();
        this.props = props;
    }
    get id() {
        return this._id;
    }
    get recipientId() {
        return this.props.recipientId;
    }
    set recipientId(recipientId) {
        this.props.recipientId = recipientId;
    }
    get content() {
        return this.props.content;
    }
    set content(content) {
        this.props.content = content;
    }
    get category() {
        return this.props.category;
    }
    set category(category) {
        this.props.category = category;
    }
    get readAt() {
        return this.props.readAt;
    }
    read() {
        this.props.readAt = new Date();
    }
    unread() {
        this.props.readAt = null;
    }
    get canceleAt() {
        return this.props.canceledAt;
    }
    cancel() {
        this.props.canceledAt = new Date();
    }
    get createdAt() {
        return this.props.createdAt;
    }
}
exports.Notification = Notification;
//# sourceMappingURL=notification.js.map