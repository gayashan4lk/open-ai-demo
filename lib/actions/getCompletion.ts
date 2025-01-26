import OpenAI from 'openai'

const OPENAI_API_SECRET = process.env.OPENAI_API_SECRET

const openai = new OpenAI({
  apiKey: OPENAI_API_SECRET,
  dangerouslyAllowBrowser: false
})

export async function getCompletion(userMessage: string) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are a helpful assistant' },
      {
        role: 'user',
        content: userMessage
      }
    ],
    store: true
  })

  return completion.choices[0].message
}