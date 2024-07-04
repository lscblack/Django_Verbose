import { useState } from "preact/hooks"
import NavBar from "./MainParts/NavBar"
import MainBody from "./MainParts/MainBody"
import Footer from "./MainParts/Footer"

export function App() {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <div className="w-full h-screen bg-gray-50 text-primary">
        {/** Nav bar */}
        <NavBar/>
        {/** Body */}
        <MainBody/>
        {/** Footer */}
        <Footer/>
      </div>
    </>
  )
}
