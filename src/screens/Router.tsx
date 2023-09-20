import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header"
import Home from "./Home"
import About from "./About"

const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router