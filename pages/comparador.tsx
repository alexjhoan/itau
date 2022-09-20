import {
  Box,
  Container,
  SelectChangeEvent,
  Stack,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CardActions
} from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { useState } from 'react'
import CustomSelect from '../components/CustomSelect'
import Image from 'next/image'

const typesCar = ['Autos', 'Camionetas', 'Compactos', 'Deportivos', 'Motos']
const brandsCar = ['Audi', 'BMW', 'Brillance']
const feature = [
  'motor',
  'combustible',
  'transmicíon',
  'neumáticos',
  'vidrios',
  'airbag',
  'A/A',
  'autdio',
  'garantia',
  'cap. carga'
]

const formInit = {
  typeCar: [],
  brandCar: []
}

const Comparador = () => {
  const [car1, setCar1] = useState(formInit)
  const [car2, setCar2] = useState(formInit)

  const handleChange = (
    event: SelectChangeEvent<typeof car1> | any,
    form: string,
    typeInput: string
  ) => {
    const {
      target: { value }
    } = event
    console.log(value)
    if (form == 'car1') {
      setCar1({ ...car1, [typeInput]: value })
    } else {
      setCar2({ ...car2, [typeInput]: value })
    }
  }

  return (
    <>
      <Box sx={{ backgroundColor: grey[300], py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" pb={4}>
            Seleccioná los vehículos que deseas comparar:
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <CustomSelect
                  label={'Tipo de vehículo'}
                  listItems={typesCar}
                  value={car1.typeCar}
                  onChange={(e: SelectChangeEvent) => handleChange(e, 'car1', 'typeCar')}
                />
                <CustomSelect
                  label={'Marca'}
                  listItems={brandsCar}
                  value={car1.brandCar}
                  onChange={(e: SelectChangeEvent) => handleChange(e, 'car1', 'brandCar')}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <CustomSelect
                  label={'Tipo de vehículo'}
                  listItems={typesCar}
                  value={car2.typeCar}
                  onChange={(e: SelectChangeEvent) => handleChange(e, 'car2', 'typeCar')}
                />
                <CustomSelect
                  label={'Marca'}
                  listItems={brandsCar}
                  value={car2.brandCar}
                  onChange={(e: SelectChangeEvent) => handleChange(e, 'car2', 'brandCar')}
                />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ pt: 5, pb: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card>
              <Box pt={1} px={2}>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  Fiat Strada
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>
                  Desde Gs. 00.000.000
                </Typography>
              </Box>
              <Image
                src={'/img/autos/prueba.png'}
                width={300}
                height={180}
                layout="responsive"
                alt="prueba"
              />
              <CardContent>
                {feature.map((item, i) => (
                  <Grid container sx={{ borderBottom: `solid 1px ${grey[300]}` }} key={i} py={1}>
                    <Grid item xs={12} sm={5}>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ textTransform: 'uppercase' }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Typography variant="body1" color="initial">
                        Lorem ipsum dolor sit amet.
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'center', pb: 3 }}>
                <Button variant={'contained'}>Ver más</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <Box pt={1} px={2}>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  Fiat Strada
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>
                  Desde Gs. 00.000.000
                </Typography>
              </Box>
              <Image
                src={'/img/autos/prueba.png'}
                width={300}
                height={180}
                layout="responsive"
                alt="prueba"
              />
              <CardContent>
                {feature.map((item, i) => (
                  <Grid container sx={{ borderBottom: `solid 1px ${grey[300]}` }} key={i} py={1}>
                    <Grid item xs={12} sm={5}>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ textTransform: 'uppercase' }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Typography variant="body1" color="initial">
                        Lorem ipsum dolor sit amet.
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'center', pb: 3 }}>
                {/* TODO: poner al detalle del auto */}
                <Button variant={'contained'}>Ver más</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Comparador
