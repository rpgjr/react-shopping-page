import React from 'react'
import Featured from '../GameStore/Featured'
import ProductList from '../GameStore/ProductList'

const GameStore = () => {
  return (
    <React.Fragment>
      <Featured />
      <ProductList />
    </React.Fragment>
  )
}

export default GameStore