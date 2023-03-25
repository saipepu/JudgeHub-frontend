import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {

  const navigation = useNavigate();
  useEffect(() => {
    navigation('/login')
  }, [navigation])
  return (
    <div>PageNotFound</div>
  )
}

export default PageNotFound