import { Server, Socket } from 'socket.io';
export declare class ChatGateway {
    server: Server;
    private logger;
    handleMessage(payload: any): any;
    handleConnection(socket: Socket): void;
    handleDisconnect(socket: Socket): void;
}
