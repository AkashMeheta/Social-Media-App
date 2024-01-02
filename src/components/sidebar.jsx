import { useState } from "react";

const Sidebar = ({ displayComponent, setDisplayComponent }) => {
  const changeDisplay = (event) => {
    setDisplayComponent(event.target.id);
  }
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{width: "280px", height: "700px"}}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto" >
          <li className="nav-item">
            <a href="#" className={`nav-link text-white ${ displayComponent==="HomeFeed" && 'active'}`} aria-current="page" id="HomeFeed" onClick={(event)=>changeDisplay(event)}>
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Home Feed 
            </a>
          </li>
          <li>
            <a href="#" className={`nav-link text-white ${ displayComponent==="CreatePost" && 'active'}`} id="CreatePost" onClick={(event)=>changeDisplay(event)}>
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Create Post
              
            </a>
          </li>
          <li>
            <a href="#" className={`nav-link text-white ${ displayComponent==="Profile" && 'active'}`} id="Profile" onClick={(event)=>changeDisplay(event)}>
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              Profile
            </a>
          </li>
          <hr />
        </ul>

      </div>
    </>
  );
};

export default Sidebar;
