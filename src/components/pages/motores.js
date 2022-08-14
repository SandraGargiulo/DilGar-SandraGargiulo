import React from 'react'
import { getProductsByCategory } from '../../asyncMock'
import ItemListConteiner from '../ItemListContainer/ItemListContainer'

const motores = () => {
    return (
        <div>
            <h1>Motores</h1>
            <ItemListConteiner greeting={'Motor'} />
        </div>
    )
}

export default motores