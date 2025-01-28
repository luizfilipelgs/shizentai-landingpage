'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import missaoImg from '@/public/images/missão.webp'
import principios from '@/public/images/principios.webp'
import foco from '@/public/images/foco.webp'

export default function About() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) {
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
    }
  };

  useEffect(() => {
    heightFix();
    // Adicione tab nas dependências para ajustar a altura cada vez que o tab mudar
  }, [tab]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTab((prevTab) => (prevTab % 3) + 1);
    }, 10000); // Muda o tab a cada 5 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, []);

  const handleTabClick = (tabIndex: number) => {
    setTab(tabIndex);
  };

  return (
    <section className="relative pb-10">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-900 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 text-red-500">Shizentai (自然体)</h1>
            <p className="text-xl text-gray-200">"Corpo natural", é um princípio das artes marciais japonesas que enfatiza o equilíbrio e a eficiência física e mental. Em nossa academia, priorizamos este conceito, oferecendo um ambiente ideal e instrutores experientes para um treinamento que equilibra habilidades físicas e disciplina mental. Com turmas de tamanho limitado, garantimos uma experiência de aprendizado personalizada e eficaz, preparando os alunos para enfrentar desafios tanto nas artes marciais quanto na vida cotidiana.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">

              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-gray-900 shadow-md border-gray-200 hover:shadow-lg text-white' : 'bg-gray-800 border-transparent text-gray-300'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); handleTabClick(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-red-500">Nossa missão</div>
                    <div className="text-gray-300 text-justify">Nossa missão é disseminar os benefícios das artes marciais, fortalecendo indivíduos física e mentalmente, e promovendo bem-estar, disciplina e autoconfiança.</div>
                  </div>

                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-gray-900 shadow-md border-gray-200 hover:shadow-lg text-white' : 'bg-gray-800 border-transparent text-gray-300'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); handleTabClick(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-red-500">Partimos de princípios</div>
                    <div className="text-gray-300 text-justify">Integridade, Honestidade, Respeito, Responsabilidade e Compromisso.</div>
                  </div>

                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-gray-900 shadow-md border-gray-200 hover:shadow-lg text-white' : 'bg-gray-800 border-transparent text-gray-300'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); handleTabClick(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-red-500">Nosso foco</div>
                    <div className="text-gray-300 text-justify">É a satisfação de nossos alunos , observando seu progresso em habilidades motoras, condicionamento físico e integração de valores culturais.</div>
                  </div>

                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 4 ? 'bg-gray-900 shadow-md border-gray-200 hover:shadow-lg text-white' : 'bg-gray-800 border-transparent text-gray-300'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); handleTabClick(4); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-red-500">Nosso diferencial</div>
                    <div className="text-gray-300 text-justify">Oferecemos um ambiente acolhedor e estruturado, onde cada aluno é incentivado a superar seus limites de forma segura e progressiva, com o suporte de profissionais qualificados.</div>
                  </div>

                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 5 ? 'bg-gray-900 shadow-md border-gray-200 hover:shadow-lg text-white' : 'bg-gray-800 border-transparent text-gray-300'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); handleTabClick(5); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-red-500">Nosso compromisso com a comunidade</div>
                    <div className="text-gray-300 text-justify">Buscamos impactar positivamente a sociedade, promovendo a inclusão e o acesso às artes marciais como ferramentas de transformação pessoal e social.</div>
                  </div>

                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="flex flex-col justify-center h-full md:h-auto max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 mt-6 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={missaoImg} width={750} alt="Features bg" />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={principios} width={750} alt="Features bg" />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={foco} width={750} alt="Features bg" />
                    </div>
                  </Transition>

                  <Transition
                    show={tab === 4}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={foco} width={750} alt="Features bg" />
                    </div>
                  </Transition>

                  <Transition
                    show={tab === 5}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={foco} width={750} alt="Features bg" />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}