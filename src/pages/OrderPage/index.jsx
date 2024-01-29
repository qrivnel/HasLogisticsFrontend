import React, { useEffect, useState } from 'react'
import Select from 'react-select'

export default function index() {
    const [stuffs, setStuffs] = useState([])
    const [message, setMessage] = useState('')

    const [client, setClient] = useState({
        companyName: null,
        billTitle: null,
        billAddress: null,
        telNo: null,
        eMail: null
    })

    const [order, setOrder] = useState({
        staffid: null,
        truckid: null,
        trailerid: null,
        stuffid: null,
        clientid: null,
        distance: null,
        loadDate: null,
        deliveryDate: null,
        transportCost: null,
        transportRevenue: null
    })

    const [staff, setStaff] = useState({
        name: null,
        surname: null,
        sex: null,
        age: null,
        salary: null,
        enterdate: null,
        exitdate: null,
        department: null,
        suitability: null
    })

    useEffect(() => {
        //Get Truck
        fetch('https://localhost:7057/api/trucks/suitabletrucks')
            .then(res => res.json())
            .then(data => {
                setOrder(prevOrder => ({ ...prevOrder, truckid: data[0].id, staffid: data[0].staffId }))
            })
    }, [])

    useEffect(() => {
        //Get Trailer
        fetch('https://localhost:7057/api/trailers/suitabletrailers')
            .then(res => res.json())
            .then(data => setOrder(prevOrder => ({ ...prevOrder, trailerid: data[0].id })))
    }, [])




    useEffect(() => {
        fetch('https://localhost:7057/api/stuffs')
            .then(res => res.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    stuffs.push({ value: data[i].name, label: data[i].name })
                }
            })
    }, [])

    const handleDistance = (e) => {
        if (/^[0-9]*$/.test(e.target.value)) {
            e.target.value.at(0) === '0' ? e.target.value = '' : setOrder({ ...order, distance: parseInt(e.target.value), transportCost: parseInt(parseInt(e.target.value) / 100 * 35 * 38/** Motorin fiyatı */ * 1.5), transportRevenue: parseInt(parseInt(e.target.value) / 100 * 35 * 38 * 1.5 * 2.2) })
            e.target.value === '' ? setOrder({ ...order, transportCost: 0, transportRevenue: 0 }) : null
        }
        else {
            setOrder({ ...order, transportCost: 0, transportRevenue: 0 })
            e.target.value = '';
        }


    }

    const findStuffForOrder = (value) => {
        fetch('https://localhost:7057/api/stuffs', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(value.value)
        }).then(res => res.json())
            .then(data => {
                setOrder({ ...order, stuffid: data })
            })

        if (client.companyName != null && client.billTitle != null && client.billAddress != null && client.eMail != null && client.telNo != null) {
            //Create Client
            fetch('https://localhost:7057/api/clients', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(client)
            })
                .then(res => res.json())
                .then(data => {
                    setOrder(prevOrder => ({ ...prevOrder, clientid: data }))
                })
        }
    }


    const handleOrder = () => {
        if (order.deliveryDate != null && order.distance != null && order.loadDate != null && order.stuffid != null && order.trailerid != null && order.transportCost != null && order.transportRevenue != null && order.staffid != null && order.truckid) {
            //Create Order
            fetch('https://localhost:7057/api/orders', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    setMessage('Sipariş oluşturuldu.')
                    setTimeout(() => {
                        navigation.navigate('/')
                    }, 3000);
                })
        }
        else {
            console.log(order);
        }
    }
    return (
        <div className='w-screen h-screen bg-gray-200'>
            <div className='w-[1400px] h-[600px] bg-white rounded-md border-2 border-black ml-5 mt-5 flex flex-row justify-around'>
                <div className='flex flex-col px-5 h-[450px] items-start justify-around'>
                    <label className='text-3xl'>Müşteri Bilgileri</label>
                    <input className='pl-2 w-[300px] border border-black p-1' placeholder='Şirket adı' onChange={(e) => setClient({ ...client, companyName: e.target.value })} />
                    <input className='pl-2 w-[300px] border border-black p-1' placeholder='Fatura başlığı' onChange={(e) => setClient({ ...client, billTitle: e.target.value })} />
                    <input className='pl-2 w-[300px] border border-black p-1' placeholder='Fatura adresi' onChange={(e) => setClient({ ...client, billAddress: e.target.value })} />
                    <input className='pl-2 w-[300px] border border-black p-1' placeholder='Telefon numarası' onChange={(e) => setClient({ ...client, telNo: e.target.value })} />
                    <input className='pl-2 w-[300px] border border-black p-1' placeholder='E-posta' onChange={(e) => setClient({ ...client, eMail: e.target.value })} />
                </div>
                <div className='flex flex-col px-5 h-[450px] items-start justify-evenly'>
                    <label className='text-3xl'> Taşıma Bilgileri</label>
                    <Select className='w-[300px]' options={stuffs} placeholder='Ürün seçiniz' onChange={(value) => findStuffForOrder(value)} />
                    <input maxLength={5} className='pl-2 w-[300px] border border-black p-1' placeholder='Taşıma mesafesi' onChange={(e) => { handleDistance(e) }} />
                    <div className='flex flex-col'>
                        <label className='text-2xl mb-3'>Taşıma Tarihi</label>
                        <input type='date' className='pl-2 w-[300px] border border-black p-1' onChange={(e) => setOrder({ ...order, loadDate: e.target.value })} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-2xl mb-3'>Varış Tarihi</label>
                        <input type='date' className='pl-2 w-[300px] border border-black p-1' onChange={(e) => setOrder({ ...order, deliveryDate: e.target.value })} />
                    </div>
                    <button type='submit' className='w-[300px] bg-green-400 p-1 border border-black rounded-lg' onClick={handleOrder}>Sipariş ver</button>
                </div>
                <div className='bg-green-300 h-[300px] w-[400px] flex flex-col items-center justify-evenly self-center'>
                    <div>
                        <label className='text-3xl'>Taşıma Ücreti</label>
                        <label className='text-3xl'> {order.transportCost}TL </label>
                    </div>
                    <label className='text-3xl'> {message} </label>
                </div>
            </div>

        </div>
    )
}
