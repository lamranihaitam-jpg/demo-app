import Link from 'next/link'
import Dropdownone from './Dropdownone'
import Dropdowntwo from './Dropdowntwo'
import Image from 'next/image'

const Banner = () => {
  return (
    <section id='Home' className='bg-banner-image min-h-screen bg-cover bg-center bg-no-repeat pt-28 pb-20'>
      <div className='relative px-6 lg:px-8 min-h-[calc(100vh-7rem)] flex items-center'>
        <div className='container'>
          <div className='flex flex-col gap-4 text-center'>
            <h1 className='leading-tight font-bold tracking-tight max-w-4xl mx-auto text-white uppercase'>
              L’école de référence en sûreté et sécurité
            </h1>
            <p className='text-lg leading-8 text-white'>
              Former, partout sur le territoire, les professionnels de la sécurité dont la France et ses entreprises ont besoin
            </p>
            <div className='backdrop-blur-md bg-white/30 border border-white/30 rounded-lg shadow-lg p-6 w-fit mx-auto'>
              <div className='flex items-center justify-center gap-8'>
                <div className='hidden sm:block -space-x-2 overflow-hidden'>
                  <Image
                    className='inline-block h-12 w-12 rounded-full ring-2 ring-white'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt='img1'
                    width={12}
                    height={12}
                  />

                  <Image
                    className='inline-block h-12 w-12 rounded-full ring-2 ring-white'
                    src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt='img2'
                    width={12}
                    height={12}
                  />
                  <Image
                    className='inline-block h-12 w-12 rounded-full ring-2 ring-white'
                    src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
                    alt='img3'
                    width={12}
                    height={12}
                  />
                  <Image
                    className='inline-block h-12 w-12 rounded-full ring-2 ring-white'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt='img4'
                    width={12}
                    height={12}
                  />
                  <Image
                    className='inline-block h-12 w-12 rounded-full ring-2 ring-white'
                    src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt='img5'
                    width={12}
                    height={12}
                  />
                </div>
                <div>
                  <div className='flex justify-center sm:justify-start'>
                    <h3 className='text-2xl font-semibold mr-2 text-white'>4.6</h3>
                    <Image
                      src={'/images/banner/Stars.svg'}
                      alt='stars-icon'
                      width={32}
                      height={32}
                      className='w-[60%]'
                    />
                  </div>
                  <div>
                    <h3 className='text-sm text-white'>+10k Avis sur Google</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DROPDOWN BUTTONS removed as requested - rectangle with form was deleted */}
        </div>
      </div>
    </section>
  )
}

export default Banner
