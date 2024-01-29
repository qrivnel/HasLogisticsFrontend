import React, { useState } from 'react'
import HasLogisticsLogo from '../../assets/HasLogisticsLogo.png'

export default function index() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const   HandleLogin = () => {
        
    }

    return (
        <div id='mainDiv' className='flex flex-col w-screen h-screen items-center bg-gray-400'>
            <div id='logoDiv' className='flex m-5 border border-black'>
                <img src={HasLogisticsLogo} />
            </div>
            <div id='inputDiv' className='flex flex-col w-96 h-32 mt-16 items-center justify-center'>
                <div className='flex flex-col h-[100px] justify-evenly'>
                    <input onChange={(e) => setUsername(e.target.value)} placeholder='Kullanıcı adı' type="text" className='w-[200px] h-8 rounded-xl p-2 border border-black' />
                    <input onChange={(e) => setPassword(e.target.value)} placeholder='Şifre' type='password' className='w-[200px] h-8 self-center rounded-xl p-2 border border-black' />
                </div>
                <div id='buttonDiv' className='flex flex-row w-[200px] h-8 justify-between'>
                    <button type='button' className='bg-green-300 p-1 rounded-md w-[80px] border border-black' onClick={() => {
                        fetch('https://localhost:7057/api/orders')
                            .then(res => res.json())
                            .then(data => console.log(data))
                    }}>
                        Giriş yap
                    </button>
                    <button type='button' className='bg-gray-100 p-1 rounded-md w-[80px] border border-black'>
                        Kayıt ol
                    </button>
                </div>
            </div>
        </div>
    )
}
