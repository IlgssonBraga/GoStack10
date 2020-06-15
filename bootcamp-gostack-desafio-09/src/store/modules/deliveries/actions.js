export function RegisterDeliveriesRequest(
    recipient_id,
    deliveryman_id,
    product
) {
    return {
        type: '@deliveries/REGISTER_DELIVERIES_REQUEST',
        payload: { recipient_id, deliveryman_id, product },
    };
}
