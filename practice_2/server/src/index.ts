import { Server, ServerCredentials } from "@grpc/grpc-js";
import { ChatServiceService } from "../../.generated/ChatService_grpc_pb";
import { addReflection } from "grpc-server-reflection";

function chat(call) {
  call.on("data", (ChatMessage) => {
    const message = ChatMessage.getMessage();
    console.log(message);
    const user = call.metadata.get("username");
    console.log(user);
  });

  call.on("end", () => {
    call.end();
  });
}

function getServer() {
  const server = new Server();
  addReflection(server, "./.generated/descriptor_set.bin");
  server.addService(ChatServiceService, {
    chat: chat,
  });
  server.bindAsync(
    "localhost:50051",
    ServerCredentials.createInsecure(),
    () => {
      console.log("server start");
      server.start();
    }
  );
}

getServer();
