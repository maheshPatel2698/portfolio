import Head from 'next/head'
// importing components
import Navbar from "../Components/Navbar"
import Hero from '../Components/Hero'
import Tech from "../Components/Tech"
import Services from "../Components/Services"
import Projects from "../Components/Projects"
import Contact from "../Components/Contact"


export default function Home() {
  return (
    <div className="scrollbar scroll-smooth scrollbar-thumb-[#6461B6] scrollbar-thumb-rounded-3xl scrollbar-track-rounded-full h-screen scrollbar-track-[#292929]">
      <Head>
        <title>Mahesh Ravaria</title>
        <meta name="description" content="Hey There! My name is Mahesh Ravaria I am Here tp help you in the development of your website and provide my best services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <section>
        <Navbar />
      </section>

      {/* hero */}
      <section>
        <Hero />
      </section>

      {/* Tech */}
      <section>
        <Tech />
      </section>

      {/*  services*/}
      <section>
        <Services />
      </section>

      {/* Projects */}
      <section>
        <Projects />
      </section>

      {/* contact */}
      <section>
        <Contact />
      </section>
    </div>
  )
}
