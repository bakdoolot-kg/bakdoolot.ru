import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* 1 Education block */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* GeekTech */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Fullstack developer</h3>

                <span className="qualification__subtitle">
                  Geektech courses
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Jyldyz academy */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qulification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Frontend developer</h3>

                <span className="qualification__subtitle">
                  Jyldyz academy courses
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
            </div>
          </div>

          {/* 2 Job block */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* ICTLab */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend developer</h3>

                <span className="qualification__subtitle">
                  ICTLab - Kyrgyzstan
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Choyro */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qulification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Junior Frontend developer, UX/UI designer
                </h3>

                <span className="qualification__subtitle">Choyro</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>

              <div>
                <span className="qulification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
