import {
  Box,
  Container,
  SelectChangeEvent,
  Stack,
  Typography,
  Grid,
  styled,
  IconButton
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { NextPage } from 'next'
import React, { useState } from 'react'
import AutoCard from '../components/AutoCard'
import { CustomSelect } from '../components/CustomSelect'
import Search from '../components/Search'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const StyledIcon = styled(IconButton)(({ theme }) => ({
  backgroundColor: grey[500],
  borderRadius: theme.spacing(1),
  padding: theme.spacing(0.4),
  '& svg': {
    fontSize: 30,
    color: theme.palette.common.white
  },
  '&:hover': {
    backgroundColor: `${grey[500]}b0`
  }
}))

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
            <CustomSelect
              listItems={['vistos', 'marca', 'precio']}
              value={item}
              onChange={handleChange}
            />
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
        <Stack
          direction={'row'}
          justifyContent={'flex-end'}
          alignItems={'center'}
          py={4}
          columnGap={2}
        >
          <Typography variant="body1" sx={{ color: grey[500] }}>
            Mostrando 1 - 12 de 60 resultados
          </Typography>
          <StyledIcon>
            <ChevronLeftIcon />
          </StyledIcon>
          <StyledIcon>
            <ChevronRightIcon />
          </StyledIcon>
        </Stack>
      </Container>
    </Box>
  )
}

export default Buscador
