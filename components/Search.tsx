import React, { useState } from 'react'
import {
  Box,
  Container,
  styled,
  Typography,
  Grid,
  Button,
  TextField,
  FormControl,
  SelectChangeEvent
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { grey } from '@mui/material/colors'
import { formSearchInitTypes, SearchTypes } from '../types/components'
import CustomSelect from './CustomSelect'

const StyledSearch = styled(Box)(({ theme }) => ({
  backgroundColor: grey[300],
  padding: theme.spacing(5, 0),
  '& .title': {
    display: 'flex',
    alignItems: 'center',
    columnGap: theme.spacing(1),
    marginBottom: theme.spacing(3.5),
    '& .MuiSvgIcon-root': {
      fontSize: 40
    }
  }
}))

const StyledSelect = styled(FormControl)(({ theme }) => ({
  width: '100%',
  background: theme.palette.common.white,
  borderRadius: theme.spacing(0.5)
}))

const formInit = {
  typeCar: [],
  brandCar: [],
  stateCar: [],
  min: '',
  max: ''
}

const Search = ({ title, subTitle, onClick }: SearchTypes) => {
  const [form, setForm] = useState<formSearchInitTypes>(formInit)

  const handleChange = (event: SelectChangeEvent<typeof form> | any, typeInput: string) => {
    const {
      target: { value }
    } = event
    console.log(value)
    setForm({ ...form, [typeInput]: value })
  }

  const typesCar = ['Autos', 'Camionetas', 'Compactos', 'Deportivos', 'Motos']
  const brandsCar = ['Audi', 'BMW', 'Brillance']
  const statesCar = ['Nuevo', 'Usado']

  return (
    <StyledSearch>
      <Container maxWidth={'lg'}>
        {title && (
          <Typography variant="h4" color="secondary" className="title">
            <SearchIcon />
            {title}
          </Typography>
        )}
        <Typography variant="h5" mb={2.5}>
          {subTitle}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} lg={2}>
            <CustomSelect
              label={'Tipo de vehículo'}
              listItems={typesCar}
              value={form.typeCar}
              onChange={(e: SelectChangeEvent) => handleChange(e, 'typeCar')}
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={2}>
            <CustomSelect
              label={'Marca'}
              listItems={brandsCar}
              value={form.brandCar}
              onChange={(e: SelectChangeEvent) => handleChange(e, 'brandCar')}
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={2}>
            <CustomSelect
              label={'Estado'}
              listItems={statesCar}
              value={form.stateCar}
              onChange={(e: SelectChangeEvent) => handleChange(e, 'stateCar')}
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={4}>
            <Box display={'flex'} width={'100%'} alignItems={'center'} gap={1}>
              <TextField
                type={'number'}
                label="Min (Gs.)"
                sx={{ backgroundColor: '#fff', width: '100%' }}
                onChange={(e) => handleChange(e, 'min')}
                value={form.min}
              />
              <span>-</span>
              <TextField
                type={'number'}
                label="Max (Gs.)"
                sx={{ backgroundColor: '#fff', width: '100%' }}
                onChange={(e) => handleChange(e, 'max')}
                value={form.max}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} lg={2}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ height: 55 }}
              onClick={onClick}
            >
              Buscar
            </Button>
          </Grid>
        </Grid>
      </Container>
    </StyledSearch>
  )
}

export default Search
