import Versions from './components/Versions'
import icons from './assets/icons.svg'

// import startBackgroundProcess from "../../preload/index"



// const { ipcRenderer } = window.require('electron');
// import { PythonShell } from 'python-shell';
import { Button, Box } from '@mui/material';
import React, { useState } from 'react';


const {PythonShell} = require('python-shell');

let pyshell = new PythonShell('script.py');


// ipcRenderer.send('START_BACKGROUND_VIA_MAIN', {"helloworld": 1});

function App(): JSX.Element {


  const [value, setValue] = useState<string>("")
  
//   ipcRenderer.on('START_PROCESSING', (event, args) => {  
//     const { data } = args;
    
//     let pyshell = new PythonShell(path.join(__dirname,             
//       '/../scripts/factorial.py'),
//       {pythonPath: 'python3',   args: [data]  
//     });  
    
//     pyshell.on('message',function(results) {   
//     ipcRenderer.send(
//       'MESSAGE_FROM_BACKGROUND', 
//       { message: results }
//     );            
//   });
// });




//   ipcRenderer.send(
//     'BACKGROUND_PROCESS_START', 
//     { 
//       "Key1": 123,
//       "Key2": 456
//     }
//   );

let options = {
  mode: 'text'
};

function callback(event) {
  
  // console.log("here")
  
  // pyshell.run('../test/src/python/script.py', options, function (err, results) {
    
  //   console.log("Hello")
    
  //   if (err) throw err;

  //   console.log("Hello")

  //   // results is an array consisting of messages collected during execution
  //   console.log('results: ', results);
  //   // results.textContent = results[0];

  //   setValue(results.textContent)

  // });



  PythonShell.run('../test/src/python/mazeGeneration.py', null).then(messages => {

    console.log(messages)

    


  })
    
    // console.log("Hello")
}





//   ipcRenderer.on('START_PROCESSING', 
//   (event, args) => {  
//     const { data } = args;
//     let pyshell = new PythonShell(path.join(__dirname,             
//       '/../scripts/factorial.py'),
//       {pythonPath: 'python3',   args: [data]  
//     });  
//     pyshell.on('message',function(results) {   
//     ipcRenderer.send(
//       'MESSAGE_FROM_BACKGROUND', 
//       { message: results }
//     );            
//   });
// });

  let maze: number[][] = [];

  for(let i = 0; i < 1000; i++){

    let list: number[] = []

    for(let j = 0; j < 1000; j++){

      list.push(Number((i + j) % 2))

    }

    maze.push(list)
  }

  console.log()
  
  
  return (
    <div style={{display: "flex", width: "100%", height: "100%"}}>
      {/* <Box sx={{width: "50%", border: '2px solid grey', backgroundColor: "white", paddingTop: "100%"}}></Box> */}
      
      <div style={{display: "flex", flexDirection: "column"}}>
      {/* {
        maze.map( (row: number[]) => {
          
          // for(cells:row){

          // }
          return<p>hello</p>
          
          
          return row.map( (cell: number) => {  
            return <p>{cell}</p>
          })
        })
      } */}
        {value}
      </div>

      <div style={{display: "flex", flexDirection: "column"}}>
        <Button variant="outlined" style={{}} onClick={callback}>Start</Button>
        <Button variant="outlined" style={{}}>Save Maze</Button>
        <Button variant="outlined" style={{}}>Load Maze</Button>
      </div>
    </div>
  )
}

export default App
