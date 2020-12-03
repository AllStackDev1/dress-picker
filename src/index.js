import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import { render } from 'react-dom'
import $ from 'jquery'

import Routes from './routes/Routes'
import './tailwind.generated.css'

window.$ = window.jQuery = $

const rootElement = document.getElementById('app')

render(<Routes />,rootElement)
