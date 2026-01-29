# 🩺 Assistente Virtual - Consultório Médico

Este projeto é um assistente personalizado desenvolvido em **Node.js** utilizando a **Google Gemini API**. Ele simula um atendente de consultório médico de alta qualidade, configurado com uma persona específica para garantir um atendimento cordial, ético e eficiente.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução.
* **@google/generative-ai**: SDK oficial da Google para IA generativa.
* **dotenv**: Gerenciamento de variáveis de ambiente e segurança.

---

## ⚙️ Configuração da Persona

O assistente foi programado com diretrizes rigorosas através de `systemInstruction`:
1.  **Cordialidade**: Uso obrigatório de saudações e tom acolhedor.
2.  **Informação**: Respostas automáticas sobre horários (Segunda a Sexta, 08h às 18h).
3.  **Segurança**: Proibição estrita de diagnósticos ou recomendações médicas.
4.  **Objetividade**: Respostas breves e organizadas.

---

## 🚀 Como Instalar e Rodar

### 1. Clonar o repositório
```bash
git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
cd nome-do-repositorio
