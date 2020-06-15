import React, { useState } from 'react';
import { MdMoreHoriz, MdModeEdit, MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import history from '~/services/history';
import api from '~/services/api';

import { Container, Badge, ActionList, Options } from './styles';

export default function Actions({ deliveryman }) {
    const [visible, setVisible] = useState(false);

    async function handleDelete(id) {
        await api.delete(`/deliverymans/${id}`);
    }

    function handleToggleVisible() {
        setVisible(!visible);
    }

    return (
        <>
            <Container>
                <Badge onClick={handleToggleVisible}>
                    <MdMoreHoriz color="#666" size={15} />
                </Badge>
                <ActionList visible={visible}>
                    <Options>
                        <button
                            type="button"
                            onClick={() =>
                                history.push(
                                    `/deliverymen/editdeliveryman/${deliveryman.id}`
                                )
                            }
                        >
                            <MdModeEdit color="#4D85EE" size={15} />
                            <span>Editar</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => handleDelete(deliveryman.id)}
                        >
                            <MdDelete color="#DF4141" size={15} />
                            <span>Excluir</span>
                        </button>
                    </Options>
                </ActionList>
            </Container>
        </>
    );
}

Actions.propTypes = {
    deliveryman: PropTypes.object.isRequired,
};
