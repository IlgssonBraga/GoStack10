export function signInRequest(email, password) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, password },
    };
}

export function signInSuccess(token, nome) {
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { token, nome },
    };
}

export function signFailure() {
    return {
        type: '@auth/SIGN_FAILURE',
    };
}

export function signOut() {
    return {
        type: '@auth/SIGN_OUT',
    };
}
