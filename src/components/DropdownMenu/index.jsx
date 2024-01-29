import React from 'react'
import { NavLink } from 'react-router-dom'

export default function index(props) {

  const createPath = (text) => {
    switch(text){
      case 'Hakkımızda':
        return '/about';

      case 'Galeri':
        return '/gallery';

      case 'Depolama':
        return '/storage';

      default:
        return '/';
    }
  }

  return (
    <div className={`absolute bg-white border border-black text-center${props.style}`}
    onMouseEnter={()=>props.setShowMenu(props.menuName)}
    onMouseLeave={()=>props.setShowMenu('')}
    >
      {
        props.children.split('-- ').map((c, i) => {
          return <NavLink key={i} to={createPath(c)} className='hover:bg-gray-400 flex flex-col px-4 py-0.5'>
            {c}
          </NavLink>
        })
      }
    </div>
  )
}
