import React from 'react'
import { getProductByCategory } from '../../asyncMock'
import ItemListConteiner from '../ItemListContainer/ItemListContainer'

const motores = () => {
    return (
        <div>
            <h1>Motores</h1>
            <ItemListConteiner greeting={getProductByCategory('Motor')}/>
        </div>
    )
}

export default motores