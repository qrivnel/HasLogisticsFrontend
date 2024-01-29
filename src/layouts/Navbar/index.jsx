import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import HasLogisticsLogo from '../../assets/HasLogisticsLogo.png'

//Menus
import DropdownMenu from '../../components/DropdownMenu'

export default function index() {
    const [showMenu, setShowMenu] = useState('')

    const whichMenu = (showMenu) => {
        switch (showMenu) {
            case 'institutional':
                return <DropdownMenu setShowMenu={setShowMenu} menuName={showMenu} style=''>
                    Hakkımızda--
                    Galeri
                </DropdownMenu>;

            case 'transportation':
                return <DropdownMenu setShowMenu={setShowMenu} menuName={showMenu} style=''>
                    Ankara içi--
                    Yurtdışı--
                    Yurtiçi
                </DropdownMenu>;

            case 'logistics':
                return <DropdownMenu setShowMenu={setShowMenu} menuName={showMenu} style=''>
                    İlaç--
                    Kontrat--
                    İhracat--
                    Depolama
                </DropdownMenu>;

            default:
                return <></>;
        }
    }
    return (
        <div className='fixed flex top-0 w-screen h-16 bg-white border-black border justify-around '>
            <NavLink className='flex w-64' to='/'>
                <img src={HasLogisticsLogo} />
            </NavLink>

            <div className='flex w-[700px] text-xl justify-evenly items-center'>
                <NavLink to='/' className='flex flex-row h-14 items-center group'>
                    <label className='group-hover:bg-gray-300 transition-colors p-2 rounded-full'>
                        Anasayfa
                    </label>
                </NavLink>

                <div>
                    <label className='hover:bg-gray-300 transition-colors p-2 rounded-full h-14 flex flex-col justify-center'
                        onMouseEnter={() => setShowMenu('institutional')}
                        onMouseLeave={() => setShowMenu('')}
                    >
                        Kurumsal
                    </label>
                    {
                        showMenu === 'institutional' && whichMenu(showMenu)
                    }
                </div>

                <div>
                    <label className='hover:bg-gray-300 transition-colors p-2 rounded-full h-14 flex flex-col justify-center'
                        onMouseEnter={() => setShowMenu('transportation')}
                        onMouseLeave={() => setShowMenu('')}
                    >
                        Taşımacılık
                    </label>
                    {
                        showMenu === 'transportation' && whichMenu(showMenu)
                    }
                </div>

                <div>
                    <label className='hover:bg-gray-300 transition-colors p-2 rounded-full h-14 flex flex-col justify-center'
                        onMouseEnter={() => setShowMenu('logistics')}
                        onMouseLeave={() => setShowMenu('')}
                    >
                        Lojistik
                    </label>
                    {
                        showMenu === 'logistics' && whichMenu(showMenu)
                    }
                </div>

                <NavLink to='/communication' className='flex flex-row h-14 items-center group' >
                    <label className='group-hover:bg-gray-300 transition-colors p-2 rounded-full'>
                        İletişim
                    </label>
                </NavLink>

                <NavLink to='/order' className='flex flex-row h-14 group bg-black p-3 rounded-xl justify-center items-center'>
                    <label className='text-xl text-white'>
                        Sipariş ver
                    </label>
                </NavLink>
            </div>
        </div>
    )
}

