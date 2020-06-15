import React from 'react';
import PropTypes from 'prop-types';
import Actions from './Actions';

export default function ProblemsItems({ problem }) {
    return (
        <>
            <tbody>
                <tr>
                    <th>{problem.id}</th>
                    <th>{problem.description}</th>

                    <th>
                        <Actions problem={problem} />
                    </th>
                </tr>
            </tbody>
        </>
    );
}

ProblemsItems.propTypes = {
    problem: PropTypes.object.isRequired,
};
