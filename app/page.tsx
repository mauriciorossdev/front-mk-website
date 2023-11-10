import SectionDescription from '@/components/sections/section-description'
import SectionFeatures from '@/components/sections/section-features'
import SectionFooter from '@/components/sections/section-footer'
import SectionTitle from '@/components/sections/section-title'
import Image from 'next/image'

export default function Home() {

  const features = [
    {
      title: "Feature 1",
      image: "/public/perros-gatos-m.jpg.webp"
    },
    {
      title: "Feature 2",
      image: "/public/perros-gatos-m.jpg.webp"
    },
    {
      title: "Feature 3",
      image: "/public/perros-gatos-m.jpg.webp"
    }
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SectionTitle title="Section Title" image="/images/section-title.png" />
      <SectionDescription description="Section Description" />
      <SectionFeatures features={features} />
      <SectionFooter links={[{ title: "Link 1", url: "#" }, { title: "Link 2", url: "#" }]} button={{ label: "Button", url: "#" }} />
    </main>
  )
}
