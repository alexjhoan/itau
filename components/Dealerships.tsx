import { Box, Container, SelectChangeEvent, Stack, Typography, Grid } from '@mui/material'
import CustomSelect from '../components/CustomSelect'
import React, { useState } from 'react'
import { grey } from '@mui/material/colors'
import PlaceIcon from '@mui/icons-material/Place'
import { useRouter } from 'next/router'
import { dataLeaderships } from '../utils/data'

const typesCar = ['Autos', 'Camionetas', 'Compactos', 'Deportivos', 'Motos']
const brandsCar = ['Audi', 'BMW', 'Brillance']

const DealerCars = () => {
  const { route } = useRouter()
  const [filter, setFilter] = useState({ branch: [], category: [] })
  const handleChange = (event: SelectChangeEvent<typeof filter> | any, typeInput: string) => {
    const {
      target: { value }
    } = event
    setFilter({ ...filter, [typeInput]: value })
  }
  return (
    <>
      <Box sx={{ backgroundColor: grey[300], py: 4 }}>
        <Container maxWidth="lg">
          {!route.includes('concesionarias') ? (
            <Typography variant="h5" pb={2} sx={{ fontWeight: 700 }}>
              Concesionarias
            </Typography>
          ) : (
            <Typography variant="h6" pb={2}>
              Agregá filtros a tu búsqueda:
            </Typography>
          )}
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <CustomSelect
                  label={'Marca'}
                  listItems={typesCar}
                  value={filter.branch}
                  onChange={(e: SelectChangeEvent) => handleChange(e, 'branch')}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <CustomSelect
                  label={'Categorías'}
                  listItems={brandsCar}
                  value={filter.category}
                  onChange={(e: SelectChangeEvent) => handleChange(e, 'category')}
                />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ pt: 5, pb: 10 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104829.9878710313!2d-56.25963031531391!3d-34.80752377416952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80ffc63bf7d3%3A0x6b321b2e355bec99!2sMontevideo%2C%20Departamento%20de%20Montevideo%2C%20Uruguay!5e0!3m2!1ses!2sve!4v1663715412554!5m2!1ses!2sve"
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <Grid container spacing={4} sx={{ pt: 4 }}>
          {dataLeaderships.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 700, textTransform: 'uppercase' }}
                gutterBottom
              >
                <PlaceIcon color="primary" sx={{ fontSize: 30, verticalAlign: 'bottom', mr: 1 }} />
                {item.name}
                {item.brand && ` - ${item.brand}`}
              </Typography>
              <Typography variant="body2">Dirección: {item.address}</Typography>
              <Typography variant="body2">Teléfono: {item.tel}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default DealerCars
