import Contact from './components/contact'
import Experiencens from './components/Experiencens'
import Header from './components/Header'
import Information from './components/Information'
import Introduce from './components/Introduce'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <div className='container mx-auto'>
        <Header />  
        <Information />
        <Introduce />
        <Skills />
        <Experiencens />
        <Contact />
      </div>
    </>
  )
}

export default App
