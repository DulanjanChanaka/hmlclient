import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import ProductTable from './tables/productTable';
const Product = () => {

  return (
    <div className='pt-20 pl-5' >
      <ProductTable/>
    </div>
  )
}

export default  Product