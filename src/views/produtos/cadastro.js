import React from "react";
import './cadastro.css'

import ProductService from '../../views/app/ProductService'

const stateInit = {
    name: '',
    sku: '',
    description: '',
    price: 0,
    provider: '',
    success: false,
    errors: [],
}

export default class CadastroProduto extends React.Component {

    state = stateInit

    constructor() {
        super()
        this.service = new ProductService();
    }

    onChange = (event) => {
        const value = event.target.value;
        const nameFields = event.target.name;
        this.setState({ [nameFields]: value })
    }

    clearFields = () => {
        this.setState(stateInit)
    }

    onSubmit = (event) => {
        const product = {
            name: this.state.name,
            sku: this.state.sku,
            description: this.state.description,
            price: this.state.price,
            provider: this.state.provider,
        }

        try {
            this.service.save(product)
            this.setState({ success: true })
        } catch (error) {
            const errors = error.errors
            this.setState({ errors: errors })
        }

    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Cadastro de Produtos
                </div>
                <div className="card-body">

                    {this.state.success &&
                        <div className="alert alert-dismissible alert-success">
                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                            <strong>Oba!</strong> Cadastro com sucesso.
                        </div>
                    }

                    {this.state.errors.length > 0 &&
                        this.state.errors.map(msg => {
                            return (
                                <div className="alert alert-dismissible alert-danger">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    {msg}
                                </div>
                            )
                        })
                    }

                    <div className="row row-custom">
                        <div className="col-md-6">
                            <label>Nome: *</label>
                            <input
                                type="text"
                                name="name"
                                onChange={this.onChange}
                                value={this.state.name}
                                className="form-control">
                            </input>
                        </div>
                        <div className="col-md-6">
                            <div className="col-md-6">
                                <label>SKU: *</label>
                                <input
                                    type="text"
                                    name="sku"
                                    onChange={this.onChange}
                                    value={this.state.sku}
                                    className="form-control">
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className="row row-custom">
                        <div className="col-md-12">
                            <label>Descrição: </label>
                            <textarea
                                name="description"
                                onChange={this.onChange}
                                value={this.state.description}
                                className="form-control" />
                        </div>
                    </div>
                    <div className="row row-custom">
                        <div className="col-md-6">
                            <label>Preço: *</label>
                            <input
                                name="price"
                                onChange={this.onChange}
                                value={this.state.price}
                                type="text"
                                className="form-control"></input>
                        </div>
                        <div className="col-md-6">
                            <div className="col-md-6">
                                <label>Fornecedor: *</label>
                                <input
                                    name="provider"
                                    onChange={this.onChange}
                                    value={this.state.provider}
                                    type="text"
                                    className="form-control">
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className="row row-custom">
                        <div className="col-md-1">
                            <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                        </div>
                        <div className="col-md-1">
                            <button onClick={this.clearFields} className="btn btn-primary">Limpar</button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
