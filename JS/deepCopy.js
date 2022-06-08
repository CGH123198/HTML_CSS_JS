//얕은 복사의 경우, user.name에 대해서는 완전히 새로운 데이터
//but, 한 단계 더 들어간 user.urls의 프로퍼티들은 user2.urls가 기존 user.urls를 그대로 참조.
//깊은 복사 필요 (user.urls도 각각 직접 user2.urls에 복사)
//++참조형 데이터는 다시 그 내부의 프로퍼티들을 복사해야 한다.
let user = {
    name: 'Jaenam',
    urls: {
        portfolio: 'http://github.com/abc',
        blog: 'http://blog.com',
        facebook: 'http://facebook.com/abc'
    }
};

function copyObject(target){
    let result = {};

    if(typeof target === 'object' && target !== null){
        for(prop in target){   //target의 property가 기본형 data일때까지 복사(깊은 복사)
            result[prop] = copyObject(target[prop]);
        }
    }
    else
        result = target;
    return result;        
};

let user2 = copyObject(user);
console.log(user2);
user.urls.blog = 'abc';
console.log(user.urls.blog); //원본을 바꿔도
console.log(user2.urls.blog);   //사본이 바뀌지 않는다.