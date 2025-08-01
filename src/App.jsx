import { useEffect } from 'react'
import WatchList from './pages/WatchList'
import Header from './components/Header'
import Contact from './components/Contact'

function App() {
    useEffect(() => {
    document.body.classList.remove('preload')
  }, [])
  
  return (
    <>
      <div className="App">
        <Header />
        <WatchList />
        <Contact />
      </div>
    </>
  )
}

export default App
