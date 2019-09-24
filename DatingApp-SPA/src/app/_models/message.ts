export interface Message {
    id: number;
    senderId: number;
    senderKnownAs: string;
    senderPhotoUrl: string;
    recipientId: number;
    recipientKnownAs: string;
    recipientPhotourl: string;
    content: string;
    isRead: boolean;
    dateRead: Date;
    messageSent: Date;
}
