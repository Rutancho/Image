import { PrismaClient } from '@prisma/client';
//PrismaClient는 Prisma에서 제공하는 클라이언트 라이브러리의 주 클래스입니다. 이 클래스의 인스턴스를 생성함으로써, 데이터베이스에 대한 연결을 관리하고, 데이터베이스에 대한 쿼리를 실행할 수 있습니다.

export const db = new PrismaClient();

//new PrismaClient()는 PrismaClient 클래스의 인스턴스를 생성하는 생성자 호출입니다. 이 인스턴스를 통해 실제 데이터베이스 작업이 이루어집니다. 생성자는 내부적으로 데이터베이스와의 연결 설정을 초기화하며, 필요한 설정을 로드합니다.



// db.snippet.create({
//     data:{
//         title: 'Ttile',
//         code: 'const abc = ( => {}'
//     }
// })