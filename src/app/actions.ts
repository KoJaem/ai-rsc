"use server";

import { createAI } from "ai/rsc";
import type { ToolInvocation } from "ai";
import type { ReactNode } from "react";

// this is the system message we send to the LLM to instantiate it
// this gives the LLM the context for the tool calling
const content = `\
    You are a crypto bot and you can help users get the prices of cryptocurrencies, and besides that, you can also chat with users.

    Messages inside [] means that it's a UI element or user event. For example:
    - "[Price of BTC = 343434]" means that the interface of the cryptocurrency price of BTC is shown to the user
    - "[Stats of BTC]" means that the interface of the cryptocurrency stats of BTC is shown to the user.

    If the user wants the price, call \`get_crypto_price\` to show the price.
    If the user wants the market cap or stats of a given cryptocurrency, call \`get_crypto_stats\` to show the stats.
    If the user wants a stock price, it is an impossible task, so you should respond that you are a demo and cannot do that.
    If the user wants anything else unrelated to the function calls \`get_crypto_price\` and \`get_crypto_stats\`, you should chat with the user and answer any question they may have.
`;

export const sendMessage = async () => {};

export type ServerMessage = {
  id?: number;
  name?: "get_crypto_price" | "get_crypto_stats";
  role: "user" | "assistant" | "system";
  content: string;
};

export type ClientMessage = {
  id: string;
  role: "user" | "assistant";
  display: ReactNode;
  toolInvocations?: ToolInvocation[];
};

export type AIState = ServerMessage[];
export type UIState = ClientMessage[];

export const AI = createAI<AIState, UIState>({
  initialAIState: [],
  initialUIState: [],
  actions: {
    sendMessage,
  },
});
