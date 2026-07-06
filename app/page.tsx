import { Benefits } from '@/components/Benefits'
import { Catalog } from '@/components/Catalog'
import { Customization } from '@/components/Customization'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { Gallery } from '@/components/Gallery'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
/*import { Newsletter } from '@/components/Newsletter'*/
import { Testimonials } from '@/components/Testimonials'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function Page() {
  return (
    <main className="relative bg-white">
      <Header />
      <Hero />
      <section className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 py-4">
  <div className="max-w-7xl mx-auto px-4 text-center text-white">
    <h2 className="text-xl md:text-2xl font-extrabold">
      🎁 DESCUENTO DEL EXCLUSIVO
    </h2>

    <p className="mt-2 text-sm md:text-base">
      Seguinos en Instagram{" "}
      <a
        href="https://instagram.com/loqueresdrip"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold underline hover:text-gray-200"
      >
        @loqueresdrip
      </a>{" "}
      y mandanos la captura por WhatsApp para obtener tu descuento.
    </p>
  </div>
</section>
      <Catalog />
      <Customization />
      <Gallery />
      {/*<Testimonials />*/}
      <FAQ />
      <Benefits />
      {/*<Newsletter />*/}
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
