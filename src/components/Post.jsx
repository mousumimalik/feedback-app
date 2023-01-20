import React from "react";
// import { useParams } from "react-router-dom";
import { Navigate, useNavigate, Routes, Route } from "react-router-dom";

function Post() {
  const status = 200;

  const navigate = useNavigate();

  const onClick = () => {
    console.log("Hello");
    navigate("/about");
  };

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div>
      <h1>Post</h1>
      <button onClick={ onClick }>Click</button>
      <Routes>
        <Route path="/show" element={ <h1>Hello Post!</h1> } />
      </Routes>
    </div>
  );

  //   const params = useParams();
  //   return <div>
  //     <h1>Post ID: { params.id }</h1>
  //     <p>Post Name: { params.name }</p>
  //   </div>;
}

export default Post;
