
import { Card, CardContent, Typography, Button } from '@mui/material';
// import { makeStyles } from '@material-ui/core/styles';
import { CalendarToday } from '@mui/icons-material'




function EventCard() {


    return (
        <>
        <div style={{marginTop:"100px"}}>

        </div>
        <h1 className='primary-heading'style={{fontSize:"20px"}}>
              Tentative admission process and timeline
          </h1>
            <Card style={{
                display: 'flex',
                height: 70,
                width: '90%',
                position: 'relative',
                marginTop:"20px"
                
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: 5,
                    backgroundColor: 'green'
                }} />
                <CardContent style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexGrow: 1,
                }}>
                    <Typography variant="h6">Mar 28</Typography>
                    <Typography variant="subtitle1">Event Name</Typography>
                    <Button
                        variant="outlined"
                        startIcon={<CalendarToday />}
                        size="small"
                        style={{ color: 'green' }}
                    >
                        Show on calendar
                    </Button>
                </CardContent>
            </Card>
            <Card style={{
                display: 'flex',
                height: 70,
                width: '90%',
                position: 'relative',
                marginTop:"20px"
                
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: 5,
                    backgroundColor: 'green'
                }} />
                <CardContent style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexGrow: 1,
                }}>
                   <Typography variant="h6">Mar 28</Typography>
                    <Typography variant="subtitle1">Event Name</Typography>
                    <Button
                        variant="outlined"
                        startIcon={<CalendarToday />}
                        size="small"
                        style={{ color: 'green' }}
                    >
                        Show on calendar
                    </Button>
                </CardContent>
            </Card>
            <Card style={{
                display: 'flex',
                height: 70,
                width: '90%',
                position: 'relative',
                marginTop:"20px"
                
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: 5,
                    backgroundColor: 'green'
                }} />
                <CardContent style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexGrow: 1,
                }}>
                    <Typography variant="h6">Mar 28</Typography>
                    <Typography variant="subtitle1">Event Name</Typography>
                    <Button
                        variant="outlined"
                        startIcon={<CalendarToday />}
                        size="small"
                        style={{ color: 'green' }}
                    >
                        Show on calendar
                    </Button>
                </CardContent>
            </Card>
            

        </>
    );
}

export default EventCard;