const products = [
    {
        category: 'Motor',
        brand: 'Motores Czerweny',
        name: 'Motor Monofasico 1 Hp 56 Mc4Lrc',
        price: 44000,
        thumbnail:
            'https://arcencohogar.vtexassets.com/arquivos/ids/273122-800-800?v=637651574194930000&width=800&height=800&aspect=true',
        stock: 2,
        id: '1',
    },
    {
        category: 'Motor',
        brand: 'Motores Czerweny',
        name: 'Motor Monofasico Hormigonera 0.6 Hp 56Mc4Rh',
        price: 29125,
        thumbnail:
            'https://arcencohogar.vtexassets.com/arquivos/ids/273123-800-800?v=637651574199470000&width=800&height=800&aspect=true',
        stock: 5,
        id: '2',
    },
    {
        category: 'Motor',
        brand: 'Motores Czerweny',
        name: 'Bomba Sumergible Agua Limpia Plas 500W',
        price: 18965,
        thumbnail:
            'https://arcencohogar.vtexassets.com/arquivos/ids/274035-800-800?v=637651579611370000&width=800&height=800&aspect=true',
        stock: 3,
        id: '3',
    },
    {
        category: 'Motor',
        brand: 'Motores Czerweny',
        name: 'Bomba Sumergible Agua Limpia Plas 650W',
        price: 20775,
        thumbnail:
            'https://arcencohogar.vtexassets.com/arquivos/ids/274035-800-800?v=637651579611370000&width=800&height=800&aspect=true',
        stock: 6,
        id: '4',
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === category))
        }, 500)
    })
}

