# sushi-concept

## 목표 
- js로 SPA 구현(router)
- HTML CSS 능숙해지도록 연습(more interactively)

## 필요 개념
- SPA
- history API (pushState)
    - history.pushState(state, title, url): 페이지 이동없이 주소를 변경해준다.
    - state: 브라우저 이동 시 넘겨줄 데이터.(popstate에서 이 state를 받아 원하는 처리 가능)
    - title: 변경할 브라우저 제목(아직까지 대부분의 브라우저가 미지원)
    - url: 변경할 주소.
- window.onpopstate: 뒤로가기 혹은 앞으로가기를 클릭 시 발생하는 이벤트. locationHandler로 조작해줄 예정.

## 구현 과정 중 생긴 문제
- js로 DOM을 조작하여 tag들을 생성해주고 이것을 url에 따라 load시켜 주려했으나 자꾸 listing Directory로 넘어감.
    -> 이를 해결하고자 js로 돔을 조작하는 대신 html파일로 바꾸었음. 처음엔 정상적으로 load되나 새로 고침 시, 다시 listing directory로 넘어가거나 400 error가 생김.
    -> 구글링 해 본 결과, index.html이 최상위 폴더에 있지 않아서 생긴 문제. 새로고침 시 브라우저는 root 경로에 내가 만든 index.html을 찾지 못해서 생긴 오류.
- `<a><img /></a>`부분에서 `<a>` 클릭 이벤트에 바인딩한 `route()`에서 window.pushstate의 url부분이 `event.target`(event가 발생한 부분으로 고정)으로 되어 있어 img클릭 시 link 되지 않음. -> `event.currentTarget`으로 바꿔서 해결.

## 느낀 점.
- event.target과 event.currentTarget의 차이로 인한 버블링 관련 문제, index.html을 루트 디렉토리에 넣지 않아서 생기는 문제 등 기본적인 것들을 많이 놓치고 있는 느낌이 들었고, 그로 인해 구현상의 문제가 아닌 다른 부분에서 오류로 시간이 오래 걸렸다. 좀 더 많은 토이 프로젝트들로 기본기를 탄탄히 해야겠다.
