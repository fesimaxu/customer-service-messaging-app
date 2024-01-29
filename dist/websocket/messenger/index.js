"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerServiceChatSocket = void 0;
const customerServiceChatSocket = (io) => {
    io.on("connection", (socket) => {
        // to store agents active online
        const agents = {};
        // to broadcast active or online agents
        socket.on("agentLogin", (data) => {
            agents[socket.id] = data.agentId;
            const activeAgent = data.username;
            io.emit("activeAgent", { activeAgent, status: "online" });
        });
        // to broadcast customers message to the agents active
        socket.on("customerMessage", (data) => {
            const customer = data.userId;
            const message = data.message;
            const timestamp = new Date().toISOString();
            const incomingMessage = {
                customer,
                message,
                timestamp,
            };
            io.emit("messageAgent", incomingMessage);
        });
        // direct message between agent and customer
        socket.on("directMessage", (data) => {
            const { userId, message } = data;
            const userSocketId = agents[userId];
            if (userSocketId) {
                io.to(userSocketId).emit("directMessage", {
                    userId,
                    message,
                });
            }
        });
        // to set the status of an agent offline once the agent logs out
        socket.on("agentLogout", () => {
            const agentId = agents[socket.id];
            if (agentId) {
                delete agents[socket.id];
                io.emit("activeAgent", { agentId, status: "offline" });
            }
        });
    });
};
exports.customerServiceChatSocket = customerServiceChatSocket;
