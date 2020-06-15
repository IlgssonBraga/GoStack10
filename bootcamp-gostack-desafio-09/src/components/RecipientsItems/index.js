import React from 'react';
import PropTypes from 'prop-types';
import Actions from './Actions';

export default function RecipientsItems({ recipient }) {
    return (
        <tbody>
            <tr>
                <th>{recipient.id}</th>
                <th>{recipient.nome}</th>
                <th>
                    {recipient.rua}, {recipient.numero}. {recipient.cidade} -{' '}
                    {recipient.estado}
                </th>

                <th>
                    <Actions recipient={recipient} />
                </th>
            </tr>
        </tbody>
    );
}

RecipientsItems.propTypes = {
    recipient: PropTypes.object.isRequired,
};
