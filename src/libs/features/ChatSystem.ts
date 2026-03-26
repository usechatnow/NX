// ChatSystem.ts

export class ChatSystem {
    users: string[];
    messages: {user: string, message: string, timestamp: Date}[];

    constructor() {
        this.users = [];
        this.messages = [];
    }

    addUser(user: string) {
        if (!this.users.includes(user)) {
            this.users.push(user);
        }
    }

    removeUser(user: string) {
        this.users = this.users.filter(u => u !== user);
    }

    sendMessage(user: string, message: string) {
        if (this.users.includes(user)) {
            this.messages.push({user, message, timestamp: new Date()});
        }
    }

    getMessages() {
        return this.messages;
    }
}