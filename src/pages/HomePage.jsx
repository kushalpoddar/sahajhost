import { useEffect } from 'react'
import Hero from '../components/Hero'
import IdealSolution from '../components/IdealSolution'
import WhyApacheNginx from '../components/WhyApacheNginx'
import Plans from '../components/Plans'
import ManagedVPS from '../components/ManagedVPS'
import Faq from '../components/Faq'
import Brands from '../components/Brands'

const HOME_TITLE = 'SahajHost — Simple & Reliable Web Hosting at a Reasonable Price'

export default function HomePage() {
  useEffect(() => {
    const prev = document.title
    document.title = HOME_TITLE
    return () => {
      document.title = prev
    }
  }, [])

  return (
    <>
      <Hero />
      <IdealSolution />
      <WhyApacheNginx />
      <Plans />
      <ManagedVPS />
      <Faq />
      <Brands />
    </>
  )
}
