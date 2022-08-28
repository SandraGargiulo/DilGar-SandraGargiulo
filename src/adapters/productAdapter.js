export const createAdaptedProductFromFirestore = (doc) => {
    const data = doc.data()

    const productAdapted = {
        id: doc.id,
        category: data.category,
        name: data.name,
        thumbnail: data.thumbnail,
        price: data.price,
        brand: data.brand,
        stock: data.stock,
        description: data.description
    }

    return productAdapted
}