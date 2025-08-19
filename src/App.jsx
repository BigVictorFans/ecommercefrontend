import React from 'react';
import { Typography } from '@mui/material';
import {Box} from '@mui/system';
import {Button} from '@mui/material';
import { Grid } from '@mui/material';
import {Paper} from '@mui/material';
import Chip from '@mui/material/Chip';


function App() {

  return (
    <>
      <Typography variant="h4" sx={{fontWeight:"bold", textAlign:"center", p:"10px"}}>Welcome To My Store</Typography>
      <hr />
      <Box sx={{display:"flex", justifyContent:"space-between"}}>
          <Typography variant="h6" sx={{fontWeight:"bold", textAlign:"center", p:"10px"}}>Products</Typography>
          <Button variant="contained" color="success" sx={{margin:"20px"}}>Add New</Button>
      </Box>
      <Box sx={{display:"flex", justifyContent:"start"}}>
          <select name="categories" id="categories">
            <option value="All">All Categories</option>
          </select>
      </Box>
      
      <Grid container spacing={0}>
        {/* one paper */}
        <Grid size={{ xs: 12, md: 6, lg: 4 }} item>
          <Paper sx={{border:"1px solid #ccc", padding:"10px", margin:"20px"}}>
            <Typography variant="h6" sx={{fontWeight:"bold", textAlign:"start", p:"10px"}}>Product Name</Typography>
            <Box sx={{display:"flex", justifyContent:"space-between", m:"10px"}}>
                <Chip sx={{background:"#dfd", color:"green", fontWeight:"bold"}} label="$10.99" />
                <Chip sx={{background:"#FFDBBB", color:"orange", fontWeight:"bold"}} label="Games" />
            </Box>
            <Button variant="contained" color="primary" sx={{my:"10px", width:"100%"}}>Add To Cart</Button>
            <Box sx={{display:"flex", justifyContent:"space-between", m:"10px"}}>
                <Chip sx={{background:"blue", color:"white", fontWeight:"bold"}} label="Edit" />
                <Chip sx={{background:"red", color:"white", fontWeight:"bold"}} label="Delete" />
            </Box>
          </Paper>
        </Grid>
        {/* one paper */}
        <Grid size={{ xs: 12, md: 6, lg: 4 }} item>
          <Paper sx={{border:"1px solid #ccc", padding:"10px", margin:"20px"}}>
            <Typography variant="h6" sx={{fontWeight:"bold", textAlign:"start", p:"10px"}}>Product Name</Typography>
            <Box sx={{display:"flex", justifyContent:"space-between", m:"10px"}}>
                <Chip sx={{background:"#dfd", color:"green", fontWeight:"bold"}} label="$10.99" />
                <Chip sx={{background:"#FFDBBB", color:"orange", fontWeight:"bold"}} label="Games" />
            </Box>
            <Button variant="contained" color="primary" sx={{my:"10px", width:"100%"}}>Add To Cart</Button>
            <Box sx={{display:"flex", justifyContent:"space-between", m:"10px"}}>
                <Chip sx={{background:"blue", color:"white", fontWeight:"bold"}} label="Edit" />
                <Chip sx={{background:"red", color:"white", fontWeight:"bold"}} label="Delete" />
            </Box>
          </Paper>
        </Grid>
        {/* one paper */}
        <Grid size={{ xs: 12, md: 6, lg: 4 }} item>
          <Paper sx={{border:"1px solid #ccc", padding:"10px", margin:"20px"}}>
            <Typography variant="h6" sx={{fontWeight:"bold", textAlign:"start", p:"10px"}}>Product Name</Typography>
            <Box sx={{display:"flex", justifyContent:"space-between", m:"10px"}}>
                <Chip sx={{background:"#dfd", color:"green", fontWeight:"bold"}} label="$10.99" />
                <Chip sx={{background:"#FFDBBB", color:"orange", fontWeight:"bold"}} label="Games" />
            </Box>
            <Button variant="contained" color="primary" sx={{my:"10px", width:"100%"}}>Add To Cart</Button>
            <Box sx={{display:"flex", justifyContent:"space-between", m:"10px"}}>
                <Chip sx={{background:"blue", color:"white", fontWeight:"bold"}} label="Edit" />
                <Chip sx={{background:"red", color:"white", fontWeight:"bold"}} label="Delete" />
            </Box>
          </Paper>
        </Grid>
        {/* one paper */}
        <Grid size={{ xs: 12, md: 6, lg: 4 }} item>
          <Paper sx={{border:"1px solid #ccc", padding:"10px", margin:"20px"}}>
            <Typography variant="h6" sx={{fontWeight:"bold", textAlign:"start", p:"10px"}}>Product Name</Typography>
            <Box sx={{display:"flex", justifyContent:"space-between", m:"10px"}}>
                <Chip sx={{background:"#dfd", color:"green", fontWeight:"bold"}} label="$10.99" />
                <Chip sx={{background:"#FFDBBB", color:"orange", fontWeight:"bold"}} label="Games" />
            </Box>
            <Button variant="contained" color="primary" sx={{my:"10px", width:"100%"}}>Add To Cart</Button>
            <Box sx={{display:"flex", justifyContent:"space-between", m:"10px"}}>
                <Chip sx={{background:"blue", color:"white", fontWeight:"bold"}} label="Edit" />
                <Chip sx={{background:"red", color:"white", fontWeight:"bold"}} label="Delete" />
            </Box>
          </Paper>
        </Grid>
        {/* one paper */}
        <Grid size={{ xs: 12, md: 6, lg: 4 }} item>
          <Paper sx={{border:"1px solid #ccc", padding:"10px", margin:"20px"}}>
            <Typography variant="h6" sx={{fontWeight:"bold", textAlign:"start", p:"10px"}}>Product Name</Typography>
            <Box sx={{display:"flex", justifyContent:"space-between", m:"10px"}}>
                <Chip sx={{background:"#dfd", color:"green", fontWeight:"bold"}} label="$10.99" />
                <Chip sx={{background:"#FFDBBB", color:"orange", fontWeight:"bold"}} label="Games" />
            </Box>
            <Button variant="contained" color="primary" sx={{my:"10px", width:"100%"}}>Add To Cart</Button>
            <Box sx={{display:"flex", justifyContent:"space-between", m:"10px"}}>
                <Chip sx={{background:"blue", color:"white", fontWeight:"bold"}} label="Edit" />
                <Chip sx={{background:"red", color:"white", fontWeight:"bold"}} label="Delete" />
            </Box>
          </Paper>
        </Grid>
        {/* one paper */}
        <Grid size={{ xs: 12, md: 6, lg: 4 }} item>
          <Paper sx={{border:"1px solid #ccc", padding:"10px", margin:"20px"}}>
            <Typography variant="h6" sx={{fontWeight:"bold", textAlign:"start", p:"10px"}}>Product Name</Typography>
            <Box sx={{display:"flex", justifyContent:"space-between", m:"10px"}}>
                <Chip sx={{background:"#dfd", color:"green", fontWeight:"bold"}} label="$10.99" />
                <Chip sx={{background:"#FFDBBB", color:"orange", fontWeight:"bold"}} label="Games" />
            </Box>
            <Button variant="contained" color="primary" sx={{my:"10px", width:"100%"}}>Add To Cart</Button>
            <Box sx={{display:"flex", justifyContent:"space-between", m:"10px"}}>
                <Chip sx={{background:"blue", color:"white", fontWeight:"bold"}} label="Edit" />
                <Chip sx={{background:"red", color:"white", fontWeight:"bold"}} label="Delete" />
            </Box>
          </Paper>
        </Grid>
        {/* one paper */}
        <Grid size={{ xs: 12, md: 6, lg: 4 }} item>
          <Paper sx={{border:"1px solid #ccc", padding:"10px", margin:"20px"}}>
            <Typography variant="h6" sx={{fontWeight:"bold", textAlign:"start", p:"10px"}}>Product Name</Typography>
            <Box sx={{display:"flex", justifyContent:"space-between", m:"10px"}}>
                <Chip sx={{background:"#dfd", color:"green", fontWeight:"bold"}} label="$10.99" />
                <Chip sx={{background:"#FFDBBB", color:"orange", fontWeight:"bold"}} label="Games" />
            </Box>
            <Button variant="contained" color="primary" sx={{my:"10px", width:"100%"}}>Add To Cart</Button>
            <Box sx={{display:"flex", justifyContent:"space-between", m:"10px"}}>
                <Chip sx={{background:"blue", color:"white", fontWeight:"bold"}} label="Edit" />
                <Chip sx={{background:"red", color:"white", fontWeight:"bold"}} label="Delete" />
            </Box>
          </Paper>
        </Grid>
        {/* one paper */}
        <Grid size={{ xs: 12, md: 6, lg: 4 }} item>
          <Paper sx={{border:"1px solid #ccc", padding:"10px", margin:"20px"}}>
            <Typography variant="h6" sx={{fontWeight:"bold", textAlign:"start", p:"10px"}}>Product Name</Typography>
            <Box sx={{display:"flex", justifyContent:"space-between", m:"10px"}}>
                <Chip sx={{background:"#dfd", color:"green", fontWeight:"bold"}} label="$10.99" />
                <Chip sx={{background:"#FFDBBB", color:"orange", fontWeight:"bold"}} label="Games" />
            </Box>
            <Button variant="contained" color="primary" sx={{my:"10px", width:"100%"}}>Add To Cart</Button>
            <Box sx={{display:"flex", justifyContent:"space-between", m:"10px"}}>
                <Chip sx={{background:"blue", color:"white", fontWeight:"bold"}} label="Edit" />
                <Chip sx={{background:"red", color:"white", fontWeight:"bold"}} label="Delete" />
            </Box>
          </Paper>
        </Grid>
        {/* one paper */}
        <Grid size={{ xs: 12, md: 6, lg: 4 }} item>
          <Paper sx={{border:"1px solid #ccc", padding:"10px", margin:"20px"}}>
            <Typography variant="h6" sx={{fontWeight:"bold", textAlign:"start", p:"10px"}}>Product Name</Typography>
            <Box sx={{display:"flex", justifyContent:"space-between", m:"10px"}}>
                <Chip sx={{background:"#dfd", color:"green", fontWeight:"bold"}} label="$10.99" />
                <Chip sx={{background:"#FFDBBB", color:"orange", fontWeight:"bold"}} label="Games" />
            </Box>
            <Button variant="contained" color="primary" sx={{my:"10px", width:"100%"}}>Add To Cart</Button>
            <Box sx={{display:"flex", justifyContent:"space-between", m:"10px"}}>
                <Chip sx={{background:"blue", color:"white", fontWeight:"bold"}} label="Edit" />
                <Chip sx={{background:"red", color:"white", fontWeight:"bold"}} label="Delete" />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default App