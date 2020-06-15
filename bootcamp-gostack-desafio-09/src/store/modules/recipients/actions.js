export function RegisterRecipientsRequest(
    nome,
    rua,
    numero,
    complemento,
    estado,
    cidade,
    cep
) {
    return {
        type: '@recipients/REGISTER_RECIPIENTS_REQUEST',
        payload: { nome, rua, numero, complemento, estado, cidade, cep },
    };
}
