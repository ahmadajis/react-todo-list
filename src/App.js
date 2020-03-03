import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="container">
      <div className="mt-0">
        <section className="d-flex justify-content-between shadow-none p-3 mb-5 bg-light rounded ">
          <button type="button" className="btn btn-info">
            Add Todo
          </button>
          <h1 className="header-title text-center ">React Todo Lists</h1>
          <button type="button" className="btn btn-danger">
            Clear Todo
          </button>
        </section>

        <section className="shadow p-3 mb-5 gradient1 rounded">
          <br />
          <div className="container bg-light rounded-lg">
            <br />
            <form>
              <div className="form-row align-items-center">
                <div className="col-sm-11 my-1">
                  <input
                    type="text"
                    className="form-control"
                    id="inputTodo"
                    placeholder="Todo "
                  />
                </div>
                <div className="col-auto my-1">
                  <button
                    type="submit"
                    className="btn btn-dark gdbtn shadow-sm "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <br />
          </div>

          <br />
          <hr />
          <br />

          <div className="todo shadow-sm p-3 mb-3 bg-white rounded ">
            <span className="todo-list">Learning React Todo </span>
          </div>

          <div className="todo shadow-sm p-3 mb-3 bg-white rounded ">
            <span className="todo-list">Learning React Todo </span>
          </div>

          <div className="todo shadow-sm p-3 mb-3 bg-white rounded ">
            <span className="todo-list">Learning React Todo </span>
          </div>

          <div className="todo shadow-sm p-3 mb-3 bg-white rounded ">
            <span className="todo-list">Learning React Todo </span>
          </div>

          <div className="todo shadow-sm p-3 mb-3 bg-white rounded ">
            <span className="todo-list">Learning React Todo </span>
          </div>

          <div className="todo shadow-sm p-3 mb-3 bg-white rounded ">
            <span className="todo-list">Learning React Todo </span>
          </div>
        </section>
      </div>
    </div>
  );
}
