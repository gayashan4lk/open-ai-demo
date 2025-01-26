import { GenerateText } from '@/lib/components/GenerateText'

export default function Home() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">GPT-4o-mini</h1>
      <GenerateText />
    </div>
  )
}
