// hooks
import { Routes, Route ,BrowserRouter} from "react-router-dom"
// routes
import Home from "./Home"
import Humd from "./Humd"
import Lumina from "./Lumina"
import Temp from "./Temp"
function App() {

  return (
    <>
      {/* full page */}
      <div className="scrollbar-hide max-w-md h-fit min-h-screen mx-auto flex flex-col items-center overflow-y-auto overflow-x-hidden bg-stone-50 select-none ">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/temp" element={<Temp/>} />
              <Route path="/humd" element={<Humd />} />
              <Route path="/lumina" element={<Lumina />} />
            </Routes>
          </BrowserRouter>
      </div>
    </>
  )
}

export default App
