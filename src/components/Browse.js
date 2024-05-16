import React from 'react'
import Header from './Header'
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMoviesList from '../hooks/usePopularMoviesList'

const Browse = () => {

usePopularMoviesList()


  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse