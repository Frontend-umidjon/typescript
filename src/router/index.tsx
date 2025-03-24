import { Route, Routes } from "react-router-dom"
import Home from "./home/Home"
import Layout from "./layout/Layout"
import AddPhone from "./add-phone/AddPhone"


const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/add-phone" element={<AddPhone />} />
        </Route>
      </Routes>
    </>
  )
}

export default MainRouter