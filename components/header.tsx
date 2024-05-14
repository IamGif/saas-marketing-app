import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className=' w-full gap-2 py-7 px-20'>
        <div className='w-full flex justify-between'>
            {/* logo */}
            <Link href="/" className='flex items-center gap-2'>
                <Image
                   src="/header-logo.svg"
                   width={60}
                   height={60}
                   alt='header logo' 
                />
                <p className='font-bold text-4xl'>Spaatz</p>
            </Link>
            
            {/* nav links */}
            <div className='gap-7 flex justify-center items-center mx-auto'>
                <Link href='/showcase' className='font-bold text-lg hover:text-blue-primary'>Showcase</Link>  
                <Link href='/developers' className='font-bold text-lg hover:text-blue-primary'>Developers</Link>  
                <Link href='/resources' className='font-bold text-lg hover:text-blue-primary'>Resources</Link>  
                <Link href='/blog' className='font-bold text-lg hover:text-blue-primary'>Blog</Link>  
                <Link href='/pricing' className='font-bold text-lg hover:text-blue-primary'>Pricing</Link>  
            </div>

            {/* signup button */}
            <div className=' flex justify-center items-center py-4 px-7 bg-black-primary hover:bg-blue-primary rounded-xl'>
                <p className='font-bold text-lg text-white'>Sign Up</p>
            </div>
        </div>
    </div>
  )
}

export default Header