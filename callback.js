'use strict';

//JavaScript is synchronous.
//Execute the code block by order after hoisting.
//hoisting: var, function declaration are go to top.
console.log('1');
setTimeout(function() { //hoisting
    console.log('2');
}, 1000);

console.log('3');

//Synchronous callback
function printImmediately(print){ //hoisting
    print();
}

printImmediately(()=>console.log('hello'));
//Asynchronous callback
function printWithDelay(print, timeout) { //hoisting
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);

//callback hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=> {
            if(
                (id === 'holy' && password === 'moly') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            }else{
                onError(new Error('not foound'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(()=> {
            if(user === 'holy') {
                onSuccess({name: 'holy', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user=>{ //onSuccess(id:ellie)
        userStorage.getRoles(
            user, //=id:ellie
            userWithRole => { //=this.id
                alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);