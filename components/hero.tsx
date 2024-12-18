import VideoThumb from '@/public/images/hero-image.webp'
import ModalVideo from '@/components/modal-video'
import { IoCalendarOutline } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";

import { plansLink, schedulingLink } from '@/utils/links'

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            {/* <div className="text-center pb-12 md:pb-16">
              <Image className="max-w-full mx-auto md:max-w-none h-auto" src={logoHorizontal} width={540} height={405} alt="Features 02" />
            </div> */}
            {/* <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Make your website <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">wonderful</span></h1> */}
            <div className="max-w-3xl mx-auto">
              <p className="h3 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Transforme seu corpo e sua mente em nossa academia de Artes Marciais!</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                {/* <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
                </div> */}
                <div className="flex gap-4">
                  <a className="flex gap-4 items-center bg-yellow-300 hover:bg-yellow-200 text-black mx-2 py-2 px-4 rounded w-full sm:w-auto" href={schedulingLink} target="_blank">
                    Agende uma aula experimental
                    <IoCalendarOutline className="w-8 h-8 fill-current" />
                  </a>
                  <a className="flex gap-4 items-center bg-yellow-300 hover:bg-yellow-100 text-black mx-2 py-2 px-4 rounded w-full sm:w-auto" href={plansLink} target="_blank">
                    Conheça nossos planos 
                    <CiCircleList  className="w-8 h-8 fill-current" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="https://www.youtube.com/embed/PM9aJddFEb0?rel=0"
            videoWidth={400}
            videoHeight={920} />

        </div>

      </div>
    </section>
  )
}