import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

const ProductTable= () => {
  const [productList, setProductList] = useState([])
  const [rows, setRows] = useState([])

  const columns = [
    
    { field: 'code', headerName: 'Code', width: 120 },
   
    {
      field: 'pack',
      headerName: 'Pack ',
      type: 'number',
      width: 80,
    },
    {
      field: 'whole',
      headerName: 'Whole Sale Price',
      type: 'number',
      width: 80,
    },
    {
      field: 'retail',
      headerName: 'Retail Price',
      type: 'number',
      width: 80,
    },
    
  ];

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://caltexserver.netlify.app/api/product');
        if(!response.ok){
          throw new Error('Failed to fetch data');
        }   
        
        const data = await response.json();

        const rowsWithId = data.map((row, index) => ({id:index + 1, ...row}));
        setRows(rowsWithId)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
     
    }
    fetchData()

  },[])
  return (
    <div >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        
        disableSelectionOnClick
       
      />
    </div>
  )
}

export default  ProductTable