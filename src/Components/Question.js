import React, { useEffect, useRef, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const Question = ({ title, info }) => {
    const [accordion, setAccordion] = useState(false);
    const infoRef = useRef(null);
    const showAccordion = () => {
        setAccordion(true);
        infoRef.current.style.setProperty(
            "height",
            infoRef.current.firstElementChild.clientHeight + "px"
        );
    };
    const hideAccordion = () => {
        setAccordion(false);
        infoRef.current.style.removeProperty("height");
    };
    return (
        <div className="question mb-4 p-2 rounded">
            <header className="title d-flex justify-content-between align-items-center">
                <h3 className="fs-5 m-0">{title}</h3>
                <button
                    onClick={accordion ? hideAccordion : showAccordion}
                    className="btn d-flex justify-content-center align-items-center"
                >
                    {accordion ? (
                        <AiOutlineMinus className="icon" />
                    ) : (
                        <AiOutlinePlus className="icon" />
                    )}
                </button>
            </header>
            <div
                className={accordion ? "content show-info" : "content"}
                ref={infoRef}
            >
                <p className="m-0">{info}</p>
            </div>
        </div>
    );
};

export default Question;
