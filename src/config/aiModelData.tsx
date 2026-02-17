import { AiModelList } from "@/interface/models";


// define all the models of AI with their image and model name(hugging face model name)
export const allAiModel: AiModelList = [
    {
        id: 1,
        name: 'QwenAi2_5',
        image: '/qwen-icon.png',
        model: "Qwen/Qwen2.5-72B-Instruct",
    },
    // {
    //     id: 2,
    //     name: 'QwQ-32B',
    //     image: '/qwen-icon.png',
    //     model: "Qwen/QwQ-32B-Preview",
    // },
    {
        id: 3,
        name: 'Qwen2.5',
        image: '/qwen-icon.png',
        model: "Qwen/Qwen2.5-Coder-32B-Instruct",
    }, 
    // {
    //     id: 4,
    //     name: 'Phi-4',
    //     image: '/microsoft.webp',
    //     model: "microsoft/phi-4",
    // }, 
    {
        id: 5,
        name: 'Hermes-3',
        image: '/nous-logo.png',
        model: "NousResearch/Hermes-3-Llama-3.1-8B",
    }, 
    // {
    //     id: 6,
    //     name: 'Mistral-Nemo',
    //     image: '/mistralai-logo.webp',
    //     model: "mistralai/Mistral-Nemo-Instruct-2407",
    // }, 
    {
        id: 7,
        name: 'DeepSeek-V3-0324',
        image: '/deepseek-color.png',
        model: "deepseek-ai/DeepSeek-V3-0324",
    },
]
