import * as React from 'react';
import { useSelector } from 'react-redux';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import Typography from '@mui/material/Typography';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';

import './timeline.scss';

function AlternateTimeline() {

  const isDarkMode = useSelector((state) => state.settings.darkMode);

  return (
    <>
    <h2 className={isDarkMode ? 'contact' : 'contact light'}>Parcours</h2>
    <div id='timeline' className={isDarkMode ? 'timeline ' : 'timeline light'}>
      
      <Timeline position="alternate" className={isDarkMode ? 'timeline ' : 'timeline light'}>        
        <TimelineItem className={isDarkMode ? 'timeline__item ' : 'timeline__item light'}>
          <TimelineOppositeContent className={isDarkMode ? 'timeline__item ' : 'timeline__item light'}
              sx={{ m: 'auto 0' }}
              variant="body2"
              //color="text.secondary"
            >
            2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success">
              <EmojiEventsRoundedIcon />
            </TimelineDot>
              <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={isDarkMode ? 'timeline__item ' : 'timeline__item light'} sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span" >
              Certification Opquast
            </Typography>
            <Typography className={isDarkMode ? 'timeline__item ' : 'timeline__item light'}>Bonnes pratiques et Qualité web</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem onScroll={Animation} className={isDarkMode ? 'timeline__item ' : 'timeline__item light'}>
          <TimelineOppositeContent className={isDarkMode ? 'timeline__item ' : 'timeline__item light'}
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            //color="text.secondary"
            >
            2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ }} />
              <TimelineDot color="success">
                <EmojiEventsRoundedIcon />
              </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent id="timeline content" sx={{ py: '22px', px: 2 }}>
            <Typography variant="h6" component="span" >
              Titre Professionnel Développeur Web et Web Mobile
            </Typography>
            <Typography >Niveau V - Bac+2</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className={isDarkMode ? 'timeline__item ' : 'timeline__item light'}>
          <TimelineOppositeContent className={isDarkMode ? 'timeline__item ' : 'timeline__item light'}
              sx={{ m: 'auto 0' }}
              variant="body2"
              //color="text.secondary"
            >
            2021-2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
              <TimelineDot color="primary">
                <SchoolRoundedIcon />
              </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={isDarkMode ? 'timeline__item ' : 'timeline__item light'} sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span" >
              Formation Développeur Web et Web Mobile
            </Typography>
            <Typography className={isDarkMode ? 'timeline__item ' : 'timeline__item light'}>Ecole O'clock</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className={isDarkMode ? 'timeline__item ' : 'timeline__item light'}>
          <TimelineOppositeContent className={isDarkMode ? 'timeline__item ' : 'timeline__item light'}
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            >
            2008-2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <WorkRoundedIcon sx={{color: '#000'}}/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={isDarkMode ? 'timeline__item ' : 'timeline__item light'} sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Photographe responsable studio E-Commerce
            </Typography>
            <Typography>Groupe Otelo - Service Marketing</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className={isDarkMode ? 'timeline__item ' : 'timeline__item light'}>
          <TimelineOppositeContent className={isDarkMode ? 'timeline__item ' : 'timeline__item light'}
            sx={{ m: 'auto 0' }}
            variant="body2"
            // color="text.secondary"
            >
            2007
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success">
              <EmojiEventsRoundedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={isDarkMode ? 'timeline__item ' : 'timeline__item light'} sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Diplôme d'architecte mention en Urbanisme
            </Typography>
            <Typography>Niveau I - Bac+5</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className={isDarkMode ? 'timeline__item ' : 'timeline__item light'}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
          >
            1999-2006
          </TimelineOppositeContent>
          <TimelineSeparator className={isDarkMode ? 'timeline__item ' : 'timeline__item light'}>
            <TimelineConnector />
            <TimelineDot color="primary">
              <SchoolRoundedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={isDarkMode ? 'timeline__item ' : 'timeline__item light'} sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Formation Architecture Master II
            </Typography>
            <Typography>Universidad Mayor - Santiago du Chili</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
    
    <div className={isDarkMode ? 'divider' : 'divider light'}></div>
    </>
  );
}

export default AlternateTimeline;