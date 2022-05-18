import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [
    {
      id:2033,
      firstname:"Tosin",
      lastname:"Adewale",
      email:"Adewaletosin0808@gmail.com",
      phone:"+2348068957966",
      gender:"male",
      product: "HP",
      image:"https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",

      // id: 2033,
      // product: "Acer Nitro S",
      // img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      // customer: "Adewale Tosin",
      // date: "1 March",
      // amount: 1650,
      // method: "Cash on Delivery",
      // status: "Approved",
    },
    {
      id:2,
      firstname:"Tania",
      lastname:"Beahan",
      email:"birdie.littel@yahoo.com",
      phone:"+9802073332619",
      gender:"female",
      product: "Toshiba",
      image:"https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",

      // id: 2044,
      // product: "Toshiba",
      // img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      // customer: "Ibukunle Samson",
      // date: "1 March",
      // amount: 650,
      // method: "Cash on Delivery",
      // status: "Approved",
    },
    {
      id:3,
      firstname:"Moises",
      lastname:"Ullrich",
      email:"josinski@rowe.com",
      phone:"+7921401040185",
      gender:"male",
      product: "Acer",
      image:"https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",


      // id: 3564,
      // product: "HP",
      // img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      // customer: "John Micheal",
      // date: "1 March",
      // amount: 1250,
      // method: "Online",
      // status: "Approved",
    },
    {
      id:4,
      firstname:"Janis",
      lastname:"Adams",
      email:"ignacio91@gmail.com",
      phone:"+5334644162576",
      gender:"female",
      product: "Dell",
      image:"https://images.pexels.com/photos/3777570/pexels-photo-3777570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      // id: 3243,
      // product: "Dell",
      // img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      // customer: "Jane Smith",
      // date: "1 March",
      // amount: 2050,
      // method: "Online",
      // status: "Pending",
    },
  ]
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">Team ID</TableCell>
            <TableCell className="tablecell">First Name</TableCell>
            <TableCell className="tablecell">Last Name</TableCell>
            <TableCell className="tablecell">Email</TableCell>
            <TableCell className="tablecell">Phone Number</TableCell>
            <TableCell className="tablecell">Gender</TableCell>
            <TableCell className="tablecell">Product</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tablecell">{row.id}</TableCell>
              <TableCell className="tablecell">
                <div className="cellWrapper">
                  <img src={row.image} alt="images" className="image" />
                {row.firstname}
                </div>
                </TableCell>
              <TableCell className="tablecell">{row.lastname}</TableCell>
              <TableCell className="tablecell">{row.email}</TableCell>
              <TableCell className="tablecell">{row.phone}</TableCell>
              <TableCell className="tablecell">{row.gender}</TableCell>
              <TableCell className="tablecell">{row.product}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List