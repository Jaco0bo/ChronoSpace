import { useState } from 'react'
import WatchList from './pages/WatchList'
import Header from './components/Header'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

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
