import { GenerateText } from '@/lib/components/GenerateText'

export default function Home() {
  return (
    <div>
      <h1 className='text-2xl font-bold'>GPT-4o-mini</h1>
      <GenerateText />
    </div>
  )
}
