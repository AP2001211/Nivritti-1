import React, { useState } from "react";
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Box } from "@mui/system";
import { Icon } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { CircularProgressbar } from 'react-circular-progressbar'
import Chart from 'react-apexcharts'
import { styled } from '@mui/material/styles';
import { tableCellClasses } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import '../general/Homepage.css'
import { useRef } from "react";
import { useEffect } from "react";

const data = {
    labels: ['State 1', 'State 2', 'State 3', 'State 4', 'State 5'],
    datasets: [
        {
            label: 'Students',
            data: [20, 10, 30, 15, 25],
            backgroundColor: ['#0077c2', '#ed6ea0', '#ffa600', '#8dd200', '#007a87'],
            borderWidth: 0,
        },
    ],
};

const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        y: {
            ticks: {
                beginAtZero: true,
            },
            title: {
                display: true,
                text: 'Number of Students',
                font: {
                    size: 14,
                },
            },
        },
        x: {
            ticks: {
                font: {
                    size: 12,
                },
            },
            grid: {
                display: false,
            },
        },
    },
};



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#def0e0',
        //   color: theme.palette.common.white,
        color: "black",
        fontWeight: "bold",
        borderBottomColor: '#356d3b',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        backgroundColor: '#def0e0',
        borderBottomColor: '#356d3b',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#def0e0',
    },
    '&:hover': {
        backgroundColor: '#def0e0',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    borderBottomColor: '#356d3b',
}));

function createData(date, notice) {
    return { date, notice };
}


const rows = [
    createData('12-01-2023', "Orientation classes"),
    createData('12-01-2023', "Orientation classes"),
    createData('12-01-2023', "Orientation classes"),
    createData('12-01-2023', "Orientation classes"),

];



