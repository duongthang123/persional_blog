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
      </div>
    </>
  )
}

export default App
