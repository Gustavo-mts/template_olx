const initialScale = {
    email: '',
}

export default (state = initialScale, action) => {

    if(action.type === 'SET_EMAIL') {
        return{...state, email: action.payload.email };
    }

    return state;
}