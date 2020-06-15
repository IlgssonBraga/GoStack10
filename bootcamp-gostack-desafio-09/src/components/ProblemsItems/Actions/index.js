import React, { useState } from 'react';
import { MdMoreHoriz, MdVisibility, MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import api from '~/services/api';

import {
    Container,
    Badge,
    ActionList,
    Options,
    ViewDelivery,
    ViewDeliveryContainer,
} from './styles';

export default function Actions({ problem }) {
    const [visible, setVisible] = useState(false);
    const [visibleView, setVisibleView] = useState(false);

    async function handleDelete(id) {
        try {
            await api.put(`/deliverys/problem/${id}/cancel-delivery`);
            await api.delete(`/deliverys/deliveries/problems/${id}`);
            toast.success('Delivery cancelada com sucesso!');
        } catch (err) {
            toast.error('Delivery não cancelada!');
        }
    }

    function handleToggleVisible() {
        setVisible(!visible);
    }

    function handleToggleVisibleView() {
        setVisibleView(!visibleView);
    }

    return (
        <>
            <Container>
                <Badge onClick={handleToggleVisible}>
                    <MdMoreHoriz color="#666" size={15} />
                </Badge>
                <ActionList visible={visible}>
                    <Options>
                        <button type="button" onClick={handleToggleVisibleView}>
                            <MdVisibility color="#7D40E7" size={15} />
                            <span>Visualizar</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => handleDelete(problem.id)}
                        >
                            <MdDeleteForever color="#DF4141" size={15} />
                            <span>Cancelar encomenda</span>
                        </button>
                    </Options>
                </ActionList>
            </Container>
            <ViewDelivery visibleView={visibleView}>
                <ViewDeliveryContainer>
                    <strong>
                        <div id="btnclose">
                            <h3>Visualizar problema</h3>
                            <button
                                type="button"
                                onClick={handleToggleVisibleView}
                            >
                                x
                            </button>
                        </div>
                        <p>{problem.description}</p>
                    </strong>
                </ViewDeliveryContainer>
            </ViewDelivery>
        </>
    );
}

Actions.propTypes = {
    problem: PropTypes.object.isRequired,
};
