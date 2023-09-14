import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
})

const chatCompletion = async(inputText: string) => {
  return await openai.chat.completions.create({
      messages: [
        { role: "system",
          content: `Transfer the pronounciation of Khmer to sentence, tell me the Khmer sentence corresponding to it and the meaning of them in English. ${inputText}` 
        }
      ],
      model: "gpt-3.5-turbo",
    })
}

export default chatCompletion