import React from 'react'
import { useLocation } from 'react-router'

function SearchPage() {
  const location=useLocation()
  console.log("location",location)
  return (
    <div>
      SearchPage
    </div>
  )
}

export default SearchPage
