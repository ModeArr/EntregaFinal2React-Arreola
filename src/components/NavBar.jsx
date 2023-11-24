import CartWidget from './CartWidget'
import LogoSVG from '../assets/Logo-SVG.svg'
import { NavLink, Link } from 'react-router-dom'
import { getCategoriesUnique } from './helpers/GetProducts'
import { useEffect, useState } from 'react'

const NavBar = () => {
  const [cats, setCat] = useState([])

  useEffect(() => {
    getCategoriesUnique().then((cat) => setCat(cat))
  }, []) 
  return (
    <div className='shadow-md w-full relative top-0 left'>
      <div className='flex bg-white py-4 px-7 items-center justify-between'>
          <div className='w-20'>
            <h1>
                <Link to={"/"} ><img src={LogoSVG} alt="Logo Master Gym Ciudad Victoria svg"/></Link>
            </h1>
          </div>
          <div className=''>
            <ul className='flex items-center menu menu-horizontal'>
              <Link to={"/"}><li className='sm:text-xl sm:mr-8 text-lg mr-5'><a href="#" className='text-gray-800 hover:text-gray-400 duration-500'>Productos</a></li></Link>
              <li className='dropdown sm:text-xl sm:mr-8 text-lg mr-5 text-gray-800 cursor-pointer'>
                <details className=''>
                  <summary className=' hover:text-gray-400 duration-500'>Categorias</summary>
                  <ul className='menu dropdown-content z-[1]'>
                  {
                    cats.map((cat) => {
                      return (
                        <NavLink key={cat} to={`/categoria/${cat}`} ><li className='capitalize text-2xl cursor-pointer hover:text-gray-400 duration-500'> {cat} </li></NavLink>
                      )
                    })
                  }
                </ul>
                </details>
              </li>
{/*               <Link to={"/about"} ><li className='sm:text-xl sm:mr-8 text-lg mr-5 text-gray-800 hover:text-gray-400 duration-500'>Acerca</li></Link>
 */}            </ul>
          </div>
          <div>
            <Link to={"/cart"}> <CartWidget /> </Link> 
          </div>
      </div>
    </div>
  )
}

export default NavBar