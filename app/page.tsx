import Navbar from '@/app/components/navbar/page'
import Hero from '@/app/components/hero/page'
import Features from '@/app/components/features/page'
import Testimonials from '@/app/components/testimonials/page'
import Faq from '@/app/components/faqs/page'
import Plans from '@/app/components/plans/page'
import Cta from '@/app/components/cta/page'
import Footer from '@/app/components/footer/page'

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    <Testimonials />
    <Faq />
    <Plans />
    <Cta />
    <Footer />
    </>
  );
}
