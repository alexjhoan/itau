import {
  Box,
  Container,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
  Grid
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { NextPage } from 'next'
import React, { useState } from 'react'
import AutoCard from '../components/AutoCard'
import Search from '../components/Search'

const Buscador: NextPage = () => {
  const [item, setItem] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value as string)
  }

  return (
    <Box sx={{ background: grey[100] }}>
      <Search subTitle={'Agregá filtros a tu búsqueda:'} />
      <Container maxWidth={'lg'} sx={{ pb: 10 }}>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          py={2}
          flexWrap={'wrap'}
          columnGap={2}
        >
          <Typography variant="body1" color="text.secondary">
            Mostrando 1 - 12 de 60 resultados
          </Typography>
          <Box display={'flex'} alignItems={'center'}>
            <Typography variant="body1" color="text.secondary" mr={2}>
              Ordenar por:
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              displayEmpty
              value={item}
              onChange={handleChange}
              sx={{ minWidth: 150 }}
            >
              <MenuItem value="" disabled>
                Selecionar
              </MenuItem>
              <MenuItem value={'vistos'}>Más vistos</MenuItem>
              <MenuItem value={'marca'}>Marca</MenuItem>
              <MenuItem value={'precio'}>Menor precio</MenuItem>
            </Select>
          </Box>
        </Stack>
        <Grid container spacing={4}>
          {Array(12)
            .fill(1)
            .map((e, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <AutoCard id={i} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Buscador
