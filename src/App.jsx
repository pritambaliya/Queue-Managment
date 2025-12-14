import { useState } from 'react'
import { QueueForm } from './components/QueueForm'
import { QueueDisplay } from './components/QueueDisplay'

function App() {

  const [queue, setQueue] = useState([])

  const addQue = (customer) =>{
    setQueue([...queue,{
      ...customer,
      id:Date.now(),
      status:"waiting"
    }])
    console.log(queue)
  }

  const updateState = (id, newStatus) =>{
    setQueue(
      queue.map(customer =>
        customer.id === id
          ? { ...customer, status: newStatus }
          : customer
      )
    )
  }

  const remove = (id) =>{
    setQueue(queue.filter(customer => customer.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <h1 className="text-3xl font-bold text-center mb-6">
        Queue Management System
      </h1>

      {/* Form */}
      <QueueForm addQueue={addQue}/>

      {/* Queue Display */}
      <QueueDisplay queue={queue} onUpdate={updateState} onRemove={remove}/>
    </div>
  )
}

export default App
