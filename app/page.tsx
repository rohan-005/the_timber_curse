import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import LinksSection from '@/components/LinksSection'
import Footer from '@/components/Footer'
import InteractiveTimeline from '@/components/InteractiveTimeline'
import CursedItems from '@/components/CursedItems'
import UnderConstruction from '@/components/UnderConstruction'
export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* <AnimatedBackground /> */}
      {/* <FloatingGhosts /> */}
      
      <HeroSection />

{/*       <UnderConstruction/> */}
      
      <div className="relative z-1">
        <AboutSection />
        <InteractiveTimeline />
        <CursedItems />
        <LinksSection />
        <Footer />
      </div>
    </main>
  )
}
