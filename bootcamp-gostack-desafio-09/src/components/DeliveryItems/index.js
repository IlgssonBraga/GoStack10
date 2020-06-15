import React from 'react';
import { MdFiberManualRecord } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Status } from './styles';
import Actions from './Actions';

export default function DeliveryItems({ delivery, deliveryView }) {
    return (
        <>
            <tbody>
                <tr>
                    <th>{delivery.id}</th>
                    <th>{delivery.recipient.nome}</th>
                    <th>
                        {delivery.recipient.cidade} -{' '}
                        {delivery.recipient.estado}
                    </th>
                    <th>{delivery.product}</th>
                    <th>
                        <span>
                            <img
                                src={
                                    delivery.deliveryman.avatar_id !== null
                                        ? delivery.deliveryman.avatar.url
                                        : 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }
                                alt={delivery.deliveryman.name}
                            />{' '}
                            {delivery.deliveryman.name}
                        </span>
                    </th>

                    <th>
                        <Status
                            status={
                                delivery.canceled
                                    ? 'cancelada'
                                    : delivery.canceled === false &&
                                      delivery.finished === false &&
                                      delivery.start_date !== null
                                    ? 'retirada'
                                    : delivery.canceled === false &&
                                      delivery.finished === false &&
                                      delivery.start_date === null
                                    ? 'pendente'
                                    : 'entregue'
                            }
                        >
                            <strong>
                                <MdFiberManualRecord size={10} />
                                {delivery.canceled
                                    ? 'CANCELADA'
                                    : delivery.canceled === false &&
                                      delivery.finished === false &&
                                      delivery.start_date !== null
                                    ? 'RETIRADA'
                                    : delivery.canceled === false &&
                                      delivery.finished === false &&
                                      delivery.start_date === null
                                    ? 'PENDENTE'
                                    : 'ENTREGUE'}
                            </strong>
                        </Status>
                    </th>
                    <th>
                        <Actions
                            delivery={delivery}
                            deliveryView={deliveryView}
                        />
                    </th>
                </tr>
            </tbody>
        </>
    );
}

DeliveryItems.propTypes = {
    delivery: PropTypes.object.isRequired,
    deliveryView: PropTypes.bool.isRequired,
};
