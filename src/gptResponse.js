import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

//sending message to GPT
const sendMessageToOpenAI = async (prompt, setLoading) => {
  try {
    // Make the API request here
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 30,
    });

    console.log(chatCompletion.choices[0].message.content);

    return chatCompletion.choices[0].message.content;
  } catch (error) {
    console.error("Error sending message to OpenAI:", error);
    if (error.response) {
      console.error("API Response Status:", error.response.status);
      console.error("API Response Data:", error.response.data);
    }
    return "Sorry, something went wrong. Please try again later :(";
  }
};

export default sendMessageToOpenAI;
