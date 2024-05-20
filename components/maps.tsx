'use client'

import React from 'react';

export default function Maps() {
  return (
    <section className="my-10">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h2 className="h2 mb-4">Localização</h2>
        <p className="text-xl text-gray-300">Avenida Empresário Valentim dos Santos Diniz, 130a - Serraria, Maceió - AL. 57046-770</p>
      </div>

      <div className="flex justify-center items-center h-[30vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7867.850719172521!2d-35.72632502808649!3d-9.601695612481576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70147de5158779b%3A0xa36fef79d0d0264!2sShizentai!5e0!3m2!1spt-BR!2sbr!4v1716206736380!5m2!1spt-BR!2sbr"
          width="90%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
