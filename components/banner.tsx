'use client'

import { schedulingLink } from '@/utils/links'
import Link from 'next/link'
import { useState } from 'react'
import { FaCalendarAlt } from "react-icons/fa";

export default function Banner() {

  const [bannerOpen, setBannerOpen] = useState<boolean>(true)
  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          <div className="bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
            <div className='text-slate-500 inline-flex'>
              <Link href={schedulingLink} target="_blank" className="flex justify-center items-center text-white bg-black-500 hover:bg-red-600 rounded-full transition duration-150 ease-in-out" aria-label="WhatsApp">
                <FaCalendarAlt className="w-8 h-8 fill-current" />
              </Link>
            </div>
            <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-gray-700" onClick={() => setBannerOpen(false)}>
              <span className="sr-only">Close</span>
              <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}