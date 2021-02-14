import React, {useEffect} from 'react'

export default function Fields(props) {
    const {fieldsMatch} = props;

    useEffect(() => {
        console.log(fieldsMatch)
    }, [fieldsMatch])
    return (
        <div className='w-5-6 text-left m-5'>
            <ul className='justify-between'>
                {fieldsMatch.length == 0 ?
                    '' :
                    fieldsMatch.map(el=>{
                        return (
                            <button className='m-3' variant="contained" color='primary'>{`${el['SHORT NAME']}`}</button>
                )})}
            </ul>
        </div>
    )
}
