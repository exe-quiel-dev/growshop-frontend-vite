import { Link } from "react-router-dom"
import { CATEGORIAS } from "../constants"

const CategoryMenu = () => {
  return (
    <>
      <nav className="bg-slate-300 w-full mb-10 shadow border-b-2 py-1">
        <ul className="flex items-center justify-center flex-wrap">
          {CATEGORIAS.map((categoria, i) => (
            <li key={i} className="uppercase py-1 px-3 hover:bg-slate-500 transition-all hover:text-white cursor-pointer hover:shadow-md border-r-2 border-slate-400 "><Link to={`/tienda/${categoria}`}>{categoria}</Link></li>
            ))}
        </ul>
      </nav>
    </>
  )
}

export default CategoryMenu