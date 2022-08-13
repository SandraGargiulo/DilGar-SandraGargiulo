import React from 'react'
import { getProductByCategory } from '../../asyncMock'
import ItemListConteiner from '../ItemListContainer/ItemListContainer'

const grupos = () => {
    return (
        <div>
            <h1>Grupos electrogenos</h1>
            <ItemListConteiner greeting={getProductByCategory('Grupo')}/>
        </div>
    )
}

export default grupos