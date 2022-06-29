import "./style.css";
import "../Modal.css"
import Modal from "../Modal";
import {useState} from "react";

export function EmployeeList(props) {
  const { items } = props;

  const [openModal,setOpenModal] = useState(false);

  return (
    <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
      <div className="dataTable-top">
        <div className="dataTable-dropdown">
          <label>
            <select className="dataTable-selector">
              <option value="5">5</option>
              <option value="10" selected="">
                10
              </option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>{" "}
            entries per page
          </label>
        </div>
        <div className="dataTable-search">
         <button className="btn btn-primary button_wrapper"
            onClick={() => {
              setOpenModal(true);
            }}
         >
           Add
         </button>
          {openModal && <Modal closeModal={setOpenModal}/>}
        </div>
      </div>
      <div className="dataTable-container otherContent">
        <table className="table-bordered">
          <thead>
            <tr>
            <th>id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </tfoot>
          <tbody>
            {(items || []).map((item) => (
              <tr key={item.name}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="dataTable-bottom">
        <div className="dataTable-info">Showing 1 to 10 of 57 entries</div>
        <nav className="dataTable-pagination">
          <ul className="dataTable-pagination-list">
            <li className="active">
              <a href="#" data-page="1">
                1
              </a>
            </li>
            <li className="">
              <a href="#" data-page="2">
                2
              </a>
            </li>
            <li className="">
              <a href="#" data-page="3">
                3
              </a>
            </li>
            <li className="">
              <a href="#" data-page="4">
                4
              </a>
            </li>
            <li className="">
              <a href="#" data-page="5">
                5
              </a>
            </li>
            <li className="">
              <a href="#" data-page="6">
                6
              </a>
            </li>
            <li className="pager">
              <a href="#" data-page="2">
                ›
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
