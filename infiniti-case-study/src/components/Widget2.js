import React from "react";
import projectSummary from "../jsons/Project_Progress_Summary.json";

const Widget2 = () => {
  return (
    <>
      <h3 className="text-c-blue text-underline f-w-600">
        Widget 2: Project Progress Summary
      </h3>
      <div class="col-xl-12">
        <div class="card proj-progress-card">
          <div class="card-block">
            <div class="row">
              {projectSummary.project_progress_summary.map((data, index) => (
                <div key={index} class="col-xl-3 col-md-6">
                  <h6>{data.title}</h6>
                  <h5 className="m-b-30 f-w-700">
                    {data.value}
                    <span
                      className={`${
                        data.percentage < 1 ? "text-c-danger" : "text-c-green"
                      } m-l-10`}
                    >
                      {data.percentage}
                    </span>
                  </h5>
                  <div class="progress">
                    <div
                      class={`progress-bar ${
                        data.title === "Published Project"
                          ? "label-danger"
                          : data.title === "Completed Task"
                          ? "label-primary"
                          : data.title === "Successfull Task"
                          ? "label-success"
                          : "label-warning"
                      }`}
                      style={{ width: "55%" }}
                    ></div>
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

export default Widget2;
