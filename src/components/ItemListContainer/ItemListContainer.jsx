
import { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList.jsx' 
import { getProductByCategory, getProducts } from '../../asyncMock.js'
import './ItemListContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductByCategory : getProducts

        asyncFunction(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])
    
    return (
        <>
        
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </>
    )
    
}

export default ItemListContainer
