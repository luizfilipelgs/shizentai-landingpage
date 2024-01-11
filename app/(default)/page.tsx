export const metadata = {
  title: 'Shizentai',
  description: 'Academia de Artes Marciais',
}

import Hero from '@/components/hero'
import About from '@/components/about'
import TeamBlocks from '@/components/team-blocks'
import Maps from '@/components/maps'
import Zigzag from '@/components/zigzag'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Zigzag />
      <TeamBlocks />
      <Maps />
    </>
  )
}
