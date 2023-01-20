import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "This Feedback item 1", rating: 10 },
    { id: 2, text: "This Feedback item 2", rating: 2 },
    { id: 3, text: "This Feedback item 3", rating: 5 },
    { id: 4, text: "This Feedback item 4", rating: 3 },
    { id: 5, text: "This Feedback item 5", rating: 7 },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  // ADD A FEEDBACK
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // DELETE A FEEDBACK
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // UPDATE FEEDBACK ITEM
  const updateFeedback = (id, updateItem) => {
    console.log(id, updateItem);

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updateItem } : item))
    );
  }

  // UPDATE EXISTING FEEDBACK
  const editFeedback = (item) => {
    setFeedbackEdit({
        item,
        edit: true
    });
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }} >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
