import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Story from "@/components/Story"
import Request from "@/components/Requst"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Testimonials/>
      <Story/>
      <Request/>
      {/* <Faq/> */}
      <Footer/>
    </main>
  )
}
