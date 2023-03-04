import React from "react";
import style from "./Pagination.module.css";

const Pagination = (props) => {
  return (
    <div className={style.pagination}>
      <button
        className={style.button}
        onClick={() => props.setCurrentPage(props.currentPage - 1)}
      >
        Previus
      </button>
      <button
        className={style.previus}
        onClick={() => props.setCurrentPage(props.currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
