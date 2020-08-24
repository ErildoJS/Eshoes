import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
import logo from '../../assets/images/rocketshoes-logo.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        {/** ir pra home */}
        <img src={logo} alt="Ir para o início" />
      </Link>
      <Cart to="/cart">
        {/** vou pra rota cart */}
        <div>
          <strong>Meu carrinho</strong>
          <span> itens</span>
        </div>
        <MdShoppingBasket size={36} color="#e6e6e6" />
      </Cart>
    </Container>
  );
}
