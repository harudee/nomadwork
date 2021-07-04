import { useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postDelete } from "../store";

const Detail = ({ match, props }) => {
  const id = match.params.id;
  const dispacher = useDispatch();
  const { posts } = useSelector((store) => store);
  const post = posts.filter((post) => post.id == id);

  const [postDel, setPostDel] = useState(post);

  console.log(1, postDel); //id 1번만

  const deleteOne = (e) => {
    console.log("delOne 실행됨..?"); //ㅇㅇ 실행됨
    console.log("id값은??" + postDel[0].id);

    const newPosts = posts.filter((post) => post.id !== postDel[0].id);

    setPostDel(newPosts);

    console.log(newPosts); // array 2개됨

    //상태를 바꿔야함 => 응 실패^^.... 쉬부레
    dispacher(postDelete(postDel));

    alert("dd");
  };

  return (
    <div>
      <h1>글상세보기</h1>
      <hr />
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header>{post[0].id}</Card.Header>
        <Card.Body>
          <h4 class="card-title">{post[0].title}</h4>
          <div>{post[0].content}</div>

          <Link
            to={`/`}
            type="button"
            class="btn btn-danger"
            onClick={deleteOne}
          >
            삭제
          </Link>
          <Link to={`/post/${post[0].id}/update`} class="btn btn-info">
            수정
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Detail;
