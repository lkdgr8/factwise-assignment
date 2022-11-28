import React, { useState } from 'react'
import { TiDeleteOutline } from 'react-icons/ti'
import { MdOutlineDone } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Dialogbox from './Dialogbox'

function Container({ data_id, byr, setByr, dropData, setData_filter, data_filter, filteredData }) {
  const [edit, setEdit] = useState(false)
  const [gender, setGender]= useState(dropData.gender)
  const [country, setCountry] = useState(dropData.country)
  const [desc, setDesc] = useState(dropData.description)
  const [popup, setPopup] = useState(false)

  const remove = id => {
    setData_filter(data_filter.filter(elem => {
     return elem.id !== id
    }))
  }

    const updateData = (data) => {
      data[0].gender = gender
      data[0].country = country
      data[0].description = desc
      data[0].dob = byr 
      console.log(data)
    }
    return (
        <>
            {
                [...data_id].map(all => {
                    return (
                        <>
                            <div className='disp_flex' key={all.id}>
                                <div>
                                    Age
                                    <a>{edit ? <input className='edit_area edit_area1' value={byr} onChange={(event) => setByr(event.target.value)} /> : byr}</a>
                                </div>
                                <div>
                                     Gender
                                    <a>{edit ? <select value={gender} onChange={(event) => setGender(event.target.value)}>
                                      <option value="male">male</option>
                                      <option value="female">female</option>
                                      <option value="rather not to say">rather not to say</option>
                                      <option value="other">other</option>
                                      </select> : all.gender}</a>
                                </div>
                                <div>
                                    Country
                                    <a>{edit ? <input className='edit_area' value={country} onChange={(event) => setCountry(event.target.value)} /> : all.country}</a>
                                </div>
                            </div>
                            <div className='desc'>
                              <p>{edit ? <textarea className="description" value={desc} onChange={(event) => setDesc(event.target.value)} /> : all.description}</p>
                            </div>
                            <div className='icons'>
                              <span>{edit ? <TiDeleteOutline title='cencel' className='c_ptr' onClick={() => setEdit(false)} /> : <RiDeleteBin6Line title='delete' className='red' onClick={()=> setPopup(true)} />}</span>
                              <span title='edit'>{edit ? <MdOutlineDone onClick={() => {updateData([...data_id]); setEdit(false)}} className='round_bd' /> : <AiFillEdit className='blue' onClick={() => setEdit(true)} />}</span>
                            </div>
                            {popup && <Dialogbox filteredData={filteredData} remove={remove} setPopup={setPopup}/>}
                        </>
                    )
                })
            }
        </>
    )
}

export default Container