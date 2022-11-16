import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    //maxHeight 로 높이 조절
    <TableContainer sx={{ maxHeight: "300px" }} component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Annora",
    last_name: "Cleare",
    email: "acleare0@bizjournals.com",
    gender: "Female",
    ip_address: "149.119.40.218",
  },
  {
    id: 2,
    first_name: "Tabatha",
    last_name: "Janzen",
    email: "tjanzen1@cam.ac.uk",
    gender: "Female",
    ip_address: "55.246.141.184",
  },
  {
    id: 3,
    first_name: "Justino",
    last_name: "Norledge",
    email: "jnorledge2@cisco.com",
    gender: "Male",
    ip_address: "144.123.18.146",
  },
  {
    id: 4,
    first_name: "Marietta",
    last_name: "Gellately",
    email: "mgellately3@slashdot.org",
    gender: "Male",
    ip_address: "80.127.77.26",
  },
  {
    id: 5,
    first_name: "Lavinia",
    last_name: "Owenson",
    email: "lowenson4@printfriendly.com",
    gender: "Female",
    ip_address: "130.119.243.197",
  },
  {
    id: 6,
    first_name: "Bernetta",
    last_name: "Allenson",
    email: "ballenson5@sohu.com",
    gender: "Female",
    ip_address: "173.161.244.57",
  },
  {
    id: 7,
    first_name: "Rock",
    last_name: "Adamczyk",
    email: "radamczyk6@g.co",
    gender: "Male",
    ip_address: "135.100.12.168",
  },
  {
    id: 8,
    first_name: "Rosmunda",
    last_name: "Baudon",
    email: "rbaudon7@people.com.cn",
    gender: "Female",
    ip_address: "152.184.50.119",
  },
  {
    id: 9,
    first_name: "Christal",
    last_name: "Swanston",
    email: "cswanston8@psu.edu",
    gender: "Female",
    ip_address: "43.144.68.200",
  },
  {
    id: 10,
    first_name: "Kylie",
    last_name: "Costain",
    email: "kcostain9@vinaora.com",
    gender: "Female",
    ip_address: "96.100.61.111",
  },
];
