import Head from 'next/head'
import Navbars from './Navbar'
import CarouselDiv from './Carousel'
import Navbars from './layout/Navbar'

export default function Header() {
  return (
    <div>
      <Head>
        <title>Blackboard Nepal| Supporting the community</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbars />
      <CarouselDiv />
      

      <style jsx global>{`
      `}</style>

    </div>
  )
}
