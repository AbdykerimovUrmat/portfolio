import { Alert, Button, Snackbar, Stack, Step, StepLabel, Stepper, SvgIcon, Tooltip, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Brightness1, Instagram, Language, Leaderboard, Mail, Message, MusicNote, Telegram, Yard, YouTube } from "@mui/icons-material";
import { useEffect, useState } from "react";

const getYearMessage = (yearNumber) => {
  if(yearNumber >= 5 && yearNumber <= 20) {
    return yearNumber + ' лет'
  }

  switch(yearNumber % 10) {
    case 1: return yearNumber + ' год';
    case 2: ;
    case 3: ;
    case 4: return yearNumber + ' года';
    default: return yearNumber + ' лет';
  }
}

const getMonthMessage = (yearNumber) => {
  if(yearNumber >= 5 && yearNumber <= 20) {
    return yearNumber + ' месяцев'
  }

  switch(yearNumber % 10) {
    case 1: return yearNumber + ' месяц';
    case 2: ;
    case 3: ;
    case 4: return yearNumber + ' месяца';
    default: return yearNumber + ' месяцев';
  }
}

function App() {
  const [{currentCfRating, maxCfRating}, setCfRating] = useState({})
  useEffect(() => {
    let mounted = true
    fetch('https://codeforces.com/api/user.info?handles=tumaryui')
      .then(data => data.json())
      .then(data => {
        if(mounted) {
          setCfRating({ currentCfRating: data.result[0].rating, maxCfRating: data.result[0].maxRating })
        }
      })
    return () => mounted = false;
  })

  const startedYandex = new Date(2022, 0, 1)
  const timeInYandex = new Date() - startedYandex
  const tsInMonth = 2678400000
  const months = timeInYandex / tsInMonth | 0
  const periodMessage = months >= 12 ? getYearMessage(months) : getMonthMessage(months)
  const steps = ['Спортивное программирование в школе', '1 год в TimelySoft', `${periodMessage} в Yandex`]

  const [alertState, setAlertState] = useState({alertOpen: false, message: '', severity: 'success'})
  const { alertOpen, message, duration, severity } = alertState;
  const CustomColorOrange = withStyles({
    root: {
      fontSize: 20,
      background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, orange 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  })(Typography);

  const CustomColorBlue = withStyles({
    root: {
      fontSize: 20,
      background: "-webkit-linear-gradient(45deg, #20bf55 30%, #01baef 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  })(Typography);

  const openUrlNewTab = (url) => {
    window.open(url, '_blank').focus();
  }

  return (
    <Box sx={{
      flexGrow: 1,
      justifyContent: 'center',
      display: 'flex',
      marginTop: '40px'
    }}>
      <Stack sx={{
          width: '100%',
          maxWidth: '600px'
        }}>
        <CustomColorOrange>
          <Typography color='white' variant='h4' component='div' gutterBottom margin='10px' marginTop='0px' marginBottom='5px'>
            Привет, я Урмат Абдыкеримов <br/>
            работаю в Яндекс <br/>
            📍 Москва
          </Typography>
        </CustomColorOrange>
        <CustomColorBlue>
          <Typography color='white' variant='h4' component='div' gutterBottom margin='13px' marginTop='0px' marginBottom='0px'>
            Имел дело с ASP.NET, Xamarin, Spring, React, Docker, Git
          </Typography>
        </CustomColorBlue>

        <Button color='info' variant='outlined' startIcon={<GitHubIcon />} sx={{textTransform: 'none', margin: '10px'}} onClick={() => openUrlNewTab('https://github.com/AbdykerimovUrmat')}>
          GitHub
        </Button>

        <Button color='warning' variant='outlined' startIcon={<Language />} sx={{textTransform: 'none', margin: '10px'}} onClick={() => openUrlNewTab('https://stackoverflow.com/users/15571560/urmat-abdykerimov?tab=profile')}>
          StackOverflow
        </Button>

        <Button color='info' variant='outlined' startIcon={<Leaderboard />} sx={{textTransform: 'none', margin: '10px'}} onClick={() => openUrlNewTab('https://codeforces.com/profile/tumaryui')}>
          Текущий рейтинг на Codeforces: {currentCfRating}, максимальный: {maxCfRating}
        </Button>

        <Button color='info' variant='outlined' startIcon={<Message />} sx={{textTransform: 'none', margin: '10px'}} onClick={() => openUrlNewTab('https://vk.com/urmatabdykerimov')}>
          VK
        </Button>

        <Button color='info' variant='outlined' startIcon={<Telegram />} sx={{textTransform: 'none', margin: '10px'}} onClick={() => openUrlNewTab('https://t.me/abdykerimov_urm')}>
          Telegram
        </Button>

        <Button color='success' variant='outlined' startIcon={<Instagram />} sx={{textTransform: 'none', margin: '10px'}} onClick={() => openUrlNewTab('https://www.instagram.com/abdykerimov.urm/')}>
          Instagram
        </Button>

        <Tooltip title="Скопировать" placement="right">
          <Button color='info' variant='outlined' startIcon={<Mail />} sx={{textTransform: 'none', margin: '10px'}} onClick={() => {
            navigator.clipboard.writeText('abdykerimov.urm@gmail.com');
            setAlertState({ alertOpen: true, message: 'Скопировано!', severity: 'success', duration: 5000})
          }}>
            почта: abdykerimov.urm@gmail.com
          </Button>
        </Tooltip>

        <Button color='success' variant='outlined' startIcon={<Brightness1 />} sx={{textTransform: 'none', margin: '10px'}} onClick={() => openUrlNewTab('https://shikimori.one/Urmat+Abdykerimov')}>
          Shikimori
        </Button>
        
        <Button color='error' variant='outlined' startIcon={<YouTube />} sx={{textTransform: 'none', margin: '10px'}} onClick={() => openUrlNewTab('https://www.youtube.com/channel/UCgz2WOhMzciGoybrewJBxNQ/videos')}>
          Youtube
        </Button>

        <Button color='error' variant='outlined' startIcon={<MusicNote />} sx={{textTransform: 'none', margin: '10px'}} onClick={() => openUrlNewTab('https://music.yandex.ru/users/abdykerimov.urm/playlists')}>
          Yandex Музыка
        </Button>

        <Stepper activeStep={2} alternativeLabel sx={{mt: '20px'}}>
          {steps.map((label) => {
            return (
              <Step key={label}>
                <StepLabel sx={{
                  '& .MuiStepLabel-root .Mui-completed': {
                    color: 'grey.500', // circle color (COMPLETED)
                  },
                  '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                    {
                      color: 'grey.500', // Just text label (COMPLETED)
                    },
                  '& .MuiStepLabel-root .Mui-active': {
                    color: 'white', // circle color (ACTIVE)
                  },
                  '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                    {
                      color: 'white', // Just text label (ACTIVE)
                      fontSize: '17px'
                    },
                  '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                    fill: 'black', // circle's number (ACTIVE)
                  }
                }}
                >{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

      </Stack>

      <Snackbar open={alertOpen} autoHideDuration={duration} onClose={() => setAlertState({ ...alertState, alertOpen: false })}>
        <Alert onClose={() => setAlertState({ ...alertState, alertOpen: false })} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default App;
