import React, {Fragment} from 'react'
import { useRouter } from 'next/router'

export function Login() {
    const router = useRouter()
    return (
        <>
            <a className='purple-button mr-20'
                onClick={()=>
                    router.push('/login')}
            >Login</a>
        </>

    )
}
