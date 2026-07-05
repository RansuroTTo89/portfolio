import * as ReactPaginateModule from "react-paginate";

function resolveReactPaginate(mod) {
  if (typeof mod === "function") return mod;
  if (typeof mod?.default === "function") return mod.default;
  if (typeof mod?.default?.default === "function") return mod.default.default;
  return mod;
}

const ReactPaginate = resolveReactPaginate(ReactPaginateModule);

export default function Pagination({ pageCount, currentPage, onPageChange }) {
  if (pageCount <= 1) return null;

  return (
    <ReactPaginate
      previousLabel="← Назад"
      nextLabel="Вперёд →"
      breakLabel="..."
      pageCount={pageCount}
      forcePage={currentPage}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      onPageChange={(selected) => onPageChange(selected.selected)}
      containerClassName="pagination"
      pageClassName="pagination__page"
      activeClassName="pagination__page--active"
      previousClassName="pagination__nav"
      nextClassName="pagination__nav"
      disabledClassName="pagination__nav--disabled"
      breakClassName="pagination__break"
    />
  );
}
