import React, {useState, useEffect, useContext} from "react";
import { Box } from "@mui/material";
import {
  ApplicationCard,
  AppButton,
  AppTextField,
  SystemGrid,
  SystemSelect, SystemContainer
} from "../../../../../components";
import { CardContent } from "@mui/material";
import { projectCategory, projectType, techStack, featuresList } from "../../../../../core/utils/helper";
import AdminNavbar from "../../Navbar/Navbar";
import AdminSidebar from "../../SideBar/Sidebar";
import { useHistory } from "react-router-dom";
import { appAdminRouter } from "../../../../../routes/router";
import { GlobalContext } from "../../../../../core/context/GlobalContext";
import { localstoragehelper } from "../../../../../core/utils/storage";
import { useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { DrawerHeader, Drawer, AppBar } from "../../../../../components/Drawer/Drawer";
import {motion} from 'framer-motion';

// use for features
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

// for chips
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

// for features
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AddProduct = () => {
  const globalcontextValues = useContext(GlobalContext)
  const { token, tokenScanned, settings } = globalcontextValues
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const key = localstoragehelper.load('key_identifier')

  // for features
  const [feature, setfeature] = useState([]);
  const handleChangeFeature = (event) => {
    const {
      target: { value },
    } = event;
    setfeature(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [technologies, setTechnologies] = useState([]);

  const handleChangeTechnologies = (event) => {
    const {
      target: { value },
    } = event;
    setTechnologies(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const history = useHistory()

  useEffect(() => {
    window.addEventListener('resize' , () => {
      return window.innerWidth < 1024 ? setOpen(false) : setOpen(true)
  })
  },[])

  const signoutRouteDestroy = () => {
    const tempAllFieldSelected = [...settings];
    const tempFieldSelected = { ...tempAllFieldSelected[0] };
    history.push(tempFieldSelected.router_obj.home)
  }
  
  const handleClick = () => {
    setDropDown(!dropDown);
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigateToProductList = () => {
    history.push(appAdminRouter.ProductMgmt.path);
  }

  return (

    <Box className='flex'>
    <CssBaseline />
   <AdminNavbar signoutRouteDestroy={signoutRouteDestroy} token={token} open={open} handleDrawerOpen={handleDrawerOpen} AppBar={AppBar} />
    <AdminSidebar open={open} handleDrawerClose={handleDrawerClose} theme={theme} handleClick={handleClick} dropDown={dropDown} Drawer={Drawer} DrawerHeader={DrawerHeader}/>
    {/* CONTENTS */}
    <Box component="main" sx={{ flexGrow: 1, p: 3 }} className='flex justify-center h-[100vh]'>
      <DrawerHeader />
      <SystemContainer
      className='mt-20'
      maxWidth={'xl'}
      > 
       <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
       <Box className="bg-white p-6">
      <Box className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold font-main text-black uppercase">
          Add Product
        </h1>
        {/* CARDS */}
        <Box className="flex flex-col gap-4 lg:flex-row">
          {/* LEFT SIDE CARD */}
          <ApplicationCard
            className="p-2 w-full lg:w-1/2"
            children={
              <CardContent>
                <Box className="flex flex-col">
                  <SystemGrid
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    xs={12}
                    lg={6}
                    GridItems={[
                      {
                        childrenId: 1,
                        children: (
                          <AppTextField
                            style={{
                              marginTop: "10px",
                              marginBottom: "20px",
                              width: "100%",
                            }}
                            variant={"outlined"}
                            label={"Product Name"}
                          />
                        ),
                      },
                      {
                        childrenId: 2,
                        children: (
                          <SystemSelect
                            selectionArray={projectCategory}
                            selectionLabel={"Select Project Category"}
                            selectionTitle={"Project Category"}
                            style={{ marginTop: "10px", marginBottom: "20px" }}
                          />
                        ),
                      },
                    ]}
                  />
                  <SystemGrid
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    xs={12}
                    lg={6}
                    GridItems={[
                      {
                        childrenId: 1,
                        children: (
                            <AppTextField
                            style={{
                              marginTop: "10px",
                              marginBottom: "20px",
                              width: "100%",
                            }}
                            variant={"outlined"}
                            label={"Price"}
                          />
                        ),
                      },
                      {
                        childrenId: 2,
                        children: (
                            <SystemSelect
                            selectionArray={projectType}
                            selectionLabel={"Select Project Category"}
                            selectionTitle={"Project Scale"}
                            style={{ marginTop: "10px", marginBottom: "20px" }}
                          />
                        ),
                      },
                    ]}
                  />
                  <AppTextField
                    style={{
                      marginTop: "10px",
                      marginBottom: "30px",
                      width: "100%",
                    }}
                    variant={"outlined"}
                    label={"Description"}
                    ismultiLine={true}
                    rows={6}
                  />
                 <div>
                  <FormControl sx={{ width: '100%' }}>
                    <InputLabel id="demo-multiple-checkbox-label">Technologies</InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={technologies}
                      onChange={handleChangeTechnologies}
                      input={<OutlinedInput label="Technologies" />}
                      renderValue={(selected) => selected.join(', ')}
                      MenuProps={MenuProps}
                    >
                      {techStack.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={technologies.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                </Box>
              </CardContent>
            }
          />

          {/* RIGHT SIDE CARD */}
          <ApplicationCard
            className="p-2 w-full lg:w-1/2"
            children={
              <CardContent>
                <Box className='mb-12'>
                <label
                    class="flex flex-col w-full h-32 border-4 border-sideBar-200 border-dashed hover:bg-black-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Upload images</p>
                    </div>
                    <input type="file" class="opacity-0" />
                </label>
                </Box>
                <div>
                    <FormControl sx={{ width: '100%' }}>
                      <InputLabel id="demo-multiple-chip-label">System Features</InputLabel>
                      <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={feature}
                        onChange={handleChangeFeature}
                        input={<OutlinedInput id="select-multiple-chip" label="System Features" />}
                        renderValue={(selected) => (
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))}
                          </Box>
                        )}
                        MenuProps={MenuProps}
                      >
                        {featuresList.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, feature, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
              </CardContent>
            }
          />
        </Box>
        <Box className='flex items-center justify-between'>
        <AppButton
          handleClick={navigateToProductList}
          variant="contained"
          buttonName="Back"
          size="medium"
        />
        <AppButton
          variant="contained"
          buttonName="Publish Product"
          size="medium"
        />
        </Box>
      </Box>
    </Box>
    </motion.div>
      </SystemContainer>
    </Box>
  </Box>

  );
};

export default AddProduct;
