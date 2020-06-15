import React, { useState } from 'react';
import {
    MdMoreHoriz,
    MdVisibility,
    MdModeEdit,
    MdDeleteForever,
} from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import history from '~/services/history';
import api from '~/services/api';

import {
    Container,
    Badge,
    ActionList,
    Options,
    ViewDelivery,
    ViewDeliveryContainer,
} from './styles';

export default function Actions({ delivery }) {
    const [visible, setVisible] = useState(false);
    const [visibleView, setVisibleView] = useState(false);

    async function handleDelete(id) {
        await api.delete(`/deliverys/${id}`);
    }

    function handleToggleVisible() {
        setVisible(!visible);
    }

    function handleToggleVisibleView() {
        setVisibleView(!visibleView);
    }

    function parseDate(date) {
        return date
            ? format(parseISO(date), 'dd/MM/yyyy')
            : '- - / - - / - - - -';
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
                            onClick={() =>
                                history.push(
                                    `/deliveries/editdelivery/${delivery.id}`
                                )
                            }
                        >
                            <MdModeEdit color="#4D85EE" size={15} />
                            <span>Editar</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => handleDelete(delivery.id)}
                        >
                            <MdDeleteForever color="#DF4141" size={15} />
                            <span>Excluir</span>
                        </button>
                    </Options>
                </ActionList>
            </Container>
            <ViewDelivery visibleView={visibleView}>
                <ViewDeliveryContainer>
                    <div id="infodelivery">
                        <span>Informações da encomenda</span>
                        <button type="button" onClick={handleToggleVisibleView}>
                            x
                        </button>
                    </div>
                    <div id="detailsdelivery">
                        <span>{delivery.product}</span>
                        <span>
                            {delivery.recipient.rua},{' '}
                            {delivery.recipient.numero}
                        </span>
                        <span>
                            {delivery.recipient.cidade} -{' '}
                            {delivery.recipient.estado}
                        </span>
                        <span>{delivery.recipient.cep}</span>
                    </div>
                    <hr />
                    <div id="dates">
                        <strong>Datas</strong>
                        <p>
                            <strong>Retirada:</strong>
                            {delivery.start_date === '' ||
                            delivery.start_date === null
                                ? parseDate(delivery.start_date)
                                : parseDate(delivery.start_date)}
                        </p>

                        <p>
                            <strong>Entrega:</strong>
                            {delivery.end_date === '' ||
                            delivery.end_date === null
                                ? parseDate(delivery.end_date)
                                : parseDate(delivery.end_date)}
                        </p>
                    </div>
                    <hr />
                    <div id="signature">
                        <strong>Assinatura do destinatário:</strong>
                        <img
                            src={
                                delivery.signature
                                    ? delivery.signature.url
                                    : 'https://2.bp.blogspot.com/-Xgp1IRDDFTQ/VQYJj_RSczI/AAAAAAAALmc/chzfE9ez4ZM/s1600/CR%2Bassinatura.JPG'
                            }
                            alt="Ilgsson Braga"
                        />
                    </div>
                </ViewDeliveryContainer>
            </ViewDelivery>
        </>
    );
}

Actions.propTypes = {
    delivery: PropTypes.object.isRequired,
};
