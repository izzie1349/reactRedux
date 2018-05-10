// State arg is not app state, only the State
// this reducer is responsible for
export default function(state = null, action) { //state cant be undefined null
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state
}
