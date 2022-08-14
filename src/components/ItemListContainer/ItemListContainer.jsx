
import { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList.jsx' 
import { getProductsByCategory, getProducts } from '../../asyncMock.js'
import './ItemListContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    
    return (
        <div onClick={() => console.log('click en itemlistcontainer')}>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
            {}
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
