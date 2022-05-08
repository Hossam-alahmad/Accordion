import React from "react";
import "../Css/Questions.css";
import data from "./data";
import Question from "./Question";
const Questions = () => {
    return (
        <div className="questions bg-white rounded position-absolute top-50 end-50 p-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1>Questions & answsers about login</h1>
                    </div>
                    <div className="col-md-7">
                        {data.map(question => (
                            <Question key={question.id} {...question} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;
