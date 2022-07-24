import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {
        setTimeout(() => {

        setIsPending(true)

        fetch(url)
            .then(res => {
            
                if(!res.ok){
                    throw Error('Could Not Fetch Blog Posts')
                }
            return res.json()
            }).then(data => {
                setData(data)
                setIsPending(false)
            
            }).catch(err => {
                setError(err.message)
                setIsPending(false)
            })

        }, 1000)
        
    }, [url])

    return { data, isPending, error }
}
export default useFetch;