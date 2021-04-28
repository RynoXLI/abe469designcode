import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MyResponsiveLine, data } from './Sensor/LineChart'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Papa from 'papaparse';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    item: {
      padding: theme.spacing(2),
      textAlign: 'center',
    }
}));

function App() {
  const [prox, setProx] = useState(0);
  const [light, setLight] = useState(0);
  const [white, setWhite] = useState(0);
  const [proxList, setProxList] = useState([]);
  const [lightList, setLightList] = useState([]);
  const [whiteList, setWhiteList] = useState([]);
  const [collecting, setCollecting] = useState(false);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const timer = setInterval(async () => {
      const response = await fetch('http://192.168.10.114:8080/prox');
      const jsonData = await response.json();
      setProx(jsonData['proximity']);
      const response2 = await fetch('http://192.168.10.114:8080/light');
      const jsonData2 = await response2.json();
      setLight(jsonData2['light']);
      const response3 = await fetch('http://192.168.10.114:8080/white');
      const jsonData3 = await response3.json();
      setWhite(jsonData3['white']);

      if (proxList.length > 40) {
        proxList.shift();
      }
      if (lightList.length > 40) {
        lightList.shift();
      }
      if (whiteList.length > 40) {
        whiteList.shift();
      }
      const d = new Date();
      const proxObj = {
        'x': `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}`,
        'y': jsonData['proximity']
      }
      proxList.push(proxObj);
      setProxList(proxList);

      if (collecting) {
        dataList.push(proxObj);
        setDataList(dataList);
      }

      lightList.push({
        'x': `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}`,
        'y': jsonData2['light']
      });
      setLightList(lightList);
      whiteList.push({
        'x': `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}`,
        'y': jsonData3['white']
      });
      setWhiteList(whiteList);
      // console.log(proxList);
    }, 100);
    return () => clearInterval(timer);
  });

  const daData = [{ 'id': 'proximity1', 'data': proxList }, { 'id': 'light1', 'data': lightList },
  { 'id': 'white', 'data': whiteList }];
  // console.log(daData);
  const classes = useStyles();

  const objLen = dataList.length

  return (
    <div className="App">
      <Grid container style={{padding: 10}} direction='row' justify='center' alignItems='center'>
        <Grid item className={classes.item}>
          <Typography>Proximity: {Number(prox).toFixed(2)}; Light: {Number(light).toFixed(2)}; White: {Number(white).toFixed(2)}</Typography>
        </Grid>
        <Grid item className={classes.item}>
          <Button variant='contained' color='primary' onClick={() => {
            setCollecting(true);
            setDataList([]);
          }}>Start</Button>
        </Grid>
        <Grid item className={classes.item}>
          <Button variant='contained' color='secondary' onClick={() => {
            setCollecting(false);
          }}>Stop</Button>
        </Grid>
        <Grid item className={classes.item}>
          <Button variant='contained' color='success' onClick={() => {
            // download
            let csv = Papa.unparse(dataList);
            downloadCSV(csv);
          }}>Download</Button>
          </Grid>
      </Grid>
      <MyResponsiveLine data={daData} />
      <Typography className={classes.item}>{`Number of Data Points: ${objLen}`}</Typography>
    </div>
  );
}

// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
function downloadCSV(csv) {
  const link = document.createElement('a');
  if (csv == null) return;

  const filename = 'export.csv';

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute('href', encodeURI(csv));
  link.setAttribute('download', filename);
  link.click();
}

export default App;
