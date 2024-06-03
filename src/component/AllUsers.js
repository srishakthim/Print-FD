import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
} from "@material-ui/core";

// Define some sample data
const rows = Array.from({ length: 50 }, (_, index) => ({
  name: `Name ${index + 1}`,
  email: `Admin${index + 1}@gmail.com`,
  phone: `987273246${index + 1}`,
  gst: `45${index + 1}`,
  whatsapp: `987273246${index + 1}`,
  address: `${index + 1} Street Name`,
  city: `${index + 1} City`,
  pincode: `60000${index + 1}`,
  state: `${index + 1}`,
}));

const useStyles = makeStyles({
  tableContainer: {
    maxHeight: 440,
    border: "1px solid #fff",
    borderRadius: "15px",
  },
  tableHeader: {
    backgroundColor: "#014550", 
    color: "#fff",
  },
  tableRow: {
    backgroundColor: "#f5f5f5", 
  },
  tableCell: {
    backgroundColor: "rgba(255, 255, 255, 0.8)", 
  },
  tableBorder: {
    borderColor: "#000",
  },
});

const AllUsers = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table stickyHeader className={classes.tableBorder}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeader}>NAME</TableCell>
            <TableCell className={classes.tableHeader}>EMAIL ID</TableCell>
            <TableCell className={classes.tableHeader}>PHONE NO</TableCell>
            <TableCell className={classes.tableHeader}>WHATSAPP NO</TableCell>
            <TableCell className={classes.tableHeader}>GST NO</TableCell>
            <TableCell className={classes.tableHeader}>ADDRESS</TableCell>
            <TableCell className={classes.tableHeader}>CITY</TableCell>
            <TableCell className={classes.tableHeader}>PINCODE</TableCell>
            <TableCell className={classes.tableHeader}>STATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.whatsapp}</TableCell>
              <TableCell>{row.gst}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.pincode}</TableCell>
              <TableCell>{row.state}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllUsers;
