import React from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <>
      <ProductTable>
        <thead>
          <tr>
            <th>
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x"
                alt="Tenis"
              />
            </td>
            <td>
              <strong>Tenis muito massa</strong>
              <span>R$129, 00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#4f86bd" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#4f86bd" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#4f86bd" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$190, 20</strong>
        </Total>
      </footer>
    </>
  );
}
