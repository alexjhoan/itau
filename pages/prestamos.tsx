import {
  Box,
  styled,
  Tab,
  Tabs,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { dataBenefits, dataRequirements } from '../utils/data'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useRouter } from 'next/router'

const StyledBanner = styled(Box)(({ theme }) => ({
  height: 300,
  width: '100%',
  backgroundImage: 'url(/img/prestamos-bg.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}))

const StyledTabsNav = styled(Tabs)(({ theme }) => ({
  backgroundColor: grey[300],
  width: '34%',
  padding: theme.spacing(3, 0),
  '& .MuiTab-root': {
    textTransform: 'capitalize',
    fontSize: 20,
    alignItems: 'flex-end',
    width: '100%',
    maxWidth: '100%',
    '&.Mui-selected': {
      color: theme.palette.secondary.main,
      fontWeight: 700
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 145,
      fontSize: 16
    }
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  }
}))

const StyledTabsContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 3),
  backgroundColor: theme.palette.common.white,
  width: '66%',
  maxWidth: 790,
  '& ul': {
    paddingLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    rowGap: '16px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2)
  }
}))

const ResponsiveTabs = ({ contentTab }: any): JSX.Element => {
  const [tab, setTab] = useState<number>(0)
  const [expanded, setExpanded] = useState<string | false>('panel0')
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('md'))
  const { asPath } = useRouter()

  useEffect(() => {
    if (asPath.includes('#requisitos')) {
      setTab(1)
      setExpanded('panel1')
    } else {
      setTab(0)
      setExpanded('panel0')
    }
  }, [asPath])

  const handleExpanded = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  const changeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue)
  }
  return (
    <>
      {isSm ? (
        contentTab.map((item: any, i: any) => (
          <Accordion
            expanded={expanded === `panel${i}`}
            onChange={handleExpanded(`panel${i}`)}
            elevation={0}
            disableGutters
            key={i}
          >
            <AccordionSummary
              sx={{ backgroundColor: theme.palette.secondary.main }}
              expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.secondary.contrastText }} />}
            >
              <Typography variant="h5" sx={{ color: theme.palette.secondary.contrastText }}>
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{item.content}</AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Box sx={{ flexGrow: 1, bgcolor: 'common.white', display: 'flex' }}>
          <StyledTabsNav orientation="vertical" value={tab} onChange={changeTab}>
            {contentTab.map((item: any, i: any) => (
              <Tab label={item.title} key={i} />
            ))}
          </StyledTabsNav>
          {contentTab.map((item: any, i: any) => (
            <StyledTabsContent hidden={tab !== i} key={i}>
              {item.content}
            </StyledTabsContent>
          ))}
        </Box>
      )}
    </>
  )
}

const Prestamos: NextPage = () => {
  return (
    <>
      <StyledBanner />
      <ResponsiveTabs
        contentTab={[
          {
            title: 'Beneficios',
            content: (
              <>
                <Typography variant="h6" color="secondary">
                  Características y beneficios
                </Typography>
                <ul>
                  {dataBenefits.map((item, i) => (
                    <li key={i}>
                      <Typography variant="body1">
                        <b>{item.title} </b>
                        {item.content}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </>
            )
          },
          {
            title: 'Requisitos',
            content: (
              <>
                <Typography variant="h6" color="secondary">
                  Requisitos
                </Typography>
                <ul>
                  {dataRequirements.map((item, i) => (
                    <li key={i}>
                      <Typography variant="body1">{item}</Typography>
                    </li>
                  ))}
                </ul>
                <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                  Sujeto a verificación y aprobación crediticia por parte del banco.
                </Typography>
              </>
            )
          }
        ]}
      />
    </>
  )
}

export default Prestamos
