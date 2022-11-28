import React from 'react'
import { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import Container from './Container'

function UserList({ data_filter, setData_filter }) {
  const [click, setClick] = useState(false)
  const [data_id, setData_id] = useState()
  const [dropData, setDropData] = useState({
    gender: '',
    country: '',
    description: ''
  })

  const [open, setOpen] = useState({
    id: null
  })  

  const data = id => {
    const filterData = data_filter.filter(mydata => mydata.id === id);
    setData_id(filterData)
    console.log(filterData)
    setDropData({
      gender: filterData[0].gender,
      country: filterData[0].country,
      description: filterData[0].description
    })
  }


  const [byr, setByr] = useState();
  const calc_yr = (value) => {
    let today = new Date(value);
    let month_diff = Date.now() - today.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);
    setByr(age)
  }

  return (
    <>
      {
        data_filter.map((filteredData) => {
          return (
            <>
              <div key={filteredData.id} className='celeb_list'>
                <div className='celeb_container'>
                  <img className='celeb_images' src={filteredData.picture} />
                  <span className='celeb_name'>
                    <span>  {filteredData.first} </span>
                    <span>{filteredData.last}</span>
                  </span>
                  <span onClick={() => { setClick(open.id === filteredData.id ? !click : true); setOpen({ id: filteredData.id }); data(filteredData.id); calc_yr(filteredData.dob) }}>
                    {click && open.id === filteredData.id ? <AiOutlineUp className='click_info' /> : <AiOutlineDown className='click_info' />}
                  </span>
                  <span>
                    {click && open.id === filteredData.id && <Container data_filter={data_filter} filteredData={filteredData} setData_filter={setData_filter} data_id = {data_id} byr = {byr} setByr = {setByr} dropData={dropData}/>}
                   </span>
                </div>
              </div>
            </>
            )
         })
      }
    </>
  )
}


export default UserList;