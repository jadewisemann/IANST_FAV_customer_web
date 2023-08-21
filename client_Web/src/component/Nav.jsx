import { useNavigate } from "react-router-dom"

export default function Nav() {
  const navigate = useNavigate()

  return (
    <>
    <div className="w-[80%] mt-4 grid grid-cols-3">
          <button onClick={e => {
            e.preventDefault(),
            navigate("/lumina")
          }} className="nav-button"> 조도 </button>
          <button onClick={e => {
            e.preventDefault(),
            navigate("/humd")
          }} className="nav-button"> 습도 </button>
          <button onClick={e => {
            e.preventDefault(),
            navigate("/temp")
          }} className="nav-button"> 온도 </button>
        </div>
    </>
  )
}
