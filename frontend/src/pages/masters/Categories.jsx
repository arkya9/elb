import { useEffect, useState } from "react";

import { PageHeader, PageWrapper } from "../../components";
import { Form } from "react-router-dom";
import { nanoid } from "nanoid";
import { IoIosSearch } from "react-icons/io";
import { IoReloadSharp } from "react-icons/io5";
import customFetch from "../../utils/customFetch";
import { splitErrors } from "../../utils/showErrors";
import { dateFormatFancy } from "../../utils/functions";
import AddCategory from "../../components/masters/AddCategory";

const Categories = () => {
  const listRoles = [];
  const [listCategory, setListCategory] = useState([]);
  const fetchData = async () => {
    try {
      const response = await customFetch.get(`/masters/getallcategory`);
      console.log(response);
      setListCategory(response.data.data.rows);
    } catch (error) {
      splitErrors(error?.response?.data?.msg);
      return error;
    }
  };
  console.log(listCategory);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <PageHeader title={`List of All Categories`} />
            <div className="col-auto ms-auto d-print-none"></div>
          </div>
        </div>
      </div>
      <PageWrapper>
        <div className="col-8">
          <div className="card">
            <div className="card-header">
              Total 10 categories found
              <div className="col-auto ms-auto d-print-none">
                <Form method="GET">
                  <div className="btn-list">
                    <span className="d-none d-sm-inline">
                      <div className="input-icon">
                        <select
                          className="form-control"
                          name="r"
                          id="searchRole"
                          style={{ minWidth: "200px" }}
                        >
                          <option value="">Select</option>
                          {listRoles?.map((i) => {
                            return (
                              <option key={nanoid()} value={i.id}>
                                {i.role}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </span>
                    <span className="d-none d-sm-inline">
                      <div className="input-icon">
                        <input
                          type="text"
                          name="s"
                          className="form-control"
                          placeholder="Search by name..."
                        />
                      </div>
                    </span>
                    <span className="d-none d-sm-inline">
                      <button
                        type="submit"
                        className="btn btn-primary d-none d-sm-inline-block me-2"
                      >
                        <IoIosSearch className="fs-3" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-default d-none d-sm-inline-block"
                      >
                        <IoReloadSharp className="fs-3" />
                      </button>
                    </span>
                  </div>
                </Form>
              </div>
            </div>

            <div className="card-body p-2">
              <div className="table-responsive">
                <table className="table table-vcenter datatable table-hover table-bordered card-table fs-5">
                  <thead>
                    <tr>
                      <th className="bg-dark text-white">SL. NO.</th>
                      <th className="bg-dark text-white">Categories</th>
                      <th className="bg-dark text-white">Product</th>
                      <th className="bg-dark text-white">product id</th>
                      <th className="bg-dark text-white">Purchase Date</th>
                      <th className="bg-dark text-white">Ownner</th>
                      <th className="bg-dark text-white">tatus</th>
                      <th className="bg-dark text-white">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listCategory.map((i, index) => {
                      return (
                        <tr key={nanoid()}>
                          <td>{index + 1}</td>

                          <td>{i?.category}</td>
                          <td>{i?.product}</td>
                          <td>{i?.product_id}</td>
                          <td>{i?.product_id}</td>
                          <td>{i?.owner}</td>
                          <td>{dateFormatFancy(i?.purchase_date)}</td>
                          <td>{i?.status}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <AddCategory />
        </div>
      </PageWrapper>
    </>
  );
};

export default Categories;
