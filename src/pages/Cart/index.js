import React from 'react';
import { Container, ProductTable,Total } from './styles';
import { MdRemoveCircleOutline,MdAddCircleOutline,MdDelete } from 'react-icons/md'

export default function Cart() {
    return (

    <Container>

        <ProductTable>
            <thead>
            <tr>
                <th />
                <th>Produtos</th>
                <th>Quantidade</th>
                <th>Sub total</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <td> <img src="https://images.lojanike.com.br/500x500/produto/tenis-nike-revolution-5-masculino-BQ3204-400-1.jpg" alt=""/> </td>
                <td>
                <strong>Tenis</strong>
                    <span>R$1920</span>
                </td>
                <td>
                    <div>
                    <button type='button'>
                    <MdRemoveCircleOutline size={20} color="#f5f5f5"/>
                    </button>
                    <input type="number" readOnly value={1 }/>
                    <button type='button'>
                    <MdAddCircleOutline size={20} color="#f5f5f5"/>
                    </button>
                    </div>
                    </td>
                    <td>
                        <strong>R$10000</strong>
                    </td>
                    <td> 
                    <button type='button'>
                    <MdDelete size={20} color="#f5f5f5"/>
                    </button>
                        
                    </td>

            </tr>
            </tbody>

        </ProductTable>
        <footer>
        <button type="button"> Finalizar Pedidos </button>
        <Total>
            <span>
                TOTAL
            </span>
            <strong>
                R$ 18,90
            </strong>
        </Total>

        </footer>
    </Container>


    ) 
    
}