import React from 'react'
import Hero from '@/app/components/Home/Hero'
import NamesList from '@/app/components/Home/Courses'
import JoinSection from '@/app/components/Home/JoinSection'
import Mentor from '@/app/components/Home/Mentor'
import Testimonial from '@/app/components/Home/Testimonial'
import Newsletter from '@/app/components/Home/Newsletter'
import { Metadata } from 'next'
import ContactForm from './components/Contact/Form'
export const metadata: Metadata = {
  title: 'GROUPE EST FORMATION',
}

export default function Home() {
  return (
    <main>
  <Hero />
  <NamesList />
  <JoinSection />
  <Mentor />
      <Testimonial />
      <ContactForm />
      <Newsletter />
    </main>
  )
}
