import React, { useState } from 'react';
import { Button } from '../button/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { ButtonGroup, Container, Grid, Item, Typography } from '@mui/material';
export const Counter = ({ initialValue = 0, increment = 1, decrement = 1 }) => {

  const [counter, setCounter] = useState(initialValue);

  return (
    <>
      <Container sx={{ border: 2, bgcolor: '#FF0000' }} maxWidth='lg'>
        <Grid sx={{ m: 0, bgcolor: '#111', color:"white" }} container spacing={2}>
          <Grid md={8} xs={12}>
            <Typography variant='h1' align='center'>Counter</Typography>
          </Grid>
          <Grid md={4} xs={12}>
            <Typography variant='h2' align='center'>{counter}</Typography>
          </Grid>
          <Grid md={12}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button startIcon={<AddCircleOutlineIcon />} setCounter={setCounter} newValue={counter + increment} ></Button>
              <Button startIcon={<RemoveCircleOutlineIcon />} setCounter={setCounter} newValue={counter - decrement} ></Button>
              <Button startIcon={<RestartAltIcon />} setCounter={setCounter} newValue={initialValue} >Reset</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
