'use client'

import { useState } from 'react'
import useSWRMutation from 'swr/mutation'

export function GenerateText() {
  const fetchChat = (url: string, { arg }: { arg: string }) => fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userMessage: arg }),
  }).then((res) => res.json())

  const { trigger, data, error, isMutating } = useSWRMutation('/api/chat', fetchChat)
  const [inputText, setInputText] = useState('')

  if (isMutating) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  return (
    <div>
      {data && (
        <>
          <p>role: {data.message.role}</p>
          <p>message: {data.message.content}</p>
        </>
      )}

      <form onSubmit={(e) => { e.preventDefault(); trigger(inputText) }}>
        <input
          className='py-1 px-2 border-2 rounded-md'
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="py-1 px-2 bg-violet-500 hover:bg-violet-700 text-white font-bold rounded-md"
          type="submit"
        >
          Generate
        </button>
      </form>

    </div>
  )
}