import React from 'react'

function Divider() {
  return (
    <div  style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
    <div style={{flex: 1, height: '2px', backgroundColor: 'white'}} />

    <div>
    <p className='text' style={{width: '70px', textAlign: 'center'}}>Or</p>
 </div>

     <div style={{flex: 1, height: '2px', backgroundColor: 'white'}} />
    </div>  )
}

export default Divider