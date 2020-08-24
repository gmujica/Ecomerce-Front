import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:7500'

export async function saveItem() {
  saveItem = () => {
    axios({
      url:`${BASE_URL}/items`,
      method:'GET',
    })
    .then(res =>{
      console.log('Data has been GET from the server', res)
      setItems(res.data)
      
    })
    .catch(err => {
      console.log(err);
    })
  }
}
