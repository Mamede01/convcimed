const initialState = {
    day:[],
    eventsDay:[],
    mes:[],
    local:[],
    fotos:[],
    pesquisa:[],
    resposta:[],
    noticias:[],
    sorteioDay:[]
}

export default (state = initialState , action) =>  {

    switch(action.type){
        case 'SET_DAY':
            return { ...state, day:action.payload.agenda};            
            break;
        case 'SET_EVENTSDAY':
            return{...state, eventsDay:action.payload.eventos };             
            break;
        case 'SET_MES':
            return{...state, mes:action.payload.mes }; 
            break;
        case 'SET_LOCAL':
            return{...state, local:action.payload.local }; 
            break;
        case 'SET_FOTOS':
            return{...state, fotos:action.payload.fotos }; 
            break;
        case 'SET_PESQUISA':
            return{...state, pesquisa:action.payload.pesquisa }; 
            break;
        case 'SET_RESPOSTA':
            return{...state, resposta:action.payload.pergunta }; 
            break
        case 'SET_NOTICIAS':
            return{...state, noticias:action.payload.noticias }; 
            break
        case 'SET_SORTEIODAY':
            return{...state, sorteioDay:action.payload.sorteio };             
            break;
        case 'RESET':
            return initialState;
            break;            
    }

      
    return state
}