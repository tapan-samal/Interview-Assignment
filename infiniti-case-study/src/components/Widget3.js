import React from "react";
import newItemsData from "../jsons/Whats_New.json";

const Widget3 = () => {
  return (
    <>
      <h3 className="text-c-blue text-underline f-w-600">
        Widget 3: What’s New
      </h3>
      <div className="col-xl-4 col-md-12">
        <div className="card latest-update-card">
          <div className="card-header">
            <h5>What’s New</h5>
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
            {newItemsData.what_new_items.map((item, index) => (
              <div key={index} className="latest-update-box">
                <div className="row p-t-20">
                  <div className="col-auto text-right update-meta p-r-0">
                    <img
                      src={`${
                        item.created_by === "Jonny michel"
                          ? "./template_files/avatar-2.jpg"
                          : "./template_files/avatar-4.jpg"
                      }`}
                      alt="user"
                      className="img-radius img-40 align-top m-r-15 update-icon"
                    />
                  </div>
                  <div className="col p-l-5">
                    <p>{item.message}</p>
                    <p className="text-muted m-b-0">{item.created_by}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Widget3;
