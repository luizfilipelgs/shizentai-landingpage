import VideoThumb from '@/public/images/hero-image.webp'
import ModalVideo from '@/components/modal-video'
import Image from 'next/image'
import logoHorizontal from '@/public/images/logo_horizontal.webp'
import { whatsAppLink } from '@/utils/whatsLink'

export default function Hero() {
  const linkWTS = whatsAppLink()
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
                <div>
                  <a className="flex gap-4 items-center bg-green-600 hover:bg-green-700 text-white mx-2 py-2 px-4 rounded w-full sm:w-auto" href={linkWTS} target="_blank">
                    Agende uma aula experimental
                    <svg className="w-8 h-8 fill-current bi bi-whatsapp" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"> 
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" fill="white"></path> 
                    </svg>
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