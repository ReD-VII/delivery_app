import { useEffect, useState } from "react"
import { redirect, useNavigate } from 'react-router-dom';


export const useRedirect = ({ red }) => {
    const [data, setdata] = useState(red)

    const navigate = useNavigate()

    useEffect(() => {
        const redirect = navigate(`${data}`)

    }, [red])

    return {redirect}


}

