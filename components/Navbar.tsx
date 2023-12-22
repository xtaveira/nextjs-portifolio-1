import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
        <div className="flex flex-row gap-3 items-center">
            <Image 
                src="/horseLogo.jpg" 
                alt="logo" 
                width={40}
                height={40}
                className="w-full h-full object-contain rounded-full"
            />
            <h1 className="text-white text-[25px] font-semibold">Webchain Dev</h1>
        </div>

        <div className="flex flex-row gap-5 mb-2">
            {Socials.map((social) => (
                <Image 
                    key={social.name}
                    alt={social.name}
                    src={social.src}
                    width={30}
                    height={30}
                />
            ))}
        </div>
    </div>
  )
}

export default Navbar