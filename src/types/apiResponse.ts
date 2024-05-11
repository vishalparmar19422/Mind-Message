import { Message } from "@/models/user.model";

export interface apiResponse {
  sucess: boolean;
  message: string;
  messages?: Array<Message>;
  isAcceptingMessage?: boolean;
}
