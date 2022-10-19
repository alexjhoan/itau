import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import {
  Box,
  Container,
  useTheme,
  Grid,
  styled,
  SelectChangeEvent,
  Divider,
  Stack,
  Button,
  useMediaQuery
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { FancyInput } from '../../components/FancyInput'
import { CustomSelect } from '../../components/CustomSelect'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'

const typesCar = ['Autos', 'Suv', 'Pick Up', 'Van', 'Utilitarios', 'Motos', 'Embarcación']
const brandsCar = ['Audi', 'BMW', 'Brillance']
const statesCar = ['Nuevo', 'Usado']

const StyledcontainerInput = styled(Grid)(({ theme }) => ({
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '25% 75%',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '100%'
  }
}))

const StyledInputFile = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  border: `2px dashed ${grey[400]}`,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  transition: '0.2s',
  overflow: 'hidden',
  backgroundColor: theme.palette.common.white,
  height: 120,
  '& input': {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    cursor: 'pointer',
    opacity: 0,
    zIndex: 3,
    '&:-webkit-file-upload-button': {
      width: 0,
      height: 0,
      padding: 0,
      border: 'none'
    }
  },
  '& .imgPreview': {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: 'auto',
    maxWidth: '100%',
    zIndex: 2
  }
}))

const Carnew = () => {
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.down('sm'))
  const [images, setImages] = useState<string[]>(['', '', '', '', '', ''])
  const [item, setItem] = useState('')
  const [item2, setItem2] = useState('')
  const [item3, setItem3] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value as string)
  }
  const handleChange2 = (event: SelectChangeEvent) => {
    setItem2(event.target.value as string)
  }
  const handleChange3 = (event: SelectChangeEvent) => {
    setItem3(event.target.value as string)
  }
  const imgChange = (e: any, index: number) => {
    const miarray = images.map((item, i) => {
      if (i == index) {
        return URL.createObjectURL(e.target.files[0])
      } else {
        return item
      }
    })
    setImages(miarray)
  }
  const removeImg = () => {
    setImages(['', '', '', '', '', ''])
  }

  return (
    <>
      <Box sx={{ backgroundColor: grey[300], padding: theme.spacing(5, 0) }}>
        <Container maxWidth="lg">
          <Typography variant="h4">Nuevo vehículo</Typography>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Box component={'form'} pb={10}>
          <Typography variant="h5" color="secondary" my={3}>
            Datos del vehículo
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <StyledcontainerInput>
                <Typography variant="body1">*Nombre</Typography>
                <FancyInput />
              </StyledcontainerInput>
              <StyledcontainerInput>
                <Typography variant="body1">*Precio (Gs.)</Typography>
                <FancyInput />
              </StyledcontainerInput>
              <StyledcontainerInput>
                <Typography variant="body1">*Categoría</Typography>
                <CustomSelect
                  listItems={typesCar}
                  value={item}
                  onChange={handleChange}
                  label="Tipo de vehículo"
                />
              </StyledcontainerInput>
              <StyledcontainerInput>
                <Typography variant="body1">*Marca</Typography>
                <CustomSelect
                  listItems={brandsCar}
                  value={item2}
                  onChange={handleChange2}
                  label="Marca del vehículo"
                />
              </StyledcontainerInput>
              <StyledcontainerInput>
                <Typography variant="body1">*Estado</Typography>
                <CustomSelect
                  listItems={statesCar}
                  value={item3}
                  onChange={handleChange3}
                  label="Estado del vehículo"
                />
              </StyledcontainerInput>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'flex-end'}
                mb={3}
              >
                <Typography variant="body1">*Imágenes</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={removeImg}
                  sx={{ minHeight: 30 }}
                >
                  remover imagenes
                </Button>
              </Stack>
              <Grid container spacing={2}>
                {images.map((item, i) => (
                  <Grid item xs={6} sm={4} key={i}>
                    <StyledInputFile>
                      <ImageOutlinedIcon />
                      <Typography color="textSecondary" align="center">
                        Agregar
                        <br />
                        imágenes
                      </Typography>
                      {item && <img src={item} alt="img" className="imgPreview" />}
                      <input type="file" onChange={(e) => imgChange(e, i)} />
                    </StyledInputFile>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Divider sx={{ borderColor: grey[500], mt: 2 }} />
          <Typography variant="h5" color="secondary" my={3}>
            Información complementaria
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <StyledcontainerInput sx={{ alignItems: 'flex-start!important' }}>
                <Typography variant="body1">Descripción</Typography>
                <FancyInput multiline rows={4} placeholder="Escribir cada uno separado por comas" />
              </StyledcontainerInput>
              <StyledcontainerInput>
                <Typography variant="body1">Motor</Typography>
                <FancyInput />
              </StyledcontainerInput>
              <StyledcontainerInput>
                <Typography variant="body1">Transmición</Typography>
                <FancyInput />
              </StyledcontainerInput>
              <StyledcontainerInput>
                <Typography variant="body1">Vidrios</Typography>
                <FancyInput />
              </StyledcontainerInput>
              <StyledcontainerInput>
                <Typography variant="body1">A/A</Typography>
                <FancyInput />
              </StyledcontainerInput>
              <StyledcontainerInput>
                <Typography variant="body1">Garantía</Typography>
                <FancyInput />
              </StyledcontainerInput>
              <StyledcontainerInput>
                <Typography variant="body1">Tracción</Typography>
                <FancyInput />
              </StyledcontainerInput>
              <StyledcontainerInput>
                <Typography variant="body1">Video</Typography>
                <FancyInput />
              </StyledcontainerInput>
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledcontainerInput sx={{ alignItems: 'flex-start!important' }}>
                <Typography variant="body1">Atributos destacados</Typography>
                <FancyInput multiline rows={4} />
              </StyledcontainerInput>
              <StyledcontainerInput>
                <Typography variant="body1">Combustible</Typography>
                <FancyInput />
              </StyledcontainerInput>
              <StyledcontainerInput>
                <Typography variant="body1">neumáticos</Typography>
                <FancyInput />
              </StyledcontainerInput>
              <StyledcontainerInput>
                <Typography variant="body1">Airbag</Typography>
                <FancyInput />
              </StyledcontainerInput>
              <StyledcontainerInput>
                <Typography variant="body1">Audio</Typography>
                <FancyInput />
              </StyledcontainerInput>
              <StyledcontainerInput>
                <Typography variant="body1">Cap. Carga</Typography>
                <FancyInput />
              </StyledcontainerInput>
              <StyledcontainerInput>
                <Typography variant="body1">Otros</Typography>
                <FancyInput />
              </StyledcontainerInput>
              <StyledcontainerInput>
                <Typography variant="body1">Catálogo</Typography>
                <FancyInput />
              </StyledcontainerInput>
            </Grid>
          </Grid>
          <Stack direction={'row'} justifyContent={'flex-end'} columnGap={isXs ? 1 : 4} pt={4}>
            <Button variant="contained" color="primary">
              Guardar borrador
            </Button>
            <Button variant="contained" color="primary">
              Publicar
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  )
}

export default Carnew
