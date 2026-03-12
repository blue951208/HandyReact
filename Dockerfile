# 1단계: 리액트 빌드
FROM node:18 AS frontend-build
WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# 2단계: 스프링 부트 빌드
FROM gradle:8-jdk17 AS backend-build
WORKDIR /app
COPY . .
# 위에서 빌드한 리액트 파일을 스프링 정적 폴더로 복사
COPY --from=frontend-build /frontend/build /app/src/main/resources/static
# 실행 권한 부여
RUN chmod +x ./gradlew

RUN ./gradlew bootWar -x test -x npmBuild -x copyBuild --no-daemon

# 3단계: 최종 실행 이미지
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=backend-build /app/build/libs/*.war app.war
EXPOSE 8080
# Render의 PORT 환경 변수를 사용하도록 설정
ENTRYPOINT ["java", "-Xmx512m", "-Dserver.port=${PORT:8080}", "-Dspring.profiles.active=prod", "-jar", "app.war"]