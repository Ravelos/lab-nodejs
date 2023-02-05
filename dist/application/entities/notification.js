"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    constructor(props) {
        this.props = props;
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
    set readAt(readAt) {
        this.props.readAt = readAt;
    }
    get createdAt() {
        return this.props.createdAt;
    }
}
exports.Notification = Notification;
//# sourceMappingURL=notification.js.map