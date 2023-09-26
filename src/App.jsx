import { Banner } from "./Components/Banner"
import { Cards } from "./Components/Cards"
import { DonationDetails } from "./Components/DonationDetails"
import { Navbar } from "./Components/Navbar"
import { DonationPage } from "./Components/DonationPage"
import { Statistics } from "./Components/Statistics"

function App() {


  return (
    <>
      <Navbar />
      {/* <Banner />
      <Cards /> */}
      {/* <DonationDetails /> */}
      {/* <DonationPage /> */}
      <div className="w-1/2 h-1/2">
        <Statistics />
      </div>


    </>
  )
}

export default App
