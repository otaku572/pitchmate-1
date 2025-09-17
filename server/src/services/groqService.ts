import axios from 'axios';
import fs from 'fs';
import path from 'path';

const GROQ_API_URL = process.env.GROQ_API_URL || '';
const GROQ_API_KEY = process.env.GROQ_API_KEY || '';

interface GenerateMessageParams {
  industry: string;
  audience: string;
  recipientInfo: string;
}

const groqService = {
  async generateMessage({ industry, audience, recipientInfo }: GenerateMessageParams): Promise<string> {
    try {
      // Construct the paths to the prompt files
      const industryPromptPath = path.join(__dirname, '..', 'prompts', 'industries', `${industry}.txt`);
      const audiencePromptPath = path.join(__dirname, '..', 'prompts', 'audiences', `${audience}.txt`);

      // Read the content of the prompt files
      const industryPrompt = fs.existsSync(industryPromptPath) ? fs.readFileSync(industryPromptPath, 'utf-8') : '';
      const audiencePrompt = fs.existsSync(audiencePromptPath) ? fs.readFileSync(audiencePromptPath, 'utf-8') : '';


      // Refined system prompt construction for better AI instructions
      let systemPrompt = '';
      if (industryPrompt) {
        systemPrompt += `Industry Context:\n${industryPrompt}\n\n`;
      }
      if (audiencePrompt) {
        systemPrompt += `Audience Context:\n${audiencePrompt}\n\n`;
      }
      systemPrompt += `Instructions:\nYou are an expert outreach message generator. Use the above context to draft a highly personalized, professional, and concise message (150-200 words) tailored to the recipient's profile. Avoid generic language and ensure the message feels unique and relevant.`;

      const userPrompt = `Recipient Information: ${recipientInfo}`;

      const response = await axios.post(
        GROQ_API_URL,
        {
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
          ],
          model: 'openai/gpt-oss-120b',
          temperature: 1.7,
          max_tokens: 250
        },
        {
          headers: {
            'Authorization': `Bearer ${GROQ_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
      // Adjust response parsing as per Groq API
      return response.data.choices?.[0]?.message?.content || 'Sorry, I could not generate a message at this time.';
    } catch (error) {
      console.error('Error generating message with Groq:', error);
      throw new Error('Failed to generate message due to a server error.');
    }
  }
};

export default groqService;
