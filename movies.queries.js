import client from "../client";
// a map of functions which return data for the schema
// 클라이언트가 데이터 그래프에 대해 실행할 수 있는 쿼리 정의
export default {
    Query: { //쿼리를 통해 데이터를 가져옴
      movies: () => client.movie.findMany(), // 이것만으로, 데이터베이스로 가서 많은 영화들 검색
      movie: (_,{ id }) => client.movie.findUnique({where:{id}}), //고유한 영화 찾기
    },
};
