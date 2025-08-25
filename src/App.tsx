import './App.scss'
import { About } from './components/about/About'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Products } from './components/products/Products'

function App() {

  return (
    <>
      <Header/>
      <About/>
      <Products/>
      <Footer/>
    </>
  )
}

export default App
