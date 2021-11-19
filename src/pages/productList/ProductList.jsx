import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const [data, setData] = useState(productRows);
  const handleDeletion = (id) => {
    setData(data.filter((items) => items.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "product",
      width: 250,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="productListproduct">
            <img className="productListImg" src={params.row.avatar} alt="" />
            {params.row.product}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 180,
    },
    {
      field: "price",
      headerName: "Price",
      width: 180,
      editable: true,
    },

    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/products/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDeletion(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        style={{ overflow: "inherit" }}
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
