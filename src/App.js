import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Header from "./components/Header";
import FeedbackItems from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Card from "./components/shared/Card";
import Post from "./components/Post";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
//   const [feedback, setFeedback] = useState(FeedbackData);

//   const addFeedback = (newFeedback) => {
//     newFeedback.id = uuidv4();
//     // console.log(newFeedback);
//     setFeedback([newFeedback, ...feedback]);
//   }

//   const deleteFeedback = (id) => {
//     // console.log('App', id);

//     if(window.confirm('Are you sure want to delete?')) {
//         setFeedback(feedback.filter((item) => item.id !== id))
//     }
//   }

  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <div className="container">
            <Routes>
                <Route path="/" element={
                    <>
                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedbackList />
                    </>
                }>                 
                </Route>
                <Route path="/about" exact element={ <AboutPage/> }></Route>

                {/* <Route path="/post/:id/:name" element={ <Post/> }></Route> */}
                {/* <Route path="/post/*" element={ <Post/> }></Route> */}
            </Routes>

            {/* <Card>
                <NavLink to='/' activeClassName='active' >Home</NavLink>
                <NavLink to='/about' activeClassName='active' >About</NavLink>
            </Card> */}

            <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
