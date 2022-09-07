import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from './index'
import { createAdaptedProductFromFirestore } from '../../adapters/productAdapter'

export const getProduct = (typeId) => {
    const collectionRef = !typeId
        ? collection(db, 'product')
        : query(collection(db, 'products'), where('type', '==', typeId))

    return getDocs(collectionRef).then(response => {
        const productsAdapted = response.docs.map(doc => {
            return createAdaptedProductFromFirestore(doc)
        })
        return productsAdapted
    }).catch(error => {
        return error
    })
}