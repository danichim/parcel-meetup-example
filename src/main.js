import React from 'react'
import { render } from 'react-dom'
import App from './App'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // Import precompiled Bootstrap css
import '@fortawesome/fontawesome-free/css/all.css'

render(<App />, document.getElementById('app'))