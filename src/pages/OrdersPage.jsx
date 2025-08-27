import { useState, useEffect } from "react";
import Header from "../components/Header";
import Container from "@mui/material/Container";
import { getOrders } from "../utils/api_orders";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import { deleteOrder } from "../utils/api_orders";
import Swal from "sweetalert2";
import { toast } from "sonner";



const OrdersPage = () => {
  // store orders data from API
  const [orders, setOrders] = useState([]);

  const [status, setStatus] = React.useState('');

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };


  // call the API
  useEffect(() => {
    getOrders()
      .then((data) => {
        // putting the data into orders state
        setOrders(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // call only once when the page load

    const handleOrderDelete = async (id) => {
      Swal.fire({
        title: "Are you sure you want to delete this product?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        // once user confirm, then we delete the product
        if (result.isConfirmed) {
          // delete product at the backend
          await deleteOrder(id);
  
          // method #1: remove from the state manually
          // delete product from the state
          // setProducts(products.filter((p) => p._id !== id));
  
          // method #2: get the new data from the backend
          const updatedOrders = await getOrders();
          setOrders(updatedOrders);
  
          toast.success("Product has been deleted");
        }
      });
    };

  

  return (
    <>
      <Header current="orders" title="My Orders" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow  >
              <TableCell>Customer</TableCell>
              <TableCell align="right">Products</TableCell>
              <TableCell align="right">Total Amount</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Payment Date</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.customerName}
                </TableCell>
                <TableCell align="right">{order.products.length}</TableCell>
                <TableCell align="right">{order.totalPrice}</TableCell>
                <TableCell align="right">
                  {/* dropdown */}
                  <Box  sx={{ maxWidth: 120, ml: 'auto' }}>
                    <FormControl fullWidth disabled={order.status === "pending" ? true : false}>
                      <InputLabel  id="demo-simple-select-label">Status</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={order.status}
                        label="Status"
                        onChange={handleChangeStatus}
                      >
                        <MenuItem value={"pending"}>Pending</MenuItem>
                        <MenuItem value={"paid"}>Paid</MenuItem>
                        <MenuItem value={"failed"}>Failed</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  {/* dropdown end */}
                </TableCell>
                <TableCell align="right">
                  {order.status === "paid" ? (
                      order.paid_at
                    ):
                    (
                      ""
                    )
                  }
                </TableCell>
                <TableCell align="right">
                  {order.status !== "pending" ? (
                              ""
                    ):
                    (
                      <Button 
                        variant="contained" 
                        color="error" 
                        sx={{ mt: 1 }}
                        onClick={() => {
                          // delete order
                          handleOrderDelete(order._id);
                        }}
                      >
                        DELETE
                      </Button>
                    )
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OrdersPage;
