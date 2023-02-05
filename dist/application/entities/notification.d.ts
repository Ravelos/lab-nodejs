import { Content } from "./content";
export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
}
export declare class Notification {
    private props;
    constructor(props: NotificationProps);
    get recipientId(): string;
    set recipientId(recipientId: string);
    get content(): Content;
    set content(content: Content);
    get category(): string;
    set category(category: string);
    get readAt(): Date | null | undefined;
    set readAt(readAt: Date | null | undefined);
    get createdAt(): Date;
}
