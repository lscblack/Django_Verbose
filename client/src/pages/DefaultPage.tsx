import NavBar from "../MainParts/NavBar"
import MainBody from "../MainParts/MainBody"
import Footer from "../MainParts/Footer"

export default function DefaultPage() {

  return (
    <>
      <div className="w-full h-screen bg-gray-50 text-primary overflow-auto relative">
        {/** Nav bar */}
        <div className="w-full sticky top-0 z-10">
          <NavBar />
        </div>
          {/** Body */}
        <div className="h-auto">
            <MainBody />
            <Footer />
        </div>
      </div>
    </>
  )
}
