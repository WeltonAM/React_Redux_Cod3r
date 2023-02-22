import React from 'react'
import Main from '../template/Main'

const User = () => {

  const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'User register'
  }

  return (
    <Main {...headerProps}>
      User
    </Main>
  )
}

export default User