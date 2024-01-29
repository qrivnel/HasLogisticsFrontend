import React, { useEffect, useState } from 'react'

export default function index({ url, table }) {
    const [data, setData] = useState()


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(js => setData(js))
    })

    const updateItem = (id, text) => {
        fetch(url + '/update', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ id, text })
        })
    }

    const deleteItem = (id) => {
        fetch(url + '/delete', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: id
        })
    }
    return (
        <div className='flex flex-col'>
            {
                data == undefined ? <label> Yükleniyor...</label> :
                    data.map((v, i) => {
                        return <div key={i} className='flex flex-row border border-black w-[220px] m-2 p-2 justify-between items-center'>
                            {
                                table === 'staffs' ? <textarea id={i+'staffs'} className='h-16 text-center' defaultValue={v.name} /> : null
                            }
                            {
                                table === 'clients' ? <textarea id={i+'clients'} className='h-16 text-center' defaultValue={v.companyName} /> : null
                            }
                            {
                                table === 'trucks' ? <textarea id={i+'trucks'} className='h-16 text-center' defaultValue={v.plate} /> : null
                            }
                            {
                                table === 'trailers' ? <textarea id={i+'trailers'} className='h-16 text-center' defaultValue={v.plate} /> : null
                            }
                            {
                                table === 'stuffs' ? <textarea id={i+'stuffs'} className='h-16 text-center' defaultValue={v.name} /> : null
                            }
                            <div className='flex flex-col'>
                                <button onClick={() => {
                                    updateItem(v.id, document.getElementById(i+table).value)
                                }}>Güncelle</button>
                                <button onClick={() => {
                                    deleteItem(v.id)
                                }}>Sil</button>
                            </div>
                        </div>
                    })
            }
        </div>
    )
}
