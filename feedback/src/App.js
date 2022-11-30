import React, { useState } from "react";
import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";
import FeedbackData from "./components/data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import "./index.css";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="App">
        <FeedbackForm />
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
