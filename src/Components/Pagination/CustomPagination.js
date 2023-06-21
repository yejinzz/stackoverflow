import React from "react";
import { Pagination } from "@mui/material";

const CustomPagination = ({ array, currentPage, setCurrentPage }) => {
  return (
    <Pagination
      count={Math.ceil(array.length / 15)}
      page={currentPage}
      variant="outlined"
      shape="rounded"
      sx={{
        color: "red",
        "& .MuiPaginationItem-root": {
          color: "black",
          "&.Mui-selected": {
            color: "white",
            bgcolor: "#f48225",
          },
        },
      }}
      onChange={(_, value) => {
        setCurrentPage(value);
        window.scrollTo(0, 0);
      }}
    />
  );
};

export default CustomPagination;