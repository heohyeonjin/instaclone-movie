import client from "../client";
export default
{
Mutation: { // 데이터를 수정할 수 있는 특별한 유형의 쿼리
    createMovie: (_, { title,year,genre }) =>
        client.movie.create({ //데이터베이스와 연동하기
          data:{
          title,
          year,
          genre,
        }
      }),
    deleteMovie: (_, { id }) => client.movie.delete({where:{id}}),
    updateMovie: (_,{ id, year}) =>
                      client.movie.update({ where: { id }, data: { year } }),
    //where에서 업데이트하고 싶은 영화 찾음, data에 year값을 줌 --> 인자인 year가 영화의 새로운 year값이 될 것임.
    },
};
