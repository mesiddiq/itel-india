import React from 'react'

const Footer = () => {
    return (
        <div className='w-full'>
            <div className="grid grid-cols-6 gap-4">
  <div className="col-span-2 bg-blue-500">Column 1 (Larger)</div>
  <div className="col-span-1 bg-red-500">Column 2</div>
  <div className="col-span-1 bg-green-500">Column 3</div>
  <div className="col-span-1 bg-yellow-500">Column 4</div>
  <div className="col-span-1 bg-purple-500">Column 5</div>
</div>


        </div>
    )
}

export default Footer