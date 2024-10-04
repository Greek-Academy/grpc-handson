import { credentials } from "@grpc/grpc-js";
import { ChatServiceClient } from "../../.generated/ChatService_grpc_pb";
import { ChatMessage } from "../../.generated/ChatService_pb";

function sendChat(message: string) {
  const chatMessage: ChatMessage = new ChatMessage();
  chatMessage.setMessage(message);
  chatMessage.setReactionCount(1);
  console.log(chatMessage.getMessage());

  // when want to send data to the server, use write method.
  call.write(chatMessage);
}

function createClient(addr: string): ChatServiceClient {
  return new ChatServiceClient(addr, credentials.createInsecure());
}

async function closeClient(client: ChatServiceClient) {
  client.close();
}

const client: ChatServiceClient = createClient("localhost:50051");
const call = client.chat();

call.on("data", function (chatMessage) {
  console.log(chatMessage.message);
});

call.on("end", function () {
  console.log("ended call");
});

sendChat("hello world");
