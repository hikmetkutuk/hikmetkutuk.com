import React from "react";

const List = () => {
  return (
    <div id="custom_carousel" className="col-lg-12 layout-spacing">
      <div className="container" style={{ maxWidth: 928 }}>
        <div id="navSection" data-spy="affix" className="nav  sidenav">
          <div className="sidenav-content">
            <a href="#custom_carousel" className="nav-link">
              Category 1
            </a>
            <a href="#slides_only" className="nav-link">
              Category 2
            </a>
            <a href="#with_controls" className="nav-link">
              Category 3
            </a>
            <a href="#with_indicators" className="nav-link">
              Category 4
            </a>
            <a href="#with_captions" className="nav-link">
              Category 5
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 mb-5 mt-5 p-0">
            <div
              id="style1"
              className="carousel slide style-custom-1"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100 slide-image"
                    src="assets/img/600x300.jpg"
                    alt="First slide"
                  />
                  <div className="carousel-caption">
                    <span className="badge">Lifestyle</span>
                    <h3>How To Make More Blog By Doing Less</h3>
                    <div className="media">
                      <img src="assets/img/90x90.jpg" alt="avatar" />
                      <div className="media-body">
                        <h6 className="user-name">User name</h6>
                        <p className="meta-time">
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
                          </svg>{" "}
                          Jan, 14 2020
                        </p>
                      </div>
                    </div>
                    <h5>Lorem ipsum dolor sit amet, dolore magna aliqua.</h5>
                  </div>
                </div>
              </div>

              <a
                className="carousel-control-next"
                href="#style1"
                role="button"
                data-slide="next"
              >
                Devam
                <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-12 col-md-12 mb-5 mt-5 p-0">
            <div
              id="style1"
              className="carousel slide style-custom-1"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100 slide-image"
                    src="assets/img/600x300.jpg"
                    alt="First slide"
                  />
                  <div className="carousel-caption">
                    <span className="badge">Lifestyle</span>
                    <h3>How To Make More Blog By Doing Less</h3>
                    <div className="media">
                      <img src="assets/img/90x90.jpg" alt="avatar" />
                      <div className="media-body">
                        <h6 className="user-name">User name</h6>
                        <p className="meta-time">
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
                          </svg>{" "}
                          Jan, 14 2020
                        </p>
                      </div>
                    </div>
                    <h5>Lorem ipsum dolor sit amet, dolore magna aliqua.</h5>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-next"
                href="#style1"
                role="button"
                data-slide="next"
              >
                Devam
                <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
