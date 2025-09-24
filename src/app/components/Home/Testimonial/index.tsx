'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { TestimonialType } from '@/app/types/testimonial'
import TestimonialSkeleton from '../../Skeleton/Testimonial'

// CAROUSEL SETTINGS

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState<TestimonialType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setTestimonial(data.TestimonialData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <section id='testimonial-section' className='bg-[#C5A972] relative'>
      <div className='container'>
        <div className='flex flex-col sm:flex-row gap-5 justify-between sm:items-center mb-6'>
          <h2 className='font-bold tracking-tight'>
            Avis Clients
          </h2>
          <div>
            <button
              className="rounded-md bg-transparent text-[#102c46] border border-[#102c46] hover:bg-[#102c46] hover:text-white px-6 py-3 text-sm font-medium"
            >
              Donner votre avis
            </button>
          </div>
        </div>
        <p className='text-lg font-medium mb-6'>
          Construisez vos compétences avec nos cours et mentors <br /> issus d'entreprises de classe mondiale.
        </p>
        <Slider {...settings}>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <TestimonialSkeleton key={i} />
              ))
            : testimonial.map((items, i) => (
                <div key={i}>
                  <div className='bg-white m-4 pt-8 px-12 pb-10 text-center rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                    <div className="relative z-0 flex justify-center items-center before:absolute before:bg-[url('/images/testimonial/greenpic.svg')] before:h-6 before:w-6 before:bottom-0 before:z-10 before:left-54%">
                      <Image
                        src={items.imgSrc}
                        alt='gaby'
                        width={64}
                        height={64}
                        className='inline-block rounded-full ring-2 ring-white relative'
                      />
                    </div>
                    <p className='text-sm pt-4 pb-2'>{items.profession}</p>
                    <p className='text-2xl font-semibold pb-3'>{items.name}</p>
                    <Image
                      src={items.starimg}
                      alt='stars-img'
                      className='m-auto pb-6 w-[30%]'
                      width={32}
                      height={32}
                    />
                    <p className='text-lg font-medium leading-7'>
                      {items.detail}
                    </p>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonial
