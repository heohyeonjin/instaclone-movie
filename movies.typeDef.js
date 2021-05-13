import { gql } from "apollo-server";

//스키마를 gql 함수 내부에 작성. 스키마 작성에 사용할 언어는 GraphQL의 스키마 정의 언어
//데이터 그래프에 존재하는 개체 정의

export default gql`
    type Movie {
        id : Int
        title: String
        year: Int!
        genre : String
        createdAt : String!
        updatedAt : String!
    }
    type Query {
        movies: [Movie]
        movie(id:Int!): Movie
    }
    type Mutation {
        createMovie(title: String!, year:Int!, genre:String): Movie
        deleteMovie(id: Int!): Movie
        updateMovie(id : Int! year:Int!):Movie
    }
`;
