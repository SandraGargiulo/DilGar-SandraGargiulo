import { useState, useEffect, useRef } from "react"


const Animation = () => {
    const [background, setBackground] = useState('green')

    const divRef = useRef()
    console.log(divRef)

    useEffect(() => {
        const handleScroll = () => {
            console.log(divRef)
            const div = divRef.current
            const { y } = div.getBoundingClientRect()

            const backgroundColor = y <= 0 ? 'blue' : 'green'

            setBackground(backgroundColor)
        }


        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div>
            <div
                ref={divRef}
                style={{ height: '180vh', background }}
            >
                <h1 style={{ color: 'white' }}>
                    Scrollear para cambiar el color de fondo
                </h1>
            </div>
        </div>
    )
}

export default Animation