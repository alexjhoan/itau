import React, { useState } from 'react'
import {
  Box,
  Container,
  styled,
  Typography,
  Grid,
  Button,
  Checkbox,
  TextField,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  SelectChangeEvent,
  MenuItem,
  ListItemText
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { grey } from '@mui/material/colors'
import { formSearchInitTypes, SearchTypes } from '../types/components'

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
            <StyledSelect>
              <InputLabel id="demo-multiple-checkbox-label">Tipo de vehículo</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={form.typeCar}
                onChange={(e) => handleChange(e, 'typeCar')}
                renderValue={(selected) => selected.join(', ')}
                input={<OutlinedInput label="Tipo de vehículo" />}
              >
                {typesCar.map((type) => (
                  <MenuItem key={type} value={type}>
                    <Checkbox checked={form.typeCar.indexOf(type) > -1} />
                    <ListItemText primary={type} />
                  </MenuItem>
                ))}
              </Select>
            </StyledSelect>
          </Grid>
          <Grid item xs={12} sm={4} lg={2}>
            <StyledSelect>
              <InputLabel id="demo-multiple-checkbox-label">Marca</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={form.brandCar}
                onChange={(e) => handleChange(e, 'brandCar')}
                renderValue={(selected) => selected.join(', ')}
                input={<OutlinedInput label="Marca" />}
              >
                {brandsCar.map((brand) => (
                  <MenuItem key={brand} value={brand}>
                    <Checkbox checked={form.brandCar.indexOf(brand) > -1} />
                    <ListItemText primary={brand} />
                  </MenuItem>
                ))}
              </Select>
            </StyledSelect>
          </Grid>
          <Grid item xs={12} sm={4} lg={2}>
            <StyledSelect>
              <InputLabel id="demo-multiple-checkbox-label">Estado</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={form.stateCar}
                onChange={(e) => handleChange(e, 'stateCar')}
                renderValue={(selected) => selected.join(', ')}
                input={<OutlinedInput label="Estado" />}
              >
                {statesCar.map((state) => (
                  <MenuItem key={state} value={state}>
                    <Checkbox checked={form.stateCar.indexOf(state) > -1} />
                    <ListItemText primary={state} />
                  </MenuItem>
                ))}
              </Select>
            </StyledSelect>
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
