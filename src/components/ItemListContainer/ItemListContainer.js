
import { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList.js'
import { getProducts } from '../../asyncMock.js'
import { useAsync } from '../../hooks/useAsync'
import './ItemListContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    const getProductsFromFirestore = () => getProducts(categoryId)

    const { data, error, isLoading } = useAsync(getProductsFromFirestore, [categoryId])

    if (isLoading) {
        return <h1>Cargando productos...</h1>
    }

    if (error) {
        return <h1>Hubo un error</h1>
    }

    if (data.length === 0) {
        return categoryId ? <h1>No hay productos en nuestra categoria {categoryId}</h1> : <h1>No hay productos disponibles</h1>
    }

    return (
        <>
            <div onClick={() => console.log('click en itemlistcontainer')}>
                <h1>{`${greeting} ${categoryId || ''}`}</h1>
                {}
                <ItemList products={products} />
            </div>
        </>
    )
}

export default ItemListContainer
