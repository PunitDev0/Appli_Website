import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Highlight from "./Components/Highlights"
import Model from "./Components/Model"

function App() {

  return (
   <>
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlight/>
      <Model/>
    </main>
   </>
  )
}

export default App
