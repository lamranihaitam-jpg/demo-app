import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { CourseType } from '@/app/types/course'
import { Hourtype } from '@/app/types/hour'
import { CourseDetailType } from '@/app/types/coursedetail'
import { MentorType } from '@/app/types/mentor'
import { TestimonialType } from '@/app/types/testimonial'
import { FooterLinkType } from '@/app/types/footerlinks'

const HeaderData: HeaderItem[] = [
  { label: 'À PROPOS', href: '/#Home' },
  { label: 'FORMATIONS', href: '/#Courses' },
  { label: 'MENTORS', href: '/#mentors-section' },
  { label: 'AVIS', href: '/#testimonial-section' },
  //{ label: 'Join', href: '/#join-section' },
  { label: 'CONTACT', href: '/#contact' },
  //{ label: 'Docs', href: '/documentation' },
]

const CourseData: CourseType[] = [
  { name: 'Mobile Development' },
  { name: 'Web Development' },
  { name: 'Data Science' },
  { name: 'Cloud Computing' },
]

const HourData: Hourtype[] = [
  { name: '20hrs in a Month' },
  { name: '30hrs in a Month' },
  { name: '40hrs in a Month' },
  { name: '50hrs in a Month' },
]

const Companiesdata: { imgSrc: string }[] = [
  {
    imgSrc: '/images/slickCompany/airbnb.svg',
  },
  {
    imgSrc: '/images/slickCompany/hubspot.svg',
  },
  {
    imgSrc: '/images/slickCompany/microsoft.svg',
  },
  {
    imgSrc: '/images/slickCompany/google.svg',
  },
  {
    imgSrc: '/images/slickCompany/walmart.svg',
  },
  {
    imgSrc: '/images/slickCompany/fedex.svg',
  },
]

const CourseDetailData: CourseDetailType[] = [
  {
    course: 'Agent de sécurité',
    imageSrc: '/images/courses/coursesOne.png',
    profession: 'Formation d Agent de prévention et de sécurité événementiel (APSE)',
    price: '40',
    category: 'webdevelopment',
  },
  {
    course: 'MAC APS - Recyclage',
    imageSrc: '/images/courses/coursesTwo.png',
    profession: 'Formation obligatoire pour renouveller votre carte professionnelle auprès du CNAPS',
    price: '21',
    category: 'webdevelopment',
  },
  {
    course: 'Les risques attentatoires',
    imageSrc: '/images/courses/coursesThree.png',
    profession: 'Formation de sensibilisation aux risques terroristes',
    price: '30',
    category: 'webdevelopment',
  },
  {
    course: 'Formations ASR',
    imageSrc: '/images/courses/coursesFour.png',
    profession: 'Agent de surveillance renforcée ou agent de sécurité armé',
    price: '99',
    category: 'webdevelopment',
  },
  {
    course: 'React Native',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Learn React Native with Node.js',
    price: '89',
    category: 'mobiledevelopment',
  },
  {
    course: 'Swift',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Learn Swift from Scratch',
    price: '89',
    category: 'mobiledevelopment',
  },
  {
    course: 'Flutter',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'Flutter App Development',
    price: '69',
    category: 'mobiledevelopment',
  },
  {
    course: 'Onsen UI',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Learn Onsen Ui with HTML, CSS',
    price: '69',
    category: 'mobiledevelopment',
  },
  {
    course: 'TensorFlow',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Learn TensorFlow with SQL',
    price: '99',
    category: 'datascience',
  },
  {
    course: 'AWS',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'AWS Deep Learning AMI',
    price: '99',
    category: 'datascience',
  },
  {
    course: 'Bokeh',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Learn Bokeh with Python',
    price: '99',
    category: 'datascience',
  },
  {
    course: 'Scikit',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Scikit with Python Development',
    price: '89',
    category: 'datascience',
  },
  {
    course: 'Laas',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Infra-as-a-Service',
    price: '21',
    category: 'cloudcomputing',
  },
  {
    course: 'Iaas',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'Info-as-a-Service',
    price: '29',
    category: 'cloudcomputing',
  },
  {
    course: 'Paas',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Platform-as-a-Service',
    price: '99',
    category: 'cloudcomputing',
  },
  {
    course: 'Saas',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Software-as-a-Service',
    price: '58',
    category: 'cloudcomputing',
  },
]

const MentorData: MentorType[] = [
  {
    name: 'Formateur agent de sécurité',
    href: '#',
    imageSrc: '/images/mentor/boy1.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Mentor 1',
  },
  {
    name: 'Formateur Sécurité',
    href: '#',
    imageSrc: '/images/mentor/boy2.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Mentor 2',
  },
  {
    name: 'Formateur Cynophile',
    href: '#',
    imageSrc: '/images/mentor/boy3.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Mentor 3',
  },
  {
    name: 'Formateur Incendie',
    href: '#',
    imageSrc: '/images/mentor/boy4.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Mentor 4',
  },
  {
    name: 'Formateur Agent de sécurité incendie',
    href: '#',
    imageSrc: '/images/mentor/boy5.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Mentor 5',
  },
  {
    name: 'Formateur Agent de sécurité',
    href: '#',
    imageSrc: '/images/mentor/girl1.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Mentor 6',
  },
]

const TestimonialData: TestimonialType[] = [
  {
    profession: 'UX/UI Designer',
    name: 'Andrew Williams',
    imgSrc: '/images/testimonial/user-1.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "Cette formation m’a permis d’acquérir de nouvelles compétences et de gagner en confiance dans mon travail de sécurité. Je la recommande vivement.",
  },
  {
    profession: 'UX/UI Designer',
    name: 'Cristian Doru Barin',
    imgSrc: '/images/testimonial/user-2.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "Cette formation m’a permis d’acquérir de nouvelles compétences et de gagner en confiance dans mon travail de sécurité. Je la recommande vivement.",
  },
  {
    profession: 'UX/UI Designer',
    name: 'Tanzeel Ur Rehman',
    imgSrc: '/images/testimonial/user-3.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "Cette formation m’a permis d’acquérir de nouvelles compétences et de gagner en confiance dans mon travail de sécurité. Je la recommande vivement.",
  },
  {
    profession: 'UX/UI Designer',
    name: 'Andrew Williams',
    imgSrc: '/images/testimonial/user-1.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "Cette formation m’a permis d’acquérir de nouvelles compétences et de gagner en confiance dans mon travail de sécurité. Je la recommande vivement.",
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Company',
    links: [
      { label: 'Home', href: '/#Home' },
      { label: 'Courses', href: '/#Courses' },
      { label: 'Mentors', href: '/#mentors-section' },
      { label: 'Testimonial', href: '/#testimonial-section' },
      { label: 'Join', href: '/#join-section' },
      { label: 'Contact Us', href: '/#contact' },
    ],
  },
  {
    section: 'Support',
    links: [
      { label: 'Help center', href: '/' },
      { label: 'Terms of service', href: '/' },
      { label: 'Legal', href: '/' },
      { label: 'Privacy Policy', href: '/' },
      { label: 'Status', href: '/' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    CourseData,
    HourData,
    Companiesdata,
    CourseDetailData,
    MentorData,
    TestimonialData,
    FooterLinkData,
  })
}
