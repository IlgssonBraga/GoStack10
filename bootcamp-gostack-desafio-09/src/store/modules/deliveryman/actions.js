export function RegisterDeliverymanRequest(name, avatar_id, email) {
    return {
        type: '@deliveryman/REGISTER_DELIVERYMAN_REQUEST',
        payload: { name, avatar_id, email },
    };
}
