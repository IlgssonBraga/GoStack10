import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Content, Menu, Profile } from './styles';
import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';

export default function Header() {
    const profile = useSelector(state => state.auth);
    const dispatch = useDispatch();
    function handleSignOut() {
        dispatch(signOut());
    }
    return (
        <Container>
            <Content>
                <Menu>
                    <Link to="/deliveries">
                        <img src={logo} alt="GoBarber" />
                    </Link>

                    <div>
                        <NavLink
                            activeClassName="active-menu"
                            className="menu"
                            to="/deliveries"
                        >
                            ENCOMENDAS
                        </NavLink>
                        <NavLink
                            activeClassName="active-menu"
                            className="menu"
                            to="/deliverymen"
                        >
                            ENTREGADORES
                        </NavLink>
                        <NavLink
                            activeClassName="active-menu"
                            className="menu"
                            to="/recipients"
                        >
                            DESTINATÁRIOS
                        </NavLink>
                        <NavLink
                            activeClassName="active-menu"
                            className="menu"
                            to="/problems"
                        >
                            PROBLEMAS
                        </NavLink>
                    </div>
                </Menu>

                <Profile>
                    <strong>{profile.nome}</strong>
                    <button type="button" onClick={handleSignOut}>
                        sair do sistema
                    </button>
                </Profile>
            </Content>
        </Container>
    );
}
