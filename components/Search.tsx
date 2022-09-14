import React, { useState } from 'react'
import {
  Box,
  Container,
  styled,
  Typography,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Popper,
  TextField,
  Grow
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { grey } from '@mui/material/colors'

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

const StyledBtnDropdown = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  justifyContent: 'space-between',
  color: theme.palette.text.primary,
  borderRadius: theme.spacing(1),
  height: 56,
  '&:hover': {
    backgroundColor: `${theme.palette.common.white}b0`
  }
}))

const StyledDropdown = styled(FormGroup)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  boxShadow: `0 5px 10px ${theme.palette.common.black}80`
}))

interface SearchDropDownsTypes {
  type: {
    anchorEl: null | HTMLElement
    open: boolean
    width: number
  }
  brand: {
    anchorEl: null | HTMLElement
    open: boolean
    width: number
  }
  state: {
    anchorEl: null | HTMLElement
    open: boolean
    width: number
  }
}

const dropDownsInit = {
  type: {
    anchorEl: null,
    open: false,
    width: 0
  },
  brand: {
    anchorEl: null,
    open: false,
    width: 0
  },
  state: {
    anchorEl: null,
    open: false,
    width: 0
  }
}

const Search = () => {
  const [nuevo, setNuevo] = useState<SearchDropDownsTypes>(dropDownsInit)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, elemento: any) => {
    setNuevo({
      ...nuevo,
      [elemento]: {
        anchorEl: event.currentTarget,
        open: !nuevo[elemento as keyof SearchDropDownsTypes].open,
        width: event.currentTarget.offsetWidth
      }
    })
  }

  return (
    <StyledSearch>
      <Container maxWidth={'lg'}>
        <Typography variant="h4" color="secondary" className="title">
          <SearchIcon />
          Buscá tu <b>próximo vehículo</b>
        </Typography>
        <Typography variant="h5" mb={2.5}>
          Seleccioná los filtros para empezar tu búsqueda:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} lg={2}>
            <StyledBtnDropdown
              variant="text"
              fullWidth
              endIcon={<KeyboardArrowDownIcon />}
              onClick={(e) => handleClick(e, 'type')}
            >
              Tipo de vehiculo
            </StyledBtnDropdown>
            <Popper
              open={nuevo.type.open}
              anchorEl={nuevo.type.anchorEl}
              sx={{ width: nuevo.type.width, zIndex: 19 }}
              placement="bottom-start"
              transition
            >
              {({ TransitionProps }) => (
                <Grow {...TransitionProps}>
                  <StyledDropdown>
                    <FormControlLabel control={<Checkbox />} label="Autos" />
                    <FormControlLabel control={<Checkbox />} label="Camioneta" />
                    <FormControlLabel control={<Checkbox />} label="Compacto" />
                    <FormControlLabel control={<Checkbox />} label="Desportivo" />
                    <FormControlLabel control={<Checkbox />} label="Moto" />
                  </StyledDropdown>
                </Grow>
              )}
            </Popper>
          </Grid>
          <Grid item xs={12} sm={4} lg={2}>
            <StyledBtnDropdown
              variant="text"
              fullWidth
              endIcon={<KeyboardArrowDownIcon />}
              onClick={(e) => handleClick(e, 'brand')}
            >
              Marca
            </StyledBtnDropdown>
            <Popper
              open={nuevo.brand.open}
              anchorEl={nuevo.brand.anchorEl}
              placement="bottom-start"
              transition
              sx={{ width: nuevo.type.width, zIndex: 19 }}
            >
              {({ TransitionProps }) => (
                <Grow {...TransitionProps}>
                  <StyledDropdown>
                    <FormControlLabel control={<Checkbox />} label="Audi" />
                    <FormControlLabel control={<Checkbox />} label="BMW" />
                    <FormControlLabel control={<Checkbox />} label="Brillance" />
                    <FormControlLabel control={<Checkbox />} label="BYD" />
                    <FormControlLabel control={<Checkbox />} label="Chana" />
                  </StyledDropdown>
                </Grow>
              )}
            </Popper>
          </Grid>
          <Grid item xs={12} sm={4} lg={2}>
            <StyledBtnDropdown
              variant="text"
              fullWidth
              endIcon={<KeyboardArrowDownIcon />}
              onClick={(e) => handleClick(e, 'state')}
            >
              Estado
            </StyledBtnDropdown>
            <Popper
              open={nuevo.state.open}
              anchorEl={nuevo.state.anchorEl}
              sx={{ width: nuevo.type.width, zIndex: 19 }}
              placement="bottom-start"
              transition
            >
              {({ TransitionProps }) => (
                <Grow {...TransitionProps}>
                  <StyledDropdown>
                    <FormControlLabel control={<Checkbox />} label="Nuevo" />
                    <FormControlLabel control={<Checkbox />} label="Usado" />
                  </StyledDropdown>
                </Grow>
              )}
            </Popper>
          </Grid>
          <Grid item xs={12} sm={8} lg={4}>
            <Box display={'flex'} width={'100%'} alignItems={'center'} gap={1}>
              <TextField
                type={'number'}
                label="Min (Gs.)"
                sx={{ backgroundColor: '#fff', width: '100%' }}
              />
              <span>-</span>
              <TextField
                type={'number'}
                label="Max (Gs.)"
                sx={{ backgroundColor: '#fff', width: '100%' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} lg={2}>
            <Button variant="contained" color="primary" fullWidth sx={{ height: 56 }}>
              Buscar
            </Button>
          </Grid>
        </Grid>
      </Container>
    </StyledSearch>
  )
}

export default Search
