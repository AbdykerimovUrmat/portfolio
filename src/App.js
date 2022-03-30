import { Alert, Button, Snackbar, Stack, SvgIcon, Tooltip, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Language, Leaderboard, Mail, Message, MusicNote } from "@mui/icons-material";
import { useEffect, useState } from "react";

function App() {
  const [cfRating, setCfRating] = useState()
  useEffect(() => {
    let mounted = true
    fetch('https://codeforces.com/api/user.info?handles=tumaryui')
      .then(data => data.json())
      .then(data => {
        if(mounted) {
          setCfRating(data.result[0].rating)
        }
      })
    return () => mounted = false;
  })

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
          <Typography color='white' variant='h4' component='div' gutterBottom>
            Привет, я Урмат Абдыкеримов <br/>
            работаю в Яндекс
          </Typography>
        </CustomColorOrange>
        <CustomColorBlue>
          <Typography color='white' variant='h4' component='div' gutterBottom>
            Имел дело с ASP.NET, Spring, React, Docker, Git
          </Typography>
        </CustomColorBlue>

        <Button color='info' variant='outlined' startIcon={<GitHubIcon />} sx={{textTransform: 'none', margin: '10px'}} onClick={() => openUrlNewTab('https://github.com/AbdykerimovUrmat')}>
          Мой GitHub
        </Button>

        <Button color='warning' variant='outlined' startIcon={<Language />} sx={{textTransform: 'none', margin: '10px'}} onClick={() => openUrlNewTab('https://stackoverflow.com/users/15571560/urmat-abdykerimov?tab=profile')}>
          Мой StackOverflow
        </Button>

        <Button color='info' variant='outlined' startIcon={<Leaderboard />} sx={{textTransform: 'none', margin: '10px'}} onClick={() => openUrlNewTab('https://codeforces.com/profile/tumaryui')}>
          Текущий рейтинг на Codeforces: {cfRating}
        </Button>

        <Button color='info' variant='outlined' startIcon={<Message />} sx={{textTransform: 'none', margin: '10px'}} onClick={() => openUrlNewTab('https://vk.com/urmatabdykerimov')}>
          Мой VK
        </Button>

        <Tooltip title="Скопировать" placement="right">
          <Button color='info' variant='outlined' startIcon={<Mail />} sx={{textTransform: 'none', margin: '10px'}} onClick={() => {
            navigator.clipboard.writeText('abdykerimov.urm@gmail.com');
            setAlertState({ alertOpen: true, message: 'Скопировано!', severity: 'success', duration: 5000})
          }}>
            почта: abdykerimov.urm@gmail.com
          </Button>
        </Tooltip>

        <Button color='error' variant='outlined' startIcon={<MusicNote />} sx={{textTransform: 'none', margin: '10px'}} onClick={() => openUrlNewTab('https://music.yandex.ru/users/abdykerimov.urm/playlists')}>
          Yandex Музыка
        </Button>
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
