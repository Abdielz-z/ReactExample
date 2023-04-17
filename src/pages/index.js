import { Inter } from 'next/font/google'
import { Row } from '../components/Row'
import { Toprow } from '../components/Toprow'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
    <div>

      <Toprow/>
      <Row size = "2" />
    
    </div>
    </main>
  )
}
