const noteReducer=(state, action)=>{
    switch(action.type){
        case 'INIT_NOTES':
            return action.notes
        case 'ADD_NOTE':{
            console.log('adding note...')
            return [
                ...state,
                action.note
                ]
            }
        case 'REMOVE_NOTE':{
            return state.filter((note)=>note.id !== action.id)
        }
        default:
            return state
    }
}

export default noteReducer