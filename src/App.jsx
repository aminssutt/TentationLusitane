import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Specialites from './components/Specialites'
import ParallaxDivider from './components/ParallaxDivider'
import Gateaux from './components/Gateaux'
import Avis from './components/Avis'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Specialites />
        <ParallaxDivider 
          image="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1920"
          text="Chaque création est une histoire de passion et de tradition"
        />
        <Gateaux />
        <ParallaxDivider 
          image="https://images.unsplash.com/photo-1486427944544-d2c6128c6bce?w=1920"
          text="Des moments de bonheur à partager en famille"
          dark={false}
        />
        <Avis />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
