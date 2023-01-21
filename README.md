## 프론트에서 서버에 데이터 요청하는 방법 (React로 fetch, axios 사용하기)

<br>

### CORS (Cross-Origin-Resource-Shargin)

- Client: locallhost:3000 (react 개발 서버)
- Server: localhost:4000
- 위의 두 서버는 오리진이 다르다. 오리진이란, host와 port를 포함한 데이터의 출처를 의미한다. 즉, 두 서버는 데이터의 출처가 다르기 때문에 다른 오리진이라고 할 수 있다.
- 서버에서 CORS 정책을 해결해야 한다. (cors 라이브러리 이용, npm i cors)

<br>

### 서버에 데이터를 보내는 방법은 2가지가 있다.

<br>

### 1. fetch (기본 제공)

### 2. axios (외부 라이브러리)
