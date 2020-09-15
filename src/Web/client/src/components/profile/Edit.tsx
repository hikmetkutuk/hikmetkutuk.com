import React, { useState, useEffect } from "react";
import axios from "axios";

import { IAccount } from "../../models/account";
import { IUser } from "../../models/user";

interface IProps {
  account: IAccount;
  user: IUser;
}

const Edit: React.FC<IProps> = ({ user: initUserState }) => {
  const initUserForm = () => {
    if (initUserState) {
      return initUserState;
    } else {
      return {
        id: "",
        name: "",
        job: "",
        birthdate: "",
        location: "",
        email: "",
        bio: "",
      };
    }
  };

  const [user, setUser] = useState<IUser>(initUserForm);
  const [accounts, setAccount] = useState<IAccount[]>([]);

  useEffect(() => {
    axios
      .get<IAccount[]>("http://localhost:5000/api/accounts")
      .then((response) => {
        setAccount(response.data);
      });
  }, []);
  return (
    <div id="content" className="main-content">
      <div className="layout-px-spacing">
        <div className="row layout-top-spacing">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="widget-content widget-content-area justify-tab">
              <ul
                className="nav nav-tabs  mb-3 mt-3 nav-fill"
                id="justifyTab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="justify-home-tab"
                    data-toggle="tab"
                    href="#justify-home"
                    role="tab"
                    aria-controls="justify-home"
                    aria-selected="true"
                  >
                    Profil
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="justify-account-tab"
                    data-toggle="tab"
                    href="#justify-account"
                    role="tab"
                    aria-controls="justify-account"
                    aria-selected="false"
                  >
                    Hesaplar
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="justify-skill-tab"
                    data-toggle="tab"
                    href="#justify-skill"
                    role="tab"
                    aria-controls="justify-skill"
                    aria-selected="false"
                  >
                    Yetenekler
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="justifyTabContent">
                <div
                  className="tab-pane fade show active"
                  id="justify-home"
                  role="tabpanel"
                  aria-labelledby="justify-home-tab"
                >
                  <form id="general-info" className="general-info">
                    <div className="info">
                      <div className="row">
                        <div className="col-lg-11 mx-auto">
                          <div className="row">
                            <div className="col-xl-2 col-lg-12 col-md-4">
                              <div className="upload mt-4 pr-md-4">
                                <input
                                  type="file"
                                  id="input-file-max-fs"
                                  className="dropify"
                                  data-default-file="assets/img/200x200.jpg"
                                  data-max-file-size="2M"
                                />
                                <p className="mt-2">
                                  <i className="flaticon-cloud-upload mr-1" />
                                </p>
                              </div>
                            </div>
                            <div className="col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4">
                              <div className="form">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="form-group">
                                      <label htmlFor="fullName">İsim</label>
                                      <input
                                        type="text"
                                        className="form-control mb-4"
                                        id="fullName"
                                        value={user.name}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <label className="dob-input">
                                      Doğum Tarihi
                                    </label>

                                    <div className="form-group mb-0">
                                      <input
                                        id="basicFlatpickr"
                                        value={user.birthdate}
                                        className="form-control"
                                        type="text"
                                        placeholder="2019-09-04"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="profession">Meslek</label>
                                  <input
                                    type="text"
                                    className="form-control mb-4"
                                    id="profession"
                                    value={user.job}
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="location">Adres</label>
                                  <input
                                    type="text"
                                    className="form-control mb-4"
                                    id="location"
                                    value={user.location}
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="email">Email</label>
                                  <input
                                    type="text"
                                    className="form-control mb-4"
                                    id="email"
                                    value={user.email}
                                  />
                                </div>

                                <div className="form-group">
                                  <label htmlFor="aboutBio">Bio</label>
                                  <textarea
                                    className="form-control"
                                    id="aboutBio"
                                    rows={10}
                                    value={user.bio}
                                  />
                                </div>
                                <div className="text-right">
                                  <button
                                    id=""
                                    className="btn btn-success btn-sm"
                                  >
                                    Kaydet
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div
                  className="tab-pane fade"
                  id="justify-account"
                  role="tabpanel"
                  aria-labelledby="justify-account-tab"
                >
                  <div className="info">
                    <h5>Accounts</h5>

                    <form id="social" className="social">
                      <div className="row">
                        <div className="col-md-11 mx-auto">
                          <div className="text-right mb-3">
                            <button
                              className="btn btn-info btn-sm"
                              data-toggle="modal"
                              data-target="#accountsModal"
                            >
                              Add
                            </button>
                          </div>
                          <div className="row">
                            {accounts.map((account) => (
                              <div className="col-md-6">
                                <div className="input-group social-linkedin mb-3">
                                  <div className="input-group-prepend mr-3">
                                    <span
                                      className="input-group-text"
                                      id="linkedin"
                                    >
                                      <i
                                        className={
                                          "fab fa-" + account.name + " fa-lg"
                                        }
                                      />
                                    </span>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder={account.link}
                                    aria-label="Username"
                                    aria-describedby="linkedin"
                                  />
                                  <div className="input-group-append">
                                    <button
                                      className="btn btn-sm btn-outline-danger"
                                      type="button"
                                    >
                                      <i
                                        className="fa fa-trash fa-lg"
                                        aria-hidden="true"
                                      ></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="text-right">
                            <button id="" className="btn btn-success btn-sm">
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="justify-skill"
                  role="tabpanel"
                  aria-labelledby="justify-skill-tab"
                >
                  <form id="skill" className="skill">
                    <div className="row">
                      <div className="col-md-11 mx-auto">
                        <div className="input-form">
                          <input
                            type="text"
                            className="form-control"
                            id="skills"
                            placeholder="Skill name"
                          />

                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon5"
                            >
                              %
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Percentage"
                            aria-label="Username"
                          />

                          <button
                            id="add-skills"
                            className="btn btn-success btn-sm"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div
                    id="tableProgress"
                    className="col-lg-12 col-12 layout-spacing"
                  >
                    <div className="statbox widget box box-shadow">
                      <div className="widget-content widget-content-area">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th className="text-center">#</th>
                                <th>Name</th>
                                <th>Level</th>

                                <th className="text-center">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-center">1</td>
                                <td>John Doe</td>
                                <td>
                                  <div className="progress br-30">
                                    <div
                                      className="progress-bar br-30 bg-primary"
                                      role="progressbar"
                                      style={{ width: "29.56%" }}
                                      aria-valuenow={25}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </td>

                                <td className="text-center">
                                  <ul className="table-controls">
                                    <li>
                                      <button
                                        className="btn btn-sm mb-2 mr-2 rounded-circle"
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                      >
                                        <i
                                          className="fa fa-edit"
                                          aria-hidden="true"
                                        ></i>
                                      </button>
                                    </li>
                                    <li>
                                      <button className="btn btn-sm mb-2 mr-2 rounded-circle">
                                        <i
                                          className="fa fa-trash"
                                          aria-hidden="true"
                                        ></i>
                                      </button>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* skill edit modal */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <svg
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x"
                          >
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </button>
                      </div>
                      <form id="skill" className="form-horizontal">
                        <div className="modal-body">
                          <div className="form-group row  mb-4">
                            <label
                              htmlFor="colFormLabelSm"
                              className="col-sm-2 col-form-label col-form-label-sm"
                            >
                              Skill Name
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="colFormLabelSm"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="form-group row  mb-4">
                            <label
                              htmlFor="colFormLabelSm"
                              className="col-sm-2 col-form-label col-form-label-sm"
                            >
                              Percentage
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="colFormLabelSm"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button className="btn" data-dismiss="modal">
                            <i className="flaticon-cancel-12" /> Discard
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* Modal end */}

                {/* accounts edit modal */}
                <div
                  className="modal fade"
                  id="accountsModal"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="accountsModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="accountsModalLabel">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <svg
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x"
                          >
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </button>
                      </div>
                      <form id="accounts" className="form-horizontal">
                        <div className="modal-body">
                          <div className="form-group row  mb-4">
                            <label
                              htmlFor="colFormLabelSm"
                              className="col-sm-2 col-form-label col-form-label-sm"
                            >
                              Account Name
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="colFormLabelSm"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="form-group row  mb-4">
                            <label
                              htmlFor="colFormLabelSm"
                              className="col-sm-2 col-form-label col-form-label-sm"
                            >
                              Link
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="colFormLabelSm"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button className="btn" data-dismiss="modal">
                            <i className="flaticon-cancel-12" /> Discard
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* Modal end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
