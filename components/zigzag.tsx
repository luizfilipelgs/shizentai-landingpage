import Image from 'next/image'

import FeatImage01 from '@/public/images/jiu.webp'
import FeatImage02 from '@/public/images/boxe.webp'
import FeatImage03 from '@/public/images/muayThai.webp'
import FeatImage04 from '@/public/images/Taekwondo.webp'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Modalidades</h1>
            <p className="text-xl text-gray-300">Oferecemos uma diversidade de modalidades de artes marciais para todos os níveis, focando no desenvolvimento físico, mental e em autodefesa. Explore o treino ideal para você e inicie sua jornada de aprimoramento conosco.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h2 className="h2 mb-3 text-center">Jiu Jitsu</h2>
                  <p className="text-xl text-gray-300 mb-4 text-justify">O jiu-jitsu, particularmente em sua forma brasileira (BJJ), é uma arte marcial focada em técnicas de grappling e combate no chão. Essa modalidade prioriza alavancas, torções e pressões para levar um oponente ao chão e dominá-lo. Uma característica distintiva do jiu-jitsu é a eficácia mesmo contra adversários maiores, enfatizando técnica e estratégia sobre a força bruta. Praticar jiu-jitsu melhora a flexibilidade, o controle do corpo e a resiliência mental, além de ser uma ferramenta eficaz para defesa pessoal.</p>
                  <ul className="text-lg text-gray-300 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Terça e Quinta: 19:30 às 21h, Sábado: 15:30 às 17h</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Criança - Terça e Quinta: 18h às 19h</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Adulto: R$ 130, Criança: R$ 150</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h2 className="h2 mb-3 text-center">Boxe</h2>
                  <p className="text-xl text-gray-300 mb-4 text-justify">O boxe é uma arte marcial e esporte de combate que enfatiza agilidade, velocidade e técnica. Centrado no uso de golpes de punho, o boxe envolve estratégia, coordenação e resistência física. A defesa é tão importante quanto o ataque, com movimentos evasivos e bloqueios sendo fundamentais. No boxe, os lutadores competem em diferentes categorias de peso, e os combates são supervisionados por um árbitro. O treinamento em boxe aprimora o condicionamento físico, a disciplina mental e a autoconfiança.</p>
                  <ul className="text-lg text-gray-300 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Segunda, Quarta e Sexta: 19:30 às 22:15</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>2x na semana: R$ 100</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>3x na semana: R$ 130</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h2 className="h2 mb-3 text-center">Muay Thai</h2>
                  <p className="text-xl text-gray-300 mb-4 text-justify">O muay thai, conhecido como a "arte das oito armas", é uma luta de origem tailandesa que utiliza punhos, cotovelos, joelhos e pernas em combate. Caracterizado por sua intensidade e dinamismo, o muay thai não apenas enfatiza golpes poderosos, mas também a clínica, uma forma de luta corpo a corpo. Além do aspecto físico, há um forte componente cultural e espiritual, com práticas e rituais que remontam às suas raízes históricas. O muay thai desenvolve força, flexibilidade e resistência, além de promover o respeito e a disciplina.</p>
                  <ul className="text-lg text-gray-300 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Terça e Quinta: 21:15 às 22:15</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-red-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>R$ 100</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4nd item */}
            {/* <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage04} width={540} height={405} alt="Features 02" />
              </div>
              
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h2 className="h2 mb-3 text-center">Taekwondo</h2>
                  <p className="text-xl text-gray-300 mb-4 text-justify">O taekwondo é uma arte marcial coreana conhecida por seus chutes altos e rápidos. Esta modalidade combina combate, autodefesa, exercício e filosofia. Diferenciando-se por sua ênfase em velocidade e agilidade, o taekwondo é tanto um esporte olímpico quanto uma prática de defesa pessoal. Os praticantes, conhecidos como taekwondistas, são treinados em padrões de movimento chamados poomsae, além de sparring e quebra de tábuas. O taekwondo favorece o desenvolvimento de coordenação, flexibilidade e força mental.</p>
                  <ul className="text-lg text-gray-300 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Chutes Altos e Rápidos</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Velocidade e Agilidade</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Coordenação e Flexibilidade</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  )
}
