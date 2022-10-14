import React, { useState } from 'react'
import Container from '@mui/material/Container'
import { grey } from '@mui/material/colors'
import {
  Box,
  Typography,
  Grid,
  Button,
  InputAdornment,
  useTheme,
  Stack,
  SelectChangeEvent,
  TableContainer,
  TableHead,
  Table,
  TableCell,
  TableRow,
  TableBody,
  IconButton,
  styled,
  useMediaQuery
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { FancyInput } from '../../components/FancyInput'
import { CustomSelect } from '../../components/CustomSelect'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
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

const Carlist = () => {
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.down('sm'))
  const [item, setItem] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value as string)
  }

  const rows = Array(10).fill({
    id: 1,
    carName: 'Fiat Strada Working Cab Corta',
    price: 'Gs. 000.000.000',
    state: 'nuevo',
    actions: 'Acciones'
  })

  return (
    <>
      <Box sx={{ backgroundColor: grey[300], padding: theme.spacing(5, 0) }}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom>
            Vehículos
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <FancyInput
                placeholder="Busca vehículos por nombre, marca, etc."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button variant="contained" color="primary" fullWidth={isXs ? true : false}>
                Buscar
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 242px)' }}>
        <Stack
          direction={'row'}
          justifyContent={isXs ? 'center' : 'space-between'}
          alignItems={'flex-end'}
          py={2}
          flexWrap={'wrap'}
          gap={2}
        >
          <Button variant="contained">
            <AddIcon sx={{ mr: 1 }} /> Nuevo vehículo
          </Button>
          <Box
            display={'flex'}
            alignItems={isXs ? 'flex-end' : 'center'}
            flexDirection={isXs ? 'column' : 'row'}
          >
            <Typography variant="body1" color="text.secondary" mr={isXs ? 0 : 2}>
              Ordenar por:
            </Typography>
            <CustomSelect
              listItems={['vistos', 'marca', 'precio']}
              value={item}
              onChange={handleChange}
            />
          </Box>
        </Stack>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre vehículo</TableCell>
                {!isXs && (
                  <>
                    <TableCell>Precio</TableCell>
                    <TableCell align="center">Estado</TableCell>
                  </>
                )}
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: theme.palette.common.white }}>
              {rows.map((row, i) => (
                <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.carName}
                  </TableCell>
                  {!isXs && (
                    <>
                      <TableCell>{row.price}</TableCell>
                      <TableCell align="center">{row.state}</TableCell>
                    </>
                  )}
                  <TableCell align="right" sx={{ py: 0 }}>
                    <Stack
                      direction={'row'}
                      justifyContent={'flex-end'}
                      alignItems={'center'}
                      columnGap={1}
                    >
                      <IconButton onClick={() => console.log(i + row.id)}>
                        <EditIcon color="primary" />
                      </IconButton>
                      <IconButton onClick={() => console.log(i + row.id)}>
                        <DeleteIcon color="primary" />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack
          direction={'row'}
          justifyContent={'flex-end'}
          alignItems={'center'}
          py={4}
          columnGap={2}
        >
          {!isXs && (
            <Typography variant="body1" sx={{ color: grey[500] }}>
              Mostrando 1 - 10 de 60 resultados
            </Typography>
          )}
          <StyledIcon>
            <ChevronLeftIcon />
          </StyledIcon>
          <StyledIcon>
            <ChevronRightIcon />
          </StyledIcon>
        </Stack>
      </Container>
    </>
  )
}

export default Carlist
