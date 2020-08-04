import React from "react";

const Navbar = () => {
  return (
    <div className="header-container">
      <header className="header navbar navbar-expand-sm">
        <a href="!#" className="sidebarCollapse" data-placement="bottom">
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
            className="feather feather-menu"
          >
            <line x1={3} y1={12} x2={21} y2={12} />
            <line x1={3} y1={6} x2={21} y2={6} />
            <line x1={3} y1={18} x2={21} y2={18} />
          </svg>
        </a>
        <div className="nav-logo align-self-center">
          <a className="navbar-brand" href="index.html">
            <img alt="logo" src="assets/img/linux.png" />
            <span className="navbar-brand-name ml-3">hikmetkutuk.com</span>
          </a>
        </div>
        <ul className="navbar-item flex-row mr-auto">
          <li className="nav-item align-self-center search-animated">
            <form
              className="form-inline search-full form-inline search"
              role="search"
            >
              <div className="search-bar">
                <input
                  type="text"
                  className="form-control search-form-control  ml-lg-auto"
                  placeholder="Search..."
                />
              </div>
            </form>
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
              className="feather feather-search toggle-search"
            >
              <circle cx={11} cy={11} r={8} />
              <line x1={21} y1={21} x2="16.65" y2="16.65" />
            </svg>
          </li>
        </ul>
        <ul className="navbar-item flex-row nav-dropdowns">
          <li className="nav-item dropdown message-dropdown">
            <a
              href="!#"
              className="nav-link dropdown-toggle"
              id="messageDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
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
                className="feather feather-message-circle"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span className="badge badge-success" />
            </a>
            <div
              className="dropdown-menu p-0 position-absolute animated fadeInUp"
              aria-labelledby="messageDropdown"
            >
              <div>
                <a href="!#" className="dropdown-item">
                  <div>
                    <div className="media">
                      <div className="user-img">
                        <div className="avatar avatar-xl">
                          <span className="avatar-title rounded-circle">
                            KY
                          </span>
                        </div>
                      </div>
                      <div className="media-body">
                        <div>
                          <h5 className="usr-name">Kara Young</h5>
                          <p className="msg-title">ACCOUNT UPDATE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="!#" className="dropdown-item">
                  <div>
                    <div className="media">
                      <div className="user-img">
                        <div className="avatar avatar-xl">
                          <span className="avatar-title rounded-circle">
                            DA
                          </span>
                        </div>
                      </div>
                      <div className="media-body">
                        <div>
                          <h5 className="usr-name">Daisy Anderson</h5>
                          <p className="msg-title">ACCOUNT UPDATE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="!#" className="dropdown-item">
                  <div>
                    <div className="media">
                      <div className="user-img">
                        <div className="avatar avatar-xl">
                          <span className="avatar-title rounded-circle">
                            OG
                          </span>
                        </div>
                      </div>
                      <div className="media-body">
                        <div>
                          <h5 className="usr-name">Oscar Garner</h5>
                          <p className="msg-title">ACCOUNT UPDATE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown notification-dropdown">
            <a
              href="!#"
              className="nav-link dropdown-toggle"
              id="notificationDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
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
                className="feather feather-bell"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span className="badge badge-success" />
            </a>
            <div
              className="dropdown-menu position-absolute animated fadeInUp"
              aria-labelledby="notificationDropdown"
            >
              <div className="notification-scroll">
                <div className="dropdown-item">
                  <div className="media server-log">
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
                      className="feather feather-server"
                    >
                      <rect x={2} y={2} width={20} height={8} rx={2} ry={2} />
                      <rect x={2} y={14} width={20} height={8} rx={2} ry={2} />
                      <line x1={6} y1={6} x2={6} y2={6} />
                      <line x1={6} y1={18} x2={6} y2={18} />
                    </svg>
                    <div className="media-body">
                      <div className="data-info">
                        <h6>Server Rebooted</h6>
                        <p>45 min ago</p>
                      </div>
                      <div className="icon-status">
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
                          className="feather feather-x"
                        >
                          <line x1={18} y1={6} x2={6} y2={18} />
                          <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown-item">
                  <div className="media ">
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
                      className="feather feather-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    <div className="media-body">
                      <div className="data-info">
                        <h6>Licence Expiring Soon</h6>
                        <p>8 hrs ago</p>
                      </div>
                      <div className="icon-status">
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
                          className="feather feather-x"
                        >
                          <line x1={18} y1={6} x2={6} y2={18} />
                          <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown-item">
                  <div className="media file-upload">
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
                      className="feather feather-file-text"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1={16} y1={13} x2={8} y2={13} />
                      <line x1={16} y1={17} x2={8} y2={17} />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    <div className="media-body">
                      <div className="data-info">
                        <h6>Kelly Portfolio.pdf</h6>
                        <p>670 kb</p>
                      </div>
                      <div className="icon-status">
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
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown user-profile-dropdown order-lg-0 order-1">
            <a
              href="!#"
              className="nav-link dropdown-toggle user"
              id="user-profile-dropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="media">
                <img
                  src="assets/img/90x90.jpg"
                  className="img-fluid"
                  alt="admin-profile"
                />
                <div className="media-body align-self-center">
                  <h6>
                    <span>Hi,</span> Alan
                  </h6>
                </div>
              </div>
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
                className="feather feather-chevron-down"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>
            <div
              className="dropdown-menu position-absolute animated fadeInUp"
              aria-labelledby="user-profile-dropdown"
            >
              <div>
                <div className="dropdown-item">
                  <a href="user_profile.html">
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
                      className="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>{" "}
                    My Profile
                  </a>
                </div>
                <div className="dropdown-item">
                  <a href="apps_mailbox.html">
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
                      className="feather feather-inbox"
                    >
                      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                    </svg>{" "}
                    Inbox
                  </a>
                </div>
                <div className="dropdown-item">
                  <a href="auth_lockscreen.html">
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
                      className="feather feather-lock"
                    >
                      <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>{" "}
                    Lock Screen
                  </a>
                </div>
                <div className="dropdown-item">
                  <a href="auth_login.html">
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
                      className="feather feather-log-out"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1={21} y1={12} x2={9} y2={12} />
                    </svg>{" "}
                    Sign Out
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
