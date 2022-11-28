import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import userData from './celebrities.json';
import UserList from './UserList';

function Search_Celeb() {   
    const [data_filter, setData_filter] = useState(userData)
    const [searchval, setSearchval] = useState('')

    return (
        <>
            <div className='serach_field'>
                <form className='search_form'>
                    <AiOutlineSearch className='search_icon' />
                    <input className='form_input'
                        placeholder='Search user'
                        type="text"
                        value={searchval}
                        autoFocus
                        onChange={(event) => {setSearchval(event.target.value)
                            const updatedList = userData.filter(data => {
                                return data.first.toLowerCase().includes(event.target.value.toLowerCase()) ||
                                 data.last.toLowerCase().includes(event.target.value.toLowerCase())
                            })
                            setData_filter(updatedList)     
                            console.log(data_filter)}}
                    />
                </form>
            </div>
            <UserList data_filter={data_filter} setData_filter={setData_filter}/>
        </>
    )
}

export default Search_Celeb