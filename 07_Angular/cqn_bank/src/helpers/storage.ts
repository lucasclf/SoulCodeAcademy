import localStorage from 'node-localstorage'
const LocalStorage = localStorage.LocalStorage
var storage: localStorage.LocalStorage

if (typeof storage === 'undefined' || storage === null){
    storage = new LocalStorage('./scratch')
}

export default storage