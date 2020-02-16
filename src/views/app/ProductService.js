const PRODUCTS = "_PRODUCTS"

export function ErrorValidation(errors) {
    this.errors = errors
}

export default class ProductService {

    validate = (product) => {
        const errors = [];

        if (!product.name) {
            errors.push('O campo nome é obrigatório')
        }

        if (!product.sku) {
            errors.push('O campo sku é obrigatório')
        }

        if (!product.price || product.prie <= 0) {
            errors.push('O campo preço deve ter um valor maior que zero.')
        }

        if (!product.price || product.provider <= 0) {
            errors.push('O campo fornecedor é obrigatório')
        }

        if (errors.length > 0) {
            throw new ErrorValidation(errors)
        }
    }

    save = (product) => {
        this.validate(product);

        let products = localStorage.getItem(PRODUCTS)

        if (!products) {
            products = [];
        } else {
            products = JSON.parse(products);
        }
        products.push(product);
        localStorage.setItem(PRODUCTS, JSON.stringify(products))
    }
}