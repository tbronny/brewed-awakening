import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let productsHtml = "<ul>"

    for (const product of products) {
        productsHtml += `<li id="product--${product.id}">${product.name}</li>`
    }

    productsHtml += "</ul>"

    return productsHtml
}
