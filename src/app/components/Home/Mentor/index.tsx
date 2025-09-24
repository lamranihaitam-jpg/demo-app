'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MentorType } from '@/app/types/mentor'
import MentorSkeleton from '../../Skeleton/Mentor'

const Mentor = () => {
  const [mentor, setMentor] = useState<MentorType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setMentor(data.MentorData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='mentors-section'>
      <div className='container'>
        <div className='flex flex-col sm:flex-row gap-5 justify-between sm:items-center mb-12'>
          <h2 className='font-bold tracking-tight'>Rencontrez nos mentors</h2>
          <div>
            <button className='rounded-md bg-transparent text-[#102c46] border border-[#102c46] hover:bg-[#102c46] hover:text-white px-6 py-3 text-sm font-medium'>
              Voir le profil des mentors
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  xl:gap-8'>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <MentorSkeleton key={i} />
              ))
            : mentor.map((item, index) => (
                <div
                  key={index}
                  className='group relative shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl'
                >
                  <div className='min-h-80 w-full overflow-hidden rounded-lg bg-gray-200 lg:h-80'>
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      width={700}
                      height={700}
                      className='h-full w-full object-cover object-center lg:h-full lg:w-full '
                    />
                  </div>
                  <div className='my-4 flex justify-center '>
                    <div>
                      <div className='border border-white rounded-lg -mt-8 bg-white p-2 shadow-mentorShadow flex items-center justify-center'>
                        <Link
                          href='/'
                          className='text-sm text-gray-700 text-center'>
                          {item.name}
                        </Link>
                      </div>
                      <p className='mt-3 text-2xl font-semibold text-black/80 text-center'>
                        {item.color}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Mentor
