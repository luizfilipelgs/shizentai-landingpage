export const metadata = {
  title: 'Shizentai',
  description: 'Academia de Artes Marciais',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import TeamBlocks from '@/components/team-blocks'
import Maps from '@/components/maps'
import Zigzag from '@/components/zigzag'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <TeamBlocks />
      <Maps />
    </>
  )
}
