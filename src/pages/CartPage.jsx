import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link, Navigate } from "react-router";
import { Button } from "@mui/material";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import Paper from '@mui/material/Paper';

const CartPage = () => {

  const navigate = useNavigate();

  // Retrieve cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  

  // 2) Sum up price * quantity for every item in the cart
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  //3 handle delete item from cart
  const handleDeleteItem = (id) => {
    const updatedCart = cart.filter(item => item._id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Item removed from cart");
    // Optionally, you can force a re-render or navigate to refresh the cart view
  }




  // 4) Render the cart items in a table
  return (
    <>
      <Header />
      <Box sx={{ py: 4 }}>
          {/* table */}
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {/* table head */}
            <TableHead>
              <TableRow>
                <TableCell sx={{fontWeight:"bold"}}>Product</TableCell>
                <TableCell align="right" sx={{fontWeight:"bold"}}>Price</TableCell>
                <TableCell align="right" sx={{fontWeight:"bold"}}>Quantity</TableCell>
                <TableCell align="right" sx={{fontWeight:"bold"}}>Total</TableCell>
                <TableCell align="right" sx={{fontWeight:"bold"}}>Action</TableCell>
              </TableRow>
            </TableHead>
            {/* table body */}
            <TableBody>
              {cart.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="start">
                    No product added yet!
                  </TableCell>
                </TableRow>
              ) : (
                <>
                  {cart.map((item) => (
                    <TableRow
                      key={item.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">{item.name}</TableCell>
                      <TableCell align="right">{item.price}</TableCell>
                      <TableCell align="right">{item.quantity}</TableCell>
                      <TableCell align="right">${item.price * item.quantity}</TableCell>
                      <TableCell align="right">
                        <Button 
                          variant="contained"
                          color="error" 
                          onClick={() => {
                            handleDeleteItem(item._id);
                            navigate("/cart");
                          }}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}

                  {/* total row */}
                  <TableRow>
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>
                      ${totalPrice}
                    </TableCell>
                    <TableCell />
                  </TableRow>
                </>
              )}
            </TableBody>

          </Table>
          <Box sx={{ mt: 3, alignItems: "center", display: "flex", justifyContent: "end" }}>
            <Button
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          </Box>
      </Box>
    </>
  );
};

export default CartPage;
