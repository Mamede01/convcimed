const initialState = {
    token:'',
    name:'',
    email:''
}

export default (state = initialState , action) =>  {

    switch(action.type){
        case 'SET_NAME':
            return { ...state, name:action.payload.nome };
            break;
        case 'SET_TOKEN':
            return{...state, token:action.payload.token }; 
            break;
        case 'SET_EMAIL':
            return{...state, email:action.payload.email };
            break;
        case 'RESET':
            return initialState;
            break;    
    }

    return state
}