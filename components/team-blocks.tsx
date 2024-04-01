import membro01 from '@/public/images/damião.webp'
import membro02 from '@/public/images/jefferson.webp'
import membro03 from '@/public/images/barbara.jpeg'
import membro04 from '@/public/images/eduardo.jpeg'
import Image from 'next/image'
import Link from 'next/link'

const teamList = [
  {
    name: "Damião Matias 'Gibi'",
    description: 'Com mais de 20 anos de prática e 15 ensinando conquistou títulos alagoanos, panamericanos e mundiais, usa o esporte para impactar positivamente a vida dos alunos, enfatizando inteligência, paciência e disciplina.',
    image: membro01,
    insta: "https://www.instagram.com/matiasgibi/"
  },
  {
    name: "Jefferson 'Primata'",
    description: 'Desde 2001 no boxe e há 3 anos com o Time Omena, dedica-se a ensinar o esporte, adaptando suas aulas ao nível de cada aluno, sendo reconhecido como um professor excepcional.',
    image: membro02,
    insta: "https://www.instagram.com/primataboxe/"
  },
  {
    name: 'Bárbara Acioly',
    description: ' Atleta de MMA e Muay Thai, com passagem pelos Estados Unidos e Japão. Dona do cinturão do areia Muay Thai e Top 10 do ranking nacional. É grau preto de Muay Thai e Jiu jitsu. Instrutora de defesa para a polícia militar',
    image: membro03,
    insta: "https://www.instagram.com/bah_acioly.mma/"
  },
  {
    name: 'Eduardo Salomão',
    description: 'Fisioterapeuta com especialização em Traumato Ortopedia e sócio fundador da academia. Atende tanto lesões ortopédicas quanto esportivas (Artes Marciais, Crossfit, Corrida, Beach Tennis...)',
    image: membro04,
    insta: "https://www.instagram.com/eduardosalomaor/"
  },
]

export default function TeamBlocks() {
  return (
    <section className="relative mb-20">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Time</h2>
            {/* <p className="text-xl text-gray-300">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p> */}
          </div>

          {/* Items */}
          <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-3xl lg:max-w-none">
            {teamList.map((member) => (
              <div className="relative flex flex-col justify-around items-center p-6 bg-gray-800 rounded shadow-xl w-full h-[650px]">
                <div className="w-45 h-45 rounded-full overflow-hidden mb-5">
                  <Image className="w-full h-full object-contain" src={member.image} alt="foto do membro da equipe" />
                </div>

                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{member.name}</h4>
                <p className="max-h-60 text-gray-100 text-center p-2">{member.description}</p>
                <Link href={member.insta} target="_blank" className="flex justify-center items-center mt-8 text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-12 h-12 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  )
}