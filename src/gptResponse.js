import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const sendMessageToOpenAI = async (prompt) => {
  try {
    // Make the API request here
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 100,
    });

    console.log(chatCompletion.choices[0].message);
  } catch (error) {
    console.error("Error sending message to OpenAI:", error);
    if (error.response) {
      console.error("API Response Status:", error.response.status);
      console.error("API Response Data:", error.response.data);
    }
  }
};

export default sendMessageToOpenAI;
