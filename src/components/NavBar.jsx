import CartWidget from './Cart/CartWidget'
import LogoSVG from '../assets/Logo-SVG.svg'
import { NavLink, Link } from 'react-router-dom'
import { getCategory } from './helpers/GetCategory'
import { useEffect, useState } from 'react'

const NavBar = () => {
  const [cats, setCat] = useState([])

  useEffect(() => {
    getCategory().then((cat) => setCat(cat))
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
              <Link to={"/"}><li className='sm:text-xl sm:mr-8 text-lg mr-5'><div href="#" className='text-gray-800 hover:text-gray-400 duration-500'>Productos</div></li></Link>
              <Link to={"/adminpanel"} ><li className='sm:text-xl sm:mr-8 text-lg mr-5 text-gray-800 hover:text-gray-400 duration-500'>Admin</li></Link>
              <li className='dropdown sm:text-xl sm:mr-8 text-lg mr-5 text-gray-800 cursor-pointer'>
                <details className=''>
                  <summary className='hover:text-gray-400 duration-500'>Categorias</summary>
                  <ul className='menu dropdown-content z-[1]'>
                  {
                    cats.map((cat) => {
                      return (
                        <NavLink key={cat.id} to={`/categoria/${cat.categoria}`} ><li className='p-2 capitalize text-3xl cursor-pointer hover:text-gray-400 duration-500'> {cat.categoria} </li></NavLink>
                      )
                    })
                  }
                </ul>
                </details>
              </li>
               
           </ul>
          </div>
          <div className='flex justify-between items-center gap-5'>
            <div className="avatar">
              <div className="rounded-full cursor-pointer text-gray-800 hover:text-gray-400 duration-500">
              <ion-icon name="person-circle-outline" size="large"></ion-icon>
              </div>
            </div>
            <div>
              <Link to={"/cart"}> <CartWidget /> </Link> 
            </div>
          </div>
      </div>
    </div>
  )
}

export default NavBar