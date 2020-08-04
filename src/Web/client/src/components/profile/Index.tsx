import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import { Link } from "react-router-dom";

import { IUser } from "../../models/user";
import { IAccount } from "../../models/account";
import { IEducation } from "../../models/education";
import { IExperience } from "../../models/experience";

const Index = () => {
  const [users, setUser] = useState<IUser[]>([]);
  const [accounts, setAccount] = useState<IAccount[]>([]);
  const [educations, setEducation] = useState<IEducation[]>([]);
  const [experiences, setExperience] = useState<IExperience[]>([]);

  useEffect(() => {
    axios.get<IUser[]>("http://localhost:5000/api/users").then((response) => {
      setUser(response.data);
    });

    axios
      .get<IAccount[]>("http://localhost:5000/api/accounts")
      .then((response) => {
        setAccount(response.data);
      });

    axios
      .get<IEducation[]>("http://localhost:5000/api/educations")
      .then((response) => {
        setEducation(response.data);
      });

    axios
      .get<IExperience[]>("http://localhost:5000/api/experiences")
      .then((response) => {
        setExperience(response.data);
      });
  }, []);

  return (
    <div id="content" className="main-content">
      <div className="layout-px-spacing">
        <div className="row layout-spacing">
          <div className="col-xl-4 col-lg-6 col-md-5 col-sm-12 layout-top-spacing">
            <div className="user-profile layout-spacing">
              <div className="widget-content widget-content-area">
                <div className="d-flex justify-content-between">
                  <Link to="/profile-edit" className="edit-profile">
                  <i className="far fa-edit ml-1" />

                  </Link>
                </div>
                <div className="text-center user-info">
                  <img src="assets/img/90x90.jpg" alt="avatar" />
                  <p></p>
                </div>
                <div className="user-info-list">
                  <div>
                    {users.map((user) => (
                      <ul className="contacts-block list-unstyled">
                        <li className="contacts-block__item">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-coffee"
                          >
                            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                            <line x1={6} y1={1} x2={6} y2={4} />
                            <line x1={10} y1={1} x2={10} y2={4} />
                            <line x1={14} y1={1} x2={14} y2={4} />
                          </svg>{" "}
                          {user.job}
                        </li>
                        <li className="contacts-block__item">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-calendar"
                          >
                            <rect
                              x={3}
                              y={4}
                              width={18}
                              height={18}
                              rx={2}
                              ry={2}
                            />
                            <line x1={16} y1={2} x2={16} y2={6} />
                            <line x1={8} y1={2} x2={8} y2={6} />
                            <line x1={3} y1={10} x2={21} y2={10} />
                          </svg>

                          <Moment format="DD.MM.YYYY">{user.birthdate}</Moment>
                        </li>
                        <li className="contacts-block__item">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-map-pin"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx={12} cy={10} r={3} />
                          </svg>
                          {user.location}
                        </li>
                        <li className="contacts-block__item">
                          <a href="mailto:example@mail.com">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-mail"
                            >
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                              <polyline points="22,6 12,13 2,6" />
                            </svg>
                            {user.email}
                          </a>
                        </li>

                        <li className="contacts-block__item">
                          <ul className="list-inline">
                            {accounts.map((account) => (
                              <li className="list-inline-item">
                                <a href={account.link}>
                                  <div>
                                    <i
                                      className={
                                        "fab fa-" + account.name + " fa-lg ml-3"
                                      }
                                    />
                                  </div>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="education layout-spacing ">
              <div className="widget-content widget-content-area">
                <h3>Eğitim</h3>
                <div className="timeline-alter">
                  {educations.map((education) => (
                    <div className="item-timeline">
                      <div className="t-meta-date">
                        <p>
                          {" "}
                          <Moment format="DD.MM.YYYY">
                            {education.graduation_date}
                          </Moment>
                        </p>
                      </div>
                      <div className="t-dot"></div>
                      <div className="t-text">
                        <p>{education.school}</p>
                        <p>{education.department}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="work-experience layout-spacing ">
              <div className="widget-content widget-content-area">
                <h3>İş tecrübesi</h3>
                <div className="timeline-alter">
                  {experiences.map((experience) => (
                    <div className="item-timeline">
                      <div className="t-meta-date">
                        <p>
                          <Moment format="DD.MM.YYYY">
                            {experience.start_date}
                          </Moment>
                        </p>
                        <p>
                          {" "}
                          <Moment format="DD.MM.YYYY">
                            {experience.end_date}
                          </Moment>
                        </p>
                      </div>
                      <div className="t-dot"></div>
                      <div className="t-text">
                        <p>{experience.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-6 col-md-7 col-sm-12 layout-top-spacing">
            <div className="bio layout-spacing ">
              <div className="widget-content widget-content-area">
                <h3>Bio</h3>
                {users.map((user) => (
                  <ul>{user.bio}</ul>
                ))}
              </div>
            </div>
            <div className="skills layout-spacing ">
              <div className="widget-content widget-content-area">
                <h3>Skills</h3>
                <div className="progress br-30">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-title">
                      <span>PHP</span> <span>25%</span>{" "}
                    </div>
                  </div>
                </div>
                <div className="progress br-30">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-title">
                      <span>Wordpress</span> <span>50%</span>{" "}
                    </div>
                  </div>
                </div>
                <div className="progress br-30">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-title">
                      <span>Javascript</span> <span>70%</span>{" "}
                    </div>
                  </div>
                </div>
                <div className="progress br-30">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-title">
                      <span>jQuery</span> <span>60%</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
