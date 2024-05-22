import React from "react";
import latestActivityData from "../jsons/Latest_Activity.json";

const Widget4 = () => {
  return (
    <>
      <h3 className="text-c-blue text-underline f-w-600">Widget 4: Latest Activity</h3>
      <div className="col-xl-4 col-md-6">
        <div className="card latest-update-card">
          <div className="card-header">
            <h5>Latest Activity</h5>
            <div className="card-header-right">
              <ul className="list-unstyled card-option">
                <li className="first-opt">
                  <i className="feather icon-chevron-left open-card-option"></i>
                </li>
                <li>
                  <i className="feather icon-maximize full-card"></i>
                </li>
                <li>
                  <i className="feather icon-minus minimize-card"></i>
                </li>
                <li>
                  <i className="feather icon-refresh-cw reload-card"></i>
                </li>
                <li>
                  <i className="feather icon-trash close-card"></i>
                </li>
                <li>
                  <i className="feather icon-chevron-left open-card-option"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-block">
            <div
              className="scroll-widget"
              style={{ overflow: "none", height: "auto" }}
            >
              {latestActivityData.latest_activity.map((activity, index) => (
                <div key={index} className="latest-update-box">
                  <div className="row p-t-20 p-b-30">
                    <div className="col-auto text-right update-meta p-r-0">
                      <i className="b-primary update-icon ring"></i>
                    </div>
                    <div className="col p-l-5">
                      <a href="#!">
                        <h6>{activity.activity_type}</h6>
                      </a>
                      <p className="text-muted m-b-0">
                        {activity.activity}{" "}
                        <a href="#!" className="text-c-blue">
                          {" "}
                          Read More
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Widget4;
