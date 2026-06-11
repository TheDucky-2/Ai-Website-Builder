import {OpenAI} from 'openai';
import config from './config.ts';


const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: config.OPENROUTER_API_KEY,

});

export default openai