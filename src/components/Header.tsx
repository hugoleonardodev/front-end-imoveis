'use client'

import React from 'react'
import Image from 'next/image'
import Button from './Button'
import AppLogo from '@/assets/logo.png'

const Header: React.FC = () => {
  return (
    <div className="h-16 bg-white flex items-center justify-center fixed w-screen z-20">
      <Image className="w-44 h-10" src={AppLogo} alt="https://via.placeholder.com/169x42" />

      <div className="flex w-[60vw] justify-between items-center">
        <div className="justify-end items-center gap-10 inline-flex ml-10">
          <a href="localhost:3000" className="text-right text-neutral-600 text-base font-normal leading-normal">
            Imobiliárias
          </a>

          <a href="localhost:3000" className="text-right text-neutral-600 text-base font-normal leading-normal">
            Quero me Associar
          </a>

          <a
            href="localhost:3000"
            className="left-0 top-0 text-right text-neutral-600 text-base font-normal leading-normal"
          >
            Sobre
          </a>

          <a href="localhost:3000" className="text-right text-neutral-600 text-base font-normal leading-normal">
            Blog
          </a>
        </div>

        <div className="left-[1369px] top-[16px] justify-end items-center gap-8 inline-flex">
          {/* <div className="w-36 px-4 py-2 rounded-3xl border border-purple-900 justify-center items-center flex"> */}
          <Button variant="primary" outlined rounded size="medium" className="w-max py-2">
            Anunciar Imóvel
          </Button>

          {/* </div> */}

          <div className="text-right text-neutral-600 text-base font-normal leading-normal">Entrar</div>
        </div>
      </div>
    </div>
  )
}

export default Header
