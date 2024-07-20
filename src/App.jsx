import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Highlight from "./Components/Highlights"

function App() {

  return (
   <>
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlight/>
    </main>
   </>
  )
}

export default App
