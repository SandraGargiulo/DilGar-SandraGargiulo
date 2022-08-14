import React from 'react'
import { getProductsByCategory } from '../../asyncMock'
import ItemListConteiner from '../ItemListContainer/ItemListContainer'

const grupos = () => {
    return (
        <div>
            <h1>Grupos electrogenos</h1>
            <ItemListConteiner greeting={'Grupo'}/>
        </div>
    )
}

export default grupos