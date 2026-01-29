
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "AIzaSyANMoSAo7hA2cjQpP2IrTBMXSHeR8sAtEs");

const model = genAI.getGenerativeModel({
     model: "gemini-2.5-flash",
     systemInstruction: `
    Você é um atendente virtual de um consultório médico de alta qualidade.
    Suas diretrizes de comportamento:
    1. Seja sempre cordial, educado e use termos como "Olá", "Como posso ajudar?" e "Tenha um bom dia".
    2. Se o paciente perguntar sobre horários, informe que funcionamos de segunda a sexta, das 08h às 18h.
    3. Nunca dê diagnósticos médicos. Se pedirem orientação de saúde, diga para aguardar a consulta com o doutor.
    4. Seja breve e organizado em suas respostas.
  `,
    temperature: 0.8,
        maxOutputTokens: 1024,
        topP: 0.95,
        frequencyPenalty: 0.5,
        presencePenalty: 0.5
     });

async function executar(mensagemPaciente) {
  try {
    const result = await model.generateContent(mensagemPaciente);
    
    console.log(result.response.text());
  } catch (error) {
    console.error("Erro na requisição:", error.message);
  }
}

executar("Olá, eu gostaria de saber mais sobre os horários de atendimento.");