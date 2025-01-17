"use client"

import { useEffect } from "react"
import Link from "next/link"



export default function Error({
    error,
    reset
}:
    {error: Error; 
    reset: () => void}) {

    useEffect(() => {
        console.log(error)
    })
    return (

            <div>
                <h2>Ops, algo deu errado na página</h2>
                <Link href="/">
                Voltar para Home 
                </Link>
            </div>

    )
}