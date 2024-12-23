import Hero from '@/components/home/hero'
import FeaturedProperties from '@/components/home/FeaturedProperties'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import ServicesOverview from '@/components/home/ServicesOverview'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProperties />
      <ServicesOverview />
      <WhyChooseUs />      
    </main>
  )
}
