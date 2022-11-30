import React from "react";
import { Form } from "reactstrap";

const FeedbackForm = () => {
  return (
    <div className="card">
      <Form>
        <h2>How would you rate our service</h2>
        <div className="input-group">
          <input type="text" placeholder="Write a review" />
          <button type="submit">send</button>
        </div>
      </Form>
    </div>
  );
};

export default FeedbackForm;
