import React from "react";
import ProductService from '../../views/app/ProductService'

export default class ConsultaProdutos extends React.Component {

    state = {
        products: [],
    }

    constructor() {
        super()
        this.service = new ProductService();
    }

    componentDidMount() {
        const products = this.service.getProducts();
        this.setState({ products })
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Consulta de Produtos
                </div>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Sku</th>
                                <th>Preço</th>
                                <th>Fornecedor</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.products.map((products, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{products.name}</th>
                                            <th>{products.sku}</th>
                                            <th>{products.price}</th>
                                            <th>{products.provider}</th>
                                            <th></th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}