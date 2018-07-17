export default function CatsReducer(state =[], action) {
    switch(action.type) {
        case 'ADD_CATS':
            let name = 'TOM'
            return [...state, name]
        default:
            return state;
    }
    
}