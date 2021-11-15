# ra-simple-components

Component library to facilitate the development of your React application.

## Install

```bash
npm install ra-simple-components
```

or

```bash
yarn add ra-simple-components
```

## Usage

```jsx
import React from 'react'
//IMPORT BUTTON COMPONENTS
import { Button } from 'ra-simple-components'
//IMPORT STYLESHEET
//you can import the stylesheet into your main 'index.js' file so you don't have to import it into multiple components
import 'ra-simple-components/dist/index.css'

const YourApp = () => {
  return (
    <Button
      type='default'
      margin='0px .5rem'
      iconPosition='left'
      label='default'
      size='small'
    />
  )
}

export default YourApp
```

## License

MIT © [TraoreIbrahim](https://github.com/TraoreIbrahim)
