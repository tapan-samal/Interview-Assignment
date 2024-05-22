import React from "react";
import summaryData from "../jsons/summary.json";

const Widget1 = () => {
  return (
    <>
      <h3 className="text-c-blue text-underline f-w-600">Widget 1: Summary</h3>
      {summaryData.summary.map((data, index) => (
        <div key={index}>
          <div className="col-md-12 col-xl-4">
            <div className="card comp-card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="m-b-25">{data.title}</h6>
                    <h3
                      className={`f-w-700 ${
                        data.title === "Impressions"
                          ? "text-primary"
                          : data.title === "Goal"
                          ? "text-info"
                          : "text-warning"
                      }`}
                    >
                      {data.value}
                    </h3>
                    <p className="m-b-0">{`${data.duration} (${data.year})`}</p>
                  </div>
                  <div className="col-auto">
                    <i
                      className={`fas ${
                        data.title === "Impressions"
                          ? "fa-eye"
                          : data.title === "Goal"
                          ? "fa-bullseye"
                          : "fa-hand-paper"
                      } ${
                        data.title === "Impressions"
                          ? "label-primary"
                          : data.title === "Goal"
                          ? "label-info"
                          : "label-warning"
                      }`}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Widget1;
