import React, { useEffect, useState } from 'react'
import ToDoItem from '../../components/ToDoItem'

export default function index() {
    const [orders, setOrders] = useState()

    useEffect(() => {
        fetch('https://localhost:7057/api/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    
    return (
        <div onClick={() => { console.log(orders); }} className='w-screen h-[770px] bg-gray-500 flex flex-col justify-evenly'>
            <div className='flex flex-row items-center justify-around'>
                <div className='w-[250px] h-[500px] border-2 border-black rounded-md flex flex-col items-center bg-white overflow-scroll'>
                    <div className='h-10 border-b border-b-black w-[250px] flex justify-center'>
                        <label className='text-3xl'> Müşteriler </label>
                    </div>
                    <ToDoItem url='https://localhost:7057/api/clients' table='clients' />
                </div>

                <div className='w-[250px] h-[500px] border-2 border-black rounded-md flex flex-col items-center bg-white overflow-scroll'>
                    <div className='h-10 border-b border-b-black w-[250px] flex justify-center'>
                        <label className='text-3xl'> İşçiler </label>
                    </div>
                    <ToDoItem url='https://localhost:7057/api/staffs' table='staffs' />
                </div>

                <div className='w-[250px] h-[500px] border-2 border-black rounded-md flex flex-col items-center bg-white overflow-scroll'>
                    <div className='h-10 border-b border-b-black w-[250px] flex justify-center'>
                        <label className='text-3xl'> Tırlar </label>
                    </div>
                    <ToDoItem url='https://localhost:7057/api/trucks' table='trucks' />
                </div>

                <div className='w-[250px] h-[500px] border-2 border-black rounded-md flex flex-col items-center bg-white overflow-scroll'>
                    <div className='h-10 border-b border-b-black w-[250px] flex justify-center'>
                        <label className='text-3xl'> Dorseler </label>
                    </div>
                    <ToDoItem url='https://localhost:7057/api/trailers' table='trailers' />
                </div>

                <div className='w-[250px] h-[500px] border-2 border-black rounded-md flex flex-col items-center bg-white overflow-scroll'>
                    <div className='h-10 border-b border-b-black w-[250px] flex justify-center'>
                        <label className='text-3xl'> Ürünler </label>
                    </div>
                    <ToDoItem url='https://localhost:7057/api/stuffs' table='stuffs' />
                </div>
            </div>
            <div className='border-2 mx-2 border-black bg-white h-[200px] flex flex-col items-center overflow-scroll'>
                <label className='text-6xl'> Siparişler</label>
                <div className=' flex flex-row w-screen justify-evenly'>
                    <div onClick={() => { console.log(orders); }} className='w-[200px] h-[150px] flex flex-col'>
                        Nakliye Mesafesi
                        {
                            orders == undefined ? null :
                                orders.map((v, i) => {
                                    return <label key={i} className='text-xl'> {v.distance}KM </label>
                                })
                        }
                    </div>
                    <div className='h-[200px] flex flex-col'>
                        Yükleme tarihi
                        {
                            orders == undefined ? null :
                                orders.map((v, i) => {
                                    return <label key={i} className='text-xl'> {v.loadDate.slice(0, 10)} </label>
                                })
                        }
                    </div>
                    <div className='h-[200px] flex flex-col'>
                        Varış tarihi
                        {
                            orders == undefined ? null :
                                orders.map((v, i) => {
                                    return <label key={i} className='text-xl'> {v.deliveryDate.slice(0, 10)} </label>
                                })
                        }
                    </div>
                    <div className='h-[200px] flex flex-col'>
                        Taşıma ücreti
                        {
                            orders == undefined ? null :
                                orders.map((v, i) => {
                                    return <label key={i} className='text-xl'> {v.transportCost + v.transportRevenue}TL </label>
                                })
                        }
                    </div>
                    <div className='h-[200px] flex flex-col'>
                        Taşıma maliyeti
                        {
                            orders == undefined ? null :
                                orders.map((v, i) => {
                                    return <label className='text-xl'> {v.transportCost} </label>
                                })
                        }
                    </div>
                    <div className='h-[200px] flex flex-col'>
                        Net kazanç
                        {
                            orders == undefined ? null :
                                orders.map((v, i) => {
                                    return <label className='text-xl'> {v.transportRevenue}TL </label>
                                })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
