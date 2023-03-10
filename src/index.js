import React,{ useState } from 'react'
import ReactDOM from 'react-dom'
import { createTheme, ThemeProvider } from '@mui/material';



import CalculatorForm from './components/CalculatorForm.js'
// Only use hooks at the top level of your React function, otherwise you will run into errors.

import Form from './components/Form.js'

function App() {

  const theme = createTheme ({
    typography: {
        fontFamily: [
            'Roboto', 
            'sans-serif'
        ].join(','),
    }
})

  return (
    <ThemeProvider theme={theme}>
      <div>
          <Form/>
      </div>
    </ThemeProvider>
  );
}
 
ReactDOM.render(
React.createElement(App, {}, null),
document.getElementById('react-target')
);