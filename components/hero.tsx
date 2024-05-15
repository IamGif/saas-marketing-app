import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='h-[1000px]'>
        <div className='bg-hero h-[700px] bg-no-repeat bg-cover flex justify-center items-center'>
            
            {/* heading */}
            <div className='gap-8 flex flex-col items-center'>
                <p className='font-extrabold text-6xl text-center'>Single Dashboard for<br/> All your Business <span className='text-blue-primary'>Needs</span></p>
                <Link href='/sign-up'className='bg-white-primary flex rounded-3xl w-[300px] h-[80px] text-center items-center justify-center gap-2'>
                    <p className='font-bold text-xl'>Get Started</p>
                    <Image src='/arrow-right.svg' width={14} height={12} alt='arrow'/>
                </Link>
            </div>
        </div>
        <div className='flex items-center justify-center w-full absolute -bottom-1/4'>
            <Image src='/hero.png ' width={1010} height={600} alt='hero photo' />
        </div>
    </div>
  )
}

export default Hero