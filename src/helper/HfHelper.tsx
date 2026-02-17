import { InferenceClient } from "@huggingface/inference";
import type { ChatCompletionOutput, ChatCompletionInputMessage } from "@huggingface/tasks";

// Replace this with your actual HuggingFace API token
const HF_TOKEN = process.env.NEXT_PUBLIC_HF_TOKEN;

// Initialize the HuggingFace Inference client with the provided token
const hfInterface = new InferenceClient(HF_TOKEN);

if (typeof window !== 'undefined') {
    console.log("HF Token loaded:", HF_TOKEN ? `${HF_TOKEN.substring(0, 7)}...` : "MISSING");
}

// Define common HuggingFace inference properties such as temperature, max_tokens, and top_p
const commonHFProps = {
    temperature: 0.5,
    max_tokens: 2048,
    top_p: 0.7
}


// Function to make a HuggingFace inference request
export const hfAIModel = async (messages: ChatCompletionInputMessage[], model: string): Promise<ChatCompletionOutput> => {
    if (!HF_TOKEN) {
        throw new Error(JSON.stringify({ error: "Hugging Face token is missing. Please check your .env file." }));
    }

    const response = await hfInterface.chatCompletion({
        model,
        messages,
        accessToken: HF_TOKEN,
        ...commonHFProps
    });

    return response;
}
