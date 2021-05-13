// mutation, queries, typeDef별로 전부 가져오고 싶음
import { makeExecutableSchema, 
         mergeResolvers,
         mergeTypeDefs, 
         loadFilesSync } 
         from "graphql-tools";
//파일 찾기
const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`); //파일 이름이 무엇이든지 간에 모든 폴더에 있는 파일을 찾아서 .typeDefs.js로 끝나는 파일 찾음
const loadedResolvers = loadFilesSync(
    `${__dirname}/**/*.{queries,mutations}.js`); // **: 모든 폴더 * : 파일
//파일  merge
const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadedResolvers);

const schema = makeExecutableSchema({ typeDefs,resolvers }); //typeDefs와 resolvers를 하나의 스키마로 정의, typedef와 resolver들을 토대로 스키마를 만듬


export default schema;
