import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  return (
    <div className="BreadCrumb mb-0 py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center">
              <Link to="/" className="text-dark">
                Home &nbsp;
              </Link>
              / {props.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
