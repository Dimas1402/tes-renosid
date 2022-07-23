import React, { useState } from "react";
import "../Assets/styles/index.css";
import { Modal } from "../Components/Modal";

const Page = () => {
  const [state, setState] = useState({
    open: false,
    list: [],
    dataModal: {},
  });

  // func input
  const handleChange = (e) => {
    let { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  //open modal
  const handleOpen = (res) => {
    setState({ ...state, open: true, dataModal: res });
  };

  //close modal
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  // add list
  const handleSubmit = (e) => {
    e.preventDefault();
    const newArr = {
      id: state?.list?.length + 1,
      title: state?.title,
      desc: state?.desc,
    };
    setState({ ...state, list: [...state.list, newArr], title: "", desc: "" });
  };

  // remove list
  const handleRemove = () => {
    const newList = state?.list?.filter(
      (item) => item.id !== state?.dataModal?.id
    );
    setState({ ...state, list: newList, open: false });
  };

  return (
    <section>
      <div className="pt-3 p-1">
        <img
          alt="renos"
          width={200}
          height={100}
          className="logo-center pb-1"
          src="https://assets.renos.id/renos-logo.svg"
        />
        <div className="d-flex-center">
          <div className="main-box">
            <p className="fw-bold">Create a List</p>
            <form onSubmit={handleSubmit}>
              <div className="d-grid">
                <input
                  onChange={handleChange}
                  value={state?.title}
                  className="input"
                  placeholder="Title"
                  name="title"
                  required={true}
                />
                <div className="pt-1" />
                <textarea
                  onChange={handleChange}
                  value={state?.desc}
                  className="input-textarea"
                  placeholder="Description"
                  name="desc"
                  required={true}
                />
                <div className="pt-1 pb-2">
                  <button type="submit" className="btn">
                    Add Data
                  </button>
                </div>
              </div>
            </form>
            <div className="height-list">
              {state?.list?.map((res, i) => (
                <div onClick={() => handleOpen(res)} key={i} className="pt-1">
                  <div className="d-grid list">
                    <span className="fw-bold txt-list">{res?.title}</span>
                    <div className="fs-12 txt-list">{res?.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={state.open}
        handleClose={handleClose}
        handleRemove={handleRemove}
        title={state?.dataModal?.title}
        content={state?.dataModal?.desc}
      />
    </section>
  );
};

export default Page;
