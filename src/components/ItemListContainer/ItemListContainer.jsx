
import { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList.jsx'
import { Link } from 'react-router-dom'
import { getProductsByCategory, getProducts } from '../../asyncMock.js'
import './ItemListContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        if (categoryId) {
            getProductsByCategory(categoryId).then(response => {
                setProducts(response)
            })
        } else {
            getProducts().then(response => {
                setProducts(response)
            })
        }
    }, [categoryId])

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
