import { useState } from "react";
import foodLike from "./models/foodLikes";

function App() {
  const [foods, setFoods] = useState(foodLike);

  // 과제2 버튼을 누르면 6.banana 추가하기
  // 전개연산자를 쓰면 편하대
  const add = () => {
    let newFoods = [
      ...foods,
      {
        id: 6,
        name: "Banana",
        image:
          "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
      },
    ];
    setFoods(newFoods);
  };

  //과제 3 한건 삭제하기
  //왜 const로 만들었슬가 == 컴파일시점에서 한번만 읽으라구
  const deleteOne = () => {
    //fetch 요청 => ok
    //한번 해봐 db 연결해서 crud
    let newFoods = foods.filter((food) => food.id !== 2);
    setFoods(newFoods);
  };

  //숙제 ! update!
  const updateOne = () => {
    //id:1번 name:을 Tomato로 바꾸기

    // let updateFoods = {...foods[0], name: "Tomato" };
    // console.log(updateFoods); => 나오긴 하는데 상태를 업데이트 해야함

    let updateFoods = foods.map((food) => {
      if (food.id === 1) {
        return { ...foods[0], name: "Tomato" };
      } else {
        return food;
      }
    });
    setFoods(updateFoods);

    // 1 Tomato가 하나 추가됨
    // setFoods([
    //   ...foods,
    //   {...foods[0], name: "Tomato"}
    // ])
  };

  return (
    <div>
      {/* 1데이터 출력 */}
      <h1>{foods[0].id}</h1>
      {/* map으로 출력 */}
      <h3>{JSON.stringify(foods)}</h3>
      <button onClick={add}>한 건 추가</button> <br />
      <button onClick={deleteOne}>한 건 삭제</button> <br />
      <button onClick={updateOne}>한 건 수정</button> <br />
      <hr />
      {/* 과제1  map 추가하기 */}
      <ul>
        {foods.map((f) => (
          // key={f.id}: 공책0628확인!
          <li key={f.id}>
            {f.id}: {f.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
