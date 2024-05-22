import React from "react";
import data from "../jsons/New_Products.json";

const Widget5 = () => {
  const { new_products } = data;

  return (
    <>
      <h3 className="text-c-blue text-underline f-w-600">Widget 5: New Products</h3>
      <div className="col-md-12">
        <div className="card table-card">
          <div className="card-header">
            <h5>New Products</h5>
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
          <div className="card-block p-b-0">
            <div className="table-responsive">
              <table className="table table-hover m-b-0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Product Code</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {new_products.map((product, index) => (
                    <tr key={index}>
                      <td>{product.name}</td>
                      <td>{product.product_code}</td>
                      <td>{product.customer}</td>

                      <td>
                          <label className={`label ${product.status === "In Stock" ?  "label-success" : "label-danger"}` }>
                          {product.status}
                        </label>
                      </td>
                      <td>
                        <a href="#!">
                          <i className="fa fa-star f-12 text-c-yellow"></i>
                        </a>
                        <a href="#!">
                          <i className="fa fa-star f-12 text-c-yellow"></i>
                        </a>
                        <a href="#!">
                          <i className="fa fa-star f-12 text-c-yellow"></i>
                        </a>
                        <a href="#!">
                          <i className="fa fa-star f-12 text-default"></i>
                        </a>
                        <a href="#!">
                          <i className="fa fa-star f-12 text-default"></i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Widget5;
