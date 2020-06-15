import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

export function* RegisterDeliveryman({ payload }) {
    try {
        const { name, avatar_id, email } = payload;
        yield call(api.post, 'deliverymans', {
            name,
            avatar_id,
            email,
        });

        history.push('/deliverymen');
    } catch (error) {
        toast.error('Falha no cadastro, verifique os dados!');
    }
}

export default all([
    takeLatest(
        '@deliveryman/REGISTER_DELIVERYMAN_REQUEST',
        RegisterDeliveryman
    ),
]);
