import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "",
});

const openai = new OpenAIApi(configuration);
const chatConnection = openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "assistant",
      content: "You are a helpful assistant",
    },
  ],
});
