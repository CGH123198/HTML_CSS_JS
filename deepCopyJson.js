'user strict';

let user = {
    name: 'Jaenam',
    urls: {
        portfolio: 'http://github.com/abc',
        blog: 'http://blog.com',
        facebook: 'http://facebook.com/abc'
    }
};

let copyObjectViaJSON = target => {
    return JSON.parse(JSON.stringify(target));
};

let obj = {
    a: 1,
    b: {
        c: null,
        d: [1, 2],
        fnuc1: () =>  { console.log(3); }
    },
    func2: () => { console.log(4); }
};

let obj2 = copyObjectViaJSON(obj);

obj2.a =3;
obj2.b.c = 3;
obj2.b.d[1] = 3;

console.log(obj);
console.log(obj2);  //깊은 복사는 가능하나, 메서드 및 __proto__ 등 
                    //JSON으로 변경할 수 없는 것들이 있다.