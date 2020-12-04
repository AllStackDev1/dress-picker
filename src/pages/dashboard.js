import React, { useState } from 'react'

const Dashboard = () => {
  const [formData, setFormData] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)
  }
  const hanleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className='my-1/12'>
      <h1 className='text-center text-xl py-5'>OUTFIT PLANNER</h1>
      <div className='h-full w-3/4 mx-auto grid grid-cols-3 gap-0 border border-yellow-600 '>
        <div className='h-full bg-gray-500 px-5 py-5'>
          <h1 className='text-white py-2'> Outfit Selection Panel</h1>
          <form onSubmit={handleSubmit}>
            {[
              { option1: 'Jacket1', option2: 'Jacket2', option3: 'Jacket3', option4: 'Jacket4' },
              { option1: 'Jacket1', option2: 'Jacket2', option3: 'Jacket3', option4: 'Jacket4' },
              { option1: 'Jacket1', option2: 'Jacket2', option3: 'Jacket3', option4: 'Jacket4' },
              { option1: 'Jacket1', option2: 'Jacket2', option3: 'Jacket3', option4: 'Jacket4' },
              { option1: 'Jacket1', option2: 'Jacket2', option3: 'Jacket3', option4: 'Jacket4' }
            ].map(({ option1, option2, option3, option4 }, index) => (
              <select name='name' key={index} className='my-5 w-full py-1' onChange={hanleChange}>
                <option value={option1}>{option1}</option>
                <option value={option2}>{option2}</option>
                <option value={option3}>{option3}</option>
                <option value={option4}>{option4}</option>
              </select>
            ))}
            <button
              type='submit'
              className='my-10 text-white px-6  border border-cool-gray-300 bg-gray-400'
            >
              Submit
            </button>
          </form>
        </div>
        <div className='col-span-2 h-full bg-cool-gray-300 p-5'>
          <div className='grid grid-cols-2 gap-4 gap-y-4'>
            <Card
              type='JACKET'
              image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.dhgate.com%2F0x0s%2Ff2-albu-g6-M00-67-E4-rBVaSFrR-JeAOF4jAAVq-9T3e14704.jpg%2Ffashion-women-clothing-spring-autumn-women.jpg&f=1&nofb=1'
            />
            <Card
              type='SHOE'
              image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-iYIAOBRP0Jw%2FURT9oWCDOyI%2FAAAAAAAARLE%2FZCoYGt-Exws%2Fs1600%2FW%2BShoes%2B7.jpg&f=1&nofb=1'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

const Card = ({ image, type }) => {
  return (
    <div className='bg-white mr-5 h-32'>
      <img src={image} className='' />
      <h1 className='text-center bg-white text-lg text-black py-4 px-3'>{type}</h1>
    </div>
  )
}
