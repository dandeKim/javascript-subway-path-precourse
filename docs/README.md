# 🚇 지하철 노선도 경로 조회 미션

## 디렉터리 구조

```sh
javascript-subway-path-precourse
├── README.md
├── index.html
├── images
├── docs
│   └── README.md
└── src
    ├── @shared
    │   ├── constants.js
    │   ├── data.js
    │   └── domUtils.js
    └── components
        ├── SubwayManager.js
	├── SubwayPathManager
	│   ├── SubwayPathManager.js
        │   └── ValidateManager.js
        └── ResultManager
            ├── ResultManager.js
	    ├── DijkstraManager.js
            └── utils
	        ├── Dijkstra.js
       	        ├── template.js
       	        └── validation.js
```

## ✔️ 구현할 기능 목록

### 화면 (view)

- 기본 html 파일 추가
  - radio option의 default 값은 최단거리로 설정
- active 클래스 여부에 따라 보이기/숨기기를 결정

### 기능

- 역, 노선, 구간 데이터 초기 설정
  - 기본 데이터 파일을 만든다.
  - 파일을 불러와 초기 값으로 사용한다.
  - 최단 경로 라이브러리에 기본 데이터를 저장한다.
- 길 찾기 버튼을 누른다.
- 출발역과 도착역, 옵션(최단거리/최소시간)을 확인한다.
- 입력받은 값을 검증한다.
  - 등록된 역을 검색했는지 확인
  - 지하철역 이름이 2글자 이상인지 확인
  - 출발역과 도착역이 같지 않은지 확인
  - 출발역이 도착역보다 이전에 위치해있는지 확인 (index로 확인)
  - 올바르지 않은 역을 검색했을 때 alert 메시지 출력
- 최단 경로 라이브러리를 사용해서 결과를 구한다.
  - 출발역과 도착역이 올바른 노선인지 인지 확인
  - 올바르지 않은 경로이면 alert 메시지 출력
- 결과를 출력한다.
