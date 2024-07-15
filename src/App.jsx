import Hero from './sections/Hero.jsx'
import CustomerReviews from './sections/CustomerReviews.jsx'
import SuperQuality from './sections/SuperQuality.jsx'
import Services from './sections/Services.jsx'
import SpecialOffer from './sections/SpecialOffer.jsx'
import Footer from './sections/Footer.jsx'
import Subscribe from './sections/Subscribe.jsx'
import PopularProducts from './sections/PopularProducts.jsx'
import Navbar from './components/NavBar.jsx'

export default function App() {
  return (
 <main className="relative ">
   <Navbar/>
   <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
   </section>
   <section className="padding">
      <PopularProducts/>
   </section>
   <section className="padding">
      <SuperQuality/>
   </section>
   <section className="padding">
      <Services/>
   </section>
   <section className="padding-x py-10">
      <SpecialOffer/>
   </section>
   <section className="padding-x bg-pale-blue sm:py-32 py-16 w-full">
      <CustomerReviews/>
   </section>
   <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
   </section>
   <section className="padding-x padding-t bg-black pb-8">
      <Footer/>
   </section>
 </main>
  )
}