const Dashboard = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = new Chart(chartRef.current, {
                type: 'bar',
                data: data,
                options: options,
            });

            return () => {
                chartInstance.destroy();
            };
        }
    }, []);

    const [year, setYear] = useState(2023);
    const options = {
        chart: {
            id: "admitted-students",
            toolbar: {
                show: true,
                tools: {
                    download: true,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                },
            },
        },
        colors: ['#DB4437'],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        },
        stroke: {
            curve: "smooth",
            width: 3,
        },
    };

    const series = [
        {
            name: "Students Admitted",
            data: [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650],
        },
    ];

    const handleYearChange = (e) => {
        setYear(e.target.value);
        // Load data for selected year
    };

    return (
        <>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }} marginLeft="150px" marginTop="50px">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ borderRadius: "20px", background: "#fffff" }}>
                            <CardContent>
                                <Grid container spacing={1} justifyContent="space-between">
                                    <Grid item xs={3}>
                                        <Typography variant="h5" component="h2" fontWeight="bold" color="#15474f">
                                            11654
                                        </Typography>
                                        <Typography variant="caption" component="p" color="#15474f">
                                            Applications
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Box sx={{ width: "50px", height: "50px", borderRadius: "10px", background: "linear-gradient(135deg, #5fc9f8, #0093e9)" }}>
                                            <Icon sx={{ fontSize: "25px", color: "white", marginTop: "7px", marginLeft: "13px" }}>
                                                <FontAwesomeIcon icon={faFileAlt} />
                                            </Icon>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ borderRadius: "20px", background: "#fffff" }}>
                            <CardContent>
                                <Grid container spacing={1} justifyContent="space-between">
                                    <Grid item xs={3}>
                                        <Typography variant="h5" component="h2" fontWeight="bold" color="#15474f">
                                            11654
                                        </Typography>
                                        <Typography variant="caption" component="p" color="#15474f">
                                            Applications
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Box sx={{ width: "50px", height: "50px", borderRadius: "10px", background: "linear-gradient(135deg, #5fc9f8, #0093e9)" }}>
                                            <Icon sx={{ fontSize: "25px", color: "white", marginTop: "7px", marginLeft: "13px" }}>
                                                {/* <SchoolOutlined /> */}
                                            </Icon>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ borderRadius: "20px", background: "#fffff" }}>
                            <CardContent>
                                <Grid container spacing={1} justifyContent="space-between">
                                    <Grid item xs={3}>
                                        <Typography variant="h5" component="h2" fontWeight="bold" color="#15474f">
                                            11654
                                        </Typography>
                                        <Typography variant="caption" component="p" color="#15474f">
                                            Applications
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Box sx={{ width: "50px", height: "50px", borderRadius: "10px", background: "linear-gradient(135deg, #5fc9f8, #0093e9)" }}>
                                            <Icon sx={{ fontSize: "25px", color: "white", marginTop: "7px", marginLeft: "13px" }}>
                                                {/* <SchoolOutlined /> */}
                                            </Icon>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ borderRadius: "20px", background: "#fffff" }}>
                            <CardContent>
                                <Grid container spacing={1} justifyContent="space-between">
                                    <Grid item xs={3}>
                                        <Typography variant="h5" component="h2" fontWeight="bold" color="#15474f">
                                            11654
                                        </Typography>
                                        <Typography variant="caption" component="p" color="#15474f">
                                            Applications
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Box sx={{ width: "50px", height: "50px", borderRadius: "10px", background: "linear-gradient(135deg, #5fc9f8, #0093e9)" }}>
                                            <Icon sx={{ fontSize: "25px", color: "white", marginTop: "7px", marginLeft: "13px" }}>
                                                {/* <SchoolOutlined /> */}
                                            </Icon>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8}>
                        <h4 className='primary-subheading' style={{ color: "green", fontSize: "40px" }}>Total Admissions</h4>
                        <Card sx={{ borderRadius: "20px", background: "#ffffff" }}>
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    Number of Students Admitted ({year})
                                </Typography>
                                <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }}>
                                    <div style={{ marginRight: "1rem" }}>
                                        <Typography variant="subtitle1">Select Year:</Typography>
                                    </div>
                                    <select value={year} onChange={handleYearChange} style={{
                                        backgroundColor: "#356d3b",
                                        color: "#ffffff",
                                        fontSize: "0.9rem",
                                        borderRadius: "7px"
                                    }}>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                    </select>
                                </div>
                                <Chart options={{
                                    ...options,
                                    grid: {
                                        ...options.grid,
                                        borderColor: '#9bd3a1'
                                    }
                                }} series={series} type="line" height={280} />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" component="h2" sx={{ textAlign: 'left', fontFamily: "sans-serif", marginLeft: "10px" }}>
                            Notice Board
                        </Typography>
                        <Card style={{
                            display: 'flex',
                            height: 70,
                            width: '130%',
                            position: 'relative',
                            marginTop: "20px"

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
                                {/* <Button
                                    // variant="outlined"
                                    startIcon={<CalendarToday />}
                                    size="small"
                                    style={{ color: 'green' }}
                                >
                                    {/* Show on calendar 
                        </Button>*/}
                            </CardContent>
                        </Card>
                        <Card style={{
                            display: 'flex',
                            height: 70,
                            width: '130%',
                            position: 'relative',
                            marginTop: "20px"

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
                                {/* <Button
                                    // variant="outlined"
                                    startIcon={<CalendarToday />}
                                    size="small"
                                    style={{ color: 'green' }}
                                >
                                    {/* Show on calendar 
                        </Button>*/}
                            </CardContent>
                        </Card>
                        <Card style={{
                            display: 'flex',
                            height: 70,
                            width: '130%',
                            position: 'relative',
                            marginTop: "20px"

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
                                {/* <Button
                                    // variant="outlined"
                                    startIcon={<CalendarToday />}
                                    size="small"
                                    style={{ color: 'green' }}
                                >
                                    {/* Show on calendar 
                        </Button>*/}
                            </CardContent>
                        </Card>
                        <Card style={{
                            display: 'flex',
                            height: 70,
                            width: '130%',
                            position: 'relative',
                            marginTop: "20px"

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
                                {/* <Button
                                    // variant="outlined"
                                    startIcon={<CalendarToday />}
                                    size="small"
                                    style={{ color: 'green' }}
                                >
                                    {/* Show on calendar 
                        </Button>*/}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card style={{ height: '200px', padding: "none" }}>
                            <CardContent style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: "0px" }}>
                                <Typography variant="h5" component="h2">
                                    Acceptance Rate
                                </Typography>
                                <div id="chart">

                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Statewise acceptance 
                                </Typography>
                                

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                   Gender split
                                </Typography>
                               
                                <div style={{ height: '200px', marginTop: '16px' }}>

                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Box>


        </>
    )
}

export default Dashboard
