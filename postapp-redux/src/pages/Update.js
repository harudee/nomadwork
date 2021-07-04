import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postUpdate } from "../store";

const Update = (props) => {
  const { posts } = useSelector((store) => store);
  const dispacher = useDispatch();

  console.log(2, posts);

  const [postDto, setPostDto] = useState();

  //문제 1. 수정하면
  //글이 한개 더 추가됨.. ^^ if문하면 setPostDto를 어떻게 하면될까...?
  const updateValue = (e) => {
    setPostDto({
      ...postDto,
      [e.target.name]: e.target.value,
    });
  };

  console.log(postDto);

  const updateSubmit = (e) => {
    e.preventDefault();
    dispacher(postUpdate(postDto));
    props.history.push("/");
  };

  return (
    <Container>
      <div>
        <h1>글수정하기</h1>
        <hr />
        <br />
        <br />

        <Form>
          <div class="form-group">
            <label for="id">Id:</label>
            <input
              type="text"
              class="form-control"
              name="id"
              onChange={updateValue}
            ></input>

            <label for="title">Title: </label>
            <input
              type="text"
              name="title"
              class="form-control"
              onChange={updateValue}
            />
            <br />
            <label for="content">Content: </label>
            <textarea
              class="form-control"
              rows="5"
              name="content"
              onChange={updateValue}
            ></textarea>
            <br />

            <button type="button" class="btn btn-info" onClick={updateSubmit}>
              수정완료
            </button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Update;
