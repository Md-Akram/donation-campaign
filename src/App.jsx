import { Banner } from "./Components/Banner"
import { Cards } from "./Components/Cards"
import { DonationDetails } from "./Components/DonationDetails"
import { Navbar } from "./Components/Navbar"
import { DonationPage } from "./Components/DonationPage"
import { Statistics } from "./Components/Statistics"
import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from "./Components/Home"
import ErrorPage from "./Components/ErrorPage"

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/donations' element={<DonationPage />}>
          <Route path=":id" element={<DonationDetails />} />
        </Route>
        <Route path="/statistics" element={<Statistics />} />

        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      {/* <Banner />
      <Cards /> */}
      {/* <DonationDetails /> */}
      {/* <DonationPage /> */}
      {/* <div className="w-1/2 h-1/2">
        <Statistics />
      </div> */}


    </>
  )
}

export default App
