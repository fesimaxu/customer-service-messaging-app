import { Server } from "socket.io";

const socketConfig = async (server: any) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
    pingTimeout: 20000,
  });

  io.on("connection", (socket) => {
    console.log("client connected");
    socket.on("disconnect", () => {
      console.log("client disconnected");
    });
  });
};

export default socketConfig;
