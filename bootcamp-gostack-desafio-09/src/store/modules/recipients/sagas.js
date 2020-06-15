import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

export function* RegisterRecipients({ payload }) {
    try {
        const { nome, rua, numero, complemento, estado, cidade, cep } = payload;
        yield call(api.post, 'recipients', {
            nome,
            rua,
            numero,
            complemento,
            estado,
            cidade,
            cep,
        });

        history.push('/recipients');
    } catch (error) {
        toast.error('Falha no cadastro, verifique os dados!');
    }
}

export default all([
    takeLatest('@recipients/REGISTER_RECIPIENTS_REQUEST', RegisterRecipients),
]);
