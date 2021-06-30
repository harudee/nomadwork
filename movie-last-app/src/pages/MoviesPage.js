import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  //is 붙으면 테스트 해봐야함
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // axios: pending이 끝나면 callback되는 함수
    let movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log("movie : " + movies); //
    setMovies(movies.data.data.movies);
    setIsLoading(false);
  };

  // useEffect(() => {
  //   //setTimeout: 첫번째 인자로 함수, 두번째 인자로 밀리초가 들어감
  //   setTimeout(() => {
  //     setIsLoading(!false);
  //   }, 2000);
  // }, []);

  useEffect(() => {
    //얘를 비동기로 만들면 안돼
    getMovies();
    //1
    //2
    //3 동작 여러개 있을 수 있으니까
  }, []);

  return (
    <GridBox>
      {/* isLoading 나오는지 확인test
      <h3>{isLoading ? "true" : "false"}</h3>
       상태 바꾸기 되는지 확인test */}
      {/* <button onClick={() => { setIsLoading(!isLoading);}}>
        로딩값 변경
      </button> */}
      {isLoading
        ? "Loading..."
        : movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
    </GridBox>
  );
};

export default MoviesPage;
