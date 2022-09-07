import { Routes, Route, Navigate } from 'react-router-dom'

import ItemListContainer from 'components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from 'components/ItemDetailContainer/ItemDetailContainer'
import ItemsManagerContainer from 'components/ItemsManagerContainer/ItemsManagerContainer'
import ItemForm from 'components/ItemForm/ItemForm'


const AppRouter = () => {
   

    return (
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            
            <Route>
                <Route path='products/' element={<ItemsManagerContainer />} />
                <Route path='products/create' element={<ItemForm />} />
                <Route path='products/:productId/edit' element={<ItemForm />} />
            </Route>

            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )
}

export default AppRouter