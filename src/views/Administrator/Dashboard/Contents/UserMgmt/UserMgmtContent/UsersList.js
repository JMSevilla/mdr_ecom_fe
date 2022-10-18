import React from "react";
import { Box } from "@mui/material";
import { AppButton, ApplicationCard, ProjectTable } from "../../../../../../components";
import Avatar from "@mui/material/Avatar";
import { CardContent } from "@mui/material";

//icons
import { RiAdminLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { VscVmActive } from "react-icons/vsc";

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  {
    field: 'fullName',
    headerName: 'FullName',
    width: 180,
    renderCell: (params) => (
      <Box className='flex gap-2 items-center'>
      <Avatar src={params.row.image} alt=''/>
      {params.row.fullName}
      </Box>
  ) 
  },
  {
    field: 'role',
    headerName: 'Role',
    width: 150,
  },
  {
    field: 'profession',
    headerName: 'Profession',
    width: 200,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 110,
  },
  {
    headerName: 'Actions',
    flex: 1,
    minWidth: 210,
    renderCell: (params) => (
        <Box className='flex gap-1'>
            <AppButton 
                buttonName={'view info'}
                style={{
                    width: '100%',
                }}
                variant={'contained'}
                color={'primary'}
                size={'small'}
            />
             <AppButton 
                buttonName={'inactive'}
                style={{
                    width: '100%',
                }}
                variant={'contained'}
                color={'error'}
                size={'small'}
            />
        </Box>
    )
}
];

const rows = [
  { id: 1, image: "https://media-exp1.licdn.com/dms/image/C4E03AQH67tAH5uO_yw/profile-displayphoto-shrink_800_800/0/1619600525688?e=2147483647&v=beta&t=3u7yPmlJP_5REPpBlx3SZE7C4IbxKY55fxuSGDTqO8g", fullName: "JM Sevilla", role: 'Super Admin', profession: 'Software Engineer Lead', status: 'Active'},
  { id: 2, image: "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/225686070_2353328224801573_7008311860898386965_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TrMFf8gKptkAX92QuRn&_nc_ht=scontent.fmnl16-1.fna&oh=00_AT-bPETmSsmX3n8AMj_xQAf--aSzfIxRDI81m6vCFybCfA&oe=63432C4A", fullName: "Bryan Palad", role: 'Admin', profession: 'Front End Developer', status: 'Active'},
  { id: 3, image: "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-1/263330594_5350444301649337_4848763255940540503_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=aISKt6dTSvAAX-xCl2y&_nc_ht=scontent.fmnl16-1.fna&oh=00_AT8WGcxg1Bt7dwBYBmfMhqws8631h92K5LHuJZrj3r7NmQ&oe=63443CAB", fullName: "Cid John Villanueva", role: 'Admin', profession: 'Front End Developer', status: 'Active'},
];


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
                    className="text-black font-subtitle font-bold text-5xl text-right"
                  >
                    600
                  </span>
                </Box>
              </CardContent>
            }
          />
        </Box>
        <ProjectTable dataRow={rows} dataColumns={columns}/>
      </Box>
    </>
  );
};

export default UsersList;
