import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import Fields from './Fields'


export default function Search(props) {
    const {url} = props;
    const [fieldsMatch, setFieldsMatch] = useState([])
    
    
    return (
        <div className="App-search w-2/3 py-5 mx-auto ">
            <SearchBar url={url} setData={setFieldsMatch}  />
            <Fields fieldsMatch={fieldsMatch} />
        </div>
    )
}

