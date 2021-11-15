import React from 'react'

import { Button } from 'planet-app-components'
import 'planet-app-components/dist/index.css'
import Icon from './assets/svg/arrowLeft.svg'
import './index.css'

const App = () => {
  return (
    <div className='container'>
      <div className='item-container'>
        <span style={{ fontSize: 32, fontWeight: '400' }}>
          Button Components
        </span>
      </div>
      <div className='item-container'>
        <span style={{ width: 100 }}>Small</span>
        <Button
          type='default'
          margin='0px .5rem'
          iconPosition='left'
          label='default'
          size='small'
        />
        <Button
          type='primary'
          margin='0px .5rem'
          iconPosition='left'
          label='primary'
          size='small'
        />
        <Button
          type='secondary'
          margin='0px .5rem'
          iconPosition='left'
          label='secondary'
          size='small'
        />
        <Button
          type='success'
          iconPosition='left'
          margin='0px .5rem'
          label='success'
          size='small'
        />
        <Button
          type='warning'
          iconPosition='left'
          margin='0px .5rem'
          label='warning'
          size='small'
        />
        <Button
          type='danger'
          iconPosition='left'
          margin='0px .5rem'
          label='danger'
          size='small'
        />
        <Button
          type='dark'
          iconPosition='left'
          margin='0px .5rem'
          label='dark'
          size='small'
        />
      </div>
      <div className='item-container'>
        <span style={{ width: 100 }}>Medium</span>
        <Button
          iconPosition='right'
          margin='0px .5rem'
          type='default'
          label='default'
          size='medium'
        />
        <Button
          type='primary'
          iconPosition='right'
          margin='0px .5rem'
          label='primary'
          size='medium'
        />
        <Button
          type='secondary'
          iconPosition='right'
          margin='0px .5rem'
          label='secondary'
          size='medium'
        />
        <Button
          type='success'
          iconPosition='right'
          margin='0px .5rem'
          label='success'
          size='medium'
        />
        <Button
          type='warning'
          iconPosition='right'
          margin='0px .5rem'
          label='warning'
          size='medium'
        />
        <Button
          type='danger'
          iconPosition='right'
          margin='0px .5rem'
          label='danger'
          size='medium'
        />
        <Button
          type='dark'
          iconPosition='right'
          margin='0px .5rem'
          label='dark'
          size='medium'
        />
      </div>
      <div className='item-container'>
        <span style={{ width: 100 }}>Large</span>
        <Button
          iconPosition='right'
          margin='0px .5rem'
          label='default'
          type='default'
          size='large'
        />
        <Button
          type='primary'
          iconPosition='right'
          margin='0px .5rem'
          label='primary'
          size='large'
        />
        <Button
          type='secondary'
          iconPosition='right'
          margin='0px .5rem'
          label='secondary'
          size='large'
        />
        <Button
          type='success'
          iconPosition='right'
          margin='0px .5rem'
          label='success'
          size='large'
        />
        <Button
          type='warning'
          iconPosition='right'
          margin='0px .5rem'
          label='warning'
          size='large'
        />
        <Button
          type='danger'
          iconPosition='right'
          margin='0px .5rem'
          label='danger'
          size='large'
        />
        <Button
          type='dark'
          iconPosition='right'
          margin='0px .5rem'
          label='dark'
          size='large'
        />
      </div>
    </div>
  )
}

export default App
