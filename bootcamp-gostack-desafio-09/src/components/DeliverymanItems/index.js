import React from 'react';
import PropTypes from 'prop-types';
import Actions from './Actions';

export default function DeliverymanItems({ deliveryman }) {
    return (
        <tbody>
            <tr>
                <th>{deliveryman.id}</th>
                <th>
                    <img
                        src={
                            deliveryman.avatar_id === null
                                ? 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                : deliveryman.avatar.url
                        }
                        alt={deliveryman.name}
                    />
                </th>
                <th>{deliveryman.name}</th>
                <th>{deliveryman.email}</th>

                <th>
                    <Actions deliveryman={deliveryman} />
                </th>
            </tr>
        </tbody>
    );
}

DeliverymanItems.propTypes = {
    deliveryman: PropTypes.object.isRequired,
};
