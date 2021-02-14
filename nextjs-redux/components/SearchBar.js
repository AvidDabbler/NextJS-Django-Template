import React, { useState } from 'react'
import axios from 'axios'


export default function SearchBar(props) {
    const {setData, url} = props;
    const [searchContent, setSearchContent] = useState('')


    const onChange = (e) => {
        e.preventDefault()
        setSearchContent(e.target.value)
    }

    const onSubmit = async (e)=>{
        e.preventDefault()
        if(searchContent.length <3 ){
            return
        }
        let fieldsData = await axios.get(url(searchContent))
        
        setData(fieldsData.data)
    } 
    

    return (
        <div className="flex flex-column"
        style={{
            height:'12rem',
        }}>
            <h4 className="text-xl font-bold p-5 text-center">Search for Fields</h4>
            <form 
                className="" 
                onSubmit={e=>onSubmit(e)}>
                <input
                    className='search-bar'
                    onChange={e=>onChange(e)} 
                    onSubmit={(e)=>e.preventDefault()} />
            </form>
        </div>
    )
}
