//server를 만들고 작동시키는 일만 함
require("dotenv").config();
import {ApolloServer} from "apollo-server"; 
import schema from "./schema";

// graphQL schema
const client = new PrismaClient();


//Create Apolloserver
const server = new ApolloServer({
schema
});

const PORT = process.env.PORT;

//서버 실행
server.listen(PORT).then(() => console.log(`Server is running on http://localhost:${PORT}/`));
//우리의 앱은 어떤 PORT인지와 상관ㅇ 없이 이 PORT를 듣고 있음
