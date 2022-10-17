import React from "react";
import { Box } from "@mui/material";
import { AppButton, ApplicationCard } from "../../../../../components";
import Avatar from "@mui/material/Avatar";
import { CardContent } from "@mui/material";

// for table
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { RiAdminLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { VscVmActive } from "react-icons/vsc";

// for table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1a73e8",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(id, img, fullname, role, profession, status, view, modify) {
  return { id, img, fullname, role, profession, status, view, modify };
}

const rows = [
  createData(
    1,
    "https://media-exp1.licdn.com/dms/image/C4E03AQH67tAH5uO_yw/profile-displayphoto-shrink_800_800/0/1619600525688?e=2147483647&v=beta&t=3u7yPmlJP_5REPpBlx3SZE7C4IbxKY55fxuSGDTqO8g",
    "JM Sevilla",
    "Super Admin",
    "Software Engineer Lead",
    "Active",
    <AppButton buttonName="View Info" size="small" variant="contained" />,
    <AppButton
      buttonName="inactive"
      size="small"
      style={{ backgroundColor: "red", color: "white" }}
    />
  ),
  createData(
    2,
    "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/225686070_2353328224801573_7008311860898386965_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TrMFf8gKptkAX92QuRn&_nc_ht=scontent.fmnl16-1.fna&oh=00_AT-bPETmSsmX3n8AMj_xQAf--aSzfIxRDI81m6vCFybCfA&oe=63432C4A",
    "Bryan Palad",
    "Admin",
    "Front End Developer",
    "Active",
    <AppButton buttonName="View Info" size="small" variant="contained" />,
    <AppButton
      buttonName="inactive"
      size="small"
      style={{ backgroundColor: "red", color: "white" }}
    />
  ),
  createData(
    3,
    "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-1/263330594_5350444301649337_4848763255940540503_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=aISKt6dTSvAAX-xCl2y&_nc_ht=scontent.fmnl16-1.fna&oh=00_AT8WGcxg1Bt7dwBYBmfMhqws8631h92K5LHuJZrj3r7NmQ&oe=63443CAB",
    "Cid John Villanueva",
    "Admin",
    "Front End Developer",
    "Active",
    <AppButton buttonName="View Info" size="small" variant="contained" />,
    <AppButton
      buttonName="inactive"
      size="small"
      style={{ backgroundColor: "red", color: "white" }}
    />
  ),
  createData(
    4,
    "",
    "Cid John Villanueva",
    "Admin",
    "Front End Developer",
    "Active",
    <AppButton buttonName="View Info" size="small" variant="contained" />,
    <AppButton
      buttonName="inactive"
      size="small"
      style={{ backgroundColor: "red", color: "white" }}
    />
  ),
  createData(
    5,
    "",
    "Cid John Villanueva",
    "Admin",
    "Front End Developer",
    "Active",
    <AppButton buttonName="View Info" size="small" variant="contained" />,
    <AppButton
      buttonName="inactive"
      size="small"
      style={{ backgroundColor: "red", color: "white" }}
    />
  ),
];

// document.addEventListener("DOMContentLoaded", () => {
//   function counter(id, start, end, duration) {
//    let obj = document.getElementById(id),
//     current = start,
//     range = end - start,
//     increment = end > start ? 1 : -1,
//     step = Math.abs(Math.floor(duration / range)),
//     timer = setInterval(() => {
//      current += increment;
//      obj.textContent = current;
//      if (current == end) {
//       clearInterval(timer);
//      }
//     }, step);
//   }
//   counter("count1", 0, 200, 2000);
//   counter("count2", 0, 350, 2500);
//   counter("count3", 0, 100, 2500);
//   counter("count4", 0, 650, 3000);
//  });

const UsersList = () => {
  return (
    <>
      {/* Contents */}
      <Box className="flex flex-col gap-6 lg:flex-row">
        <Box className="grid grid-cols-2 gap-x-6 gap-y-6 w-full lg:w-1/2">
          <ApplicationCard
            children={
              <CardContent className="flex bg-blue h-full w-full">
                <Box className="flex flex-col justify-between w-full h-full">
                  <h3 className="text-white font-main text-lg">
                    <Box className="flex gap-1 items-center">
                      <RiAdminLine /> Admins
                    </Box>
                  </h3>
                  <span
                    id="count1"
                    className="text-white font-subtitle font-bold text-5xl text-right"
                  >
                    200
                  </span>
                </Box>
              </CardContent>
            }
          />
          <ApplicationCard
            children={
              <CardContent className="flex h-full w-full">
                <Box className="flex flex-col justify-between w-full h-full">
                  <h3 className="text-black font-main text-lg">
                    <Box className="flex gap-1 items-center">
                      <AiOutlineCodeSandbox /> Developers
                    </Box>
                  </h3>
                  <span
                    id="count2"
                    className="text-black font-subtitle font-bold text-5xl text-right"
                  >
                    350
                  </span>
                </Box>
              </CardContent>
            }
          />
          <ApplicationCard
            children={
              <CardContent className="flex h-full w-full">
                <Box className="flex flex-col justify-between w-full h-full">
                  <h3 className="text-black font-main text-lg">
                    <Box className="flex gap-1 items-center">
                      <BsPeople /> Clients
                    </Box>
                  </h3>
                  <span
                    id="count3"
                    className="text-black font-subtitle font-bold text-5xl text-right"
                  >
                    150
                  </span>
                </Box>
              </CardContent>
            }
          />
          <ApplicationCard
            children={
              <CardContent className="flex h-full w-full">
                <Box className="flex flex-col justify-between w-full h-full">
                  <h3 className="text-black font-main text-lg">
                    <Box className="flex gap-1 items-center">
                      <VscVmActive /> Total Active
                    </Box>
                  </h3>
                  <span
                    id="count4"
                    className="text-black font-subtitle font-bold text-5xl text-right"
                  >
                    600
                  </span>
                </Box>
              </CardContent>
            }
          />
        </Box>
        <TableContainer component={Paper} className="w-full lg:w-1/2">
          <Table className="w-auto lg:w-full" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Full Name</StyledTableCell>
                <StyledTableCell align="left">Role</StyledTableCell>
                <StyledTableCell align="left">Profession</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="left">
                    <Box className="flex flex-col gap-1.5 items-center lg:flex-row">
                      <Avatar src={row.img} alt="" />
                      {row.fullname}
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.role}</StyledTableCell>
                  <StyledTableCell align="left">
                    {row.profession}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.status}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Box className="flex flex-col gap-1 justify-center lg:flex-row">
                      {row.view} {row.modify}
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default UsersList;
