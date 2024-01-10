import Link from 'next/link'
import logoEscudo from '@/public/images/logo_escudo.webp'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image className="w-14 h-14" src={logoEscudo} alt="Logo" />
    </Link>
  )
}
