import { useState } from 'react'

export const QueueForm = ({ addQueue }) =>{
      const [name, setName] = useState("")
      const [service, setServices] = useState("")

      const handleEvent = (e) =>{
        e.preventDefault();
        if(!name.trim() || !service.trim()) return alert("Something Wrong!..")
        addQueue({name, service})
        setName("")
        setServices("")
      }
    return(
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Queue Form</h2>

        <form onSubmit={handleEvent} className="space-y-4">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            value={service}
            onChange={(e)=>setServices(e.target.value)}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select Services</option>
            <option value="Consultation">Consultation</option>
            <option value="Payment">Payment</option>
            <option value="Support">Support</option>
          </select>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    )
}