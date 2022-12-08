import {createStore} from 'redux'

const reducer=(state={headerValue:"Keep"},action)=>{
if(action.type === "Notes"){
return{headerValue:"Notes"}
}
if(action.type === "Reminder"){
    return{headerValue:"Reminder"}
}
if(action.type === "Edit Labels"){
    return{headerValue:"Edit labels"}
}
if(action.type === "Archive"){
    return{headerValue:"Archive"}
}
if(action.type === "Delete"){
    return{headerValue:"Delete"}
}
return state
}
 const store = createStore(reducer);
 export default store;