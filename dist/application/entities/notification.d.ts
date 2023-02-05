import { Content } from "./content";
export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    canceledAt?: Date | null;
    createdAt: Date;
}
export declare class Notification {
    private _id;
    private props;
    constructor(props: NotificationProps, id?: string);
    get id(): string;
    get recipientId(): string;
    set recipientId(recipientId: string);
    get content(): Content;
    set content(content: Content);
    get category(): string;
    set category(category: string);
    get readAt(): Date | null | undefined;
    read(): void;
    unread(): void;
    get canceleAt(): Date | null | undefined;
    cancel(): void;
    get createdAt(): Date;
}
