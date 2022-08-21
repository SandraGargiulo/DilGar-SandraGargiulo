import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock.js'
import ItemDetail from '../ItemDetail/ItemDetail.js'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if (loading) {
        return <h1>Cargando...</h1>
    }


    return (
        <div className='ItemDetailContainer' >
            <ItemDetail {...product}  />
        </div>
    )
}

export default ItemDetailContainer