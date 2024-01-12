import membro01 from '@/public/images/damião.webp'
import membro02 from '@/public/images/jefferson.webp'
import membro03 from '@/public/images/bruna.webp'
import membro04 from '@/public/images/eduardo.jpeg'
import Image from 'next/image'

const teamList = [
  {
    name: "Damião Matias 'Gibi'",
    description: 'Com mais de 20 anos de prática e 15 ensinando conquistou títulos alagoanos, panamericanos e mundiais, usa o esporte para impactar positivamente a vida dos alunos, enfatizando inteligência, paciência e disciplina.',
    image: membro01,
  },
  {
    name: "Jefferson 'Primata'",
    description: 'Desde 2001 no boxe e há 3 anos com o Time Omena, dedica-se a ensinar o esporte, adaptando suas aulas ao nível de cada aluno, sendo reconhecido como um professor excepcional.',
    image: membro02,
  },
  {
    name: 'Bruna Santiago',
    description: 'Está no Muay Thai há pouco mais de 6 anos. Instrutora e atleta, também é uma das organizadoras da liga de Muay Thai feminino alagoano.',
    image: membro03,
  },
  {
    name: 'Eduardo Salomão',
    description: 'Fisioterapeuta com especialização em Traumato Ortopedia e sócio fundador da academia. Atende tanto lesões ortopédicas quanto esportivas (Artes Marciais, Crossfit, Corrida, Beach Tennis...)',
    image: membro04,
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
              <div className="relative flex flex-col items-center p-6 bg-gray-800 rounded shadow-xl w-full h-[450px]">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-5">
                  <Image className="w-full h-full object-contain" src={member.image} alt="foto do membro da equipe" />
                </div>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{member.name}</h4>
                <p className="text-gray-100 text-center">{member.description}</p>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  )
}