import React from 'react'
import { Card,CardContent,Button} from '@mui/material'
import { NavLink } from 'react-router-dom'
import '../general/Homepage.css'

const Questionnaire = () => {
  return (
    <div>
      <Card style={{ width: '800px', height: '550px', marginLeft: '240px', marginTop: 55 }}>
        <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <div style={{ marginBottom: 10, marginLeft: 20 }}>
              <p>Instructions before watching the video:</p>
              <p>Watch the below video about Nivritti Gurukul and answer the proceeding questions</p>
            </div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', paddingTop: 25, marginLeft: 28 }}>
              <iframe
                title="video"
                width="90%"
                height="90%"
                src="https://www.youtube.com/embed/a3ICNMQW7Ok?autoplay=1&mute=1"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ position: 'absolute', top: 10, left: 36 }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', }}>
                
              <button
                className="secondary-button"
                variant="contained"
                color="primary"
                size="large"
                style={{ fontSize: '20px' }}
              >
                Proceed with the questionnaire
              </button>
              
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Questionnaire
