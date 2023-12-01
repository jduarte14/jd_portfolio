import Image from 'next/image'
import styles from './styles/page.module.css'
import Header from './components/header';
import HomeContent from './components/homeContent';
import Overlay from './components/overlay';
import Overview from './components/overview';
import Timeline from './components/timeline';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <HomeContent />
        <Overlay />
        <Overview />
        <Timeline />
        <Testimonials />
        <Contact/>
      </main>
    </>

  )
}
