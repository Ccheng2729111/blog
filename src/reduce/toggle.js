let initState = { collapsed:false }

export default function toogleState(state=initState,action){
        switch (action.type){
            case 'TOOGLE_FN':
                return Object.assign({},state,{
                    collapsed:!state.collapsed
                })
            default:
                return state
        }
}