import Image from 'next/image'
import { Inter } from 'next/font/google'
import Widget from '@/components/Widget'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="h-screen bg-zinc-950 flex items-center justify-center text-zinc-50">
      <Widget />
    </main>
  )
}
