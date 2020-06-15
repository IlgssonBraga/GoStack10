import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';

import api from '~/services/api';

export function* RegisterDelivery({ payload }) {
    try {
        const { recipient_id, deliveryman_id, product } = payload;
        yield call(api.post, 'deliverys', {
            recipient_id,
            deliveryman_id,
            product,
        });

        history.push('/deliveries');
    } catch (error) {
        toast.error('Falha no cadastro, verifique os dados!');
    }
}

export default all([
    takeLatest('@deliveries/REGISTER_DELIVERIES_REQUEST', RegisterDelivery),
]);
