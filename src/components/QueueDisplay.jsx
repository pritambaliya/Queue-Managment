export const QueueDisplay = ({queue, onUpdate, onRemove})=>{
    return(
        <div className="max-w-3xl mt-8 grid gap-4 mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold">Queue List</h2>
        {queue.length == 0 ? (<h1 className="text-center mt-10">No Customer</h1>):(
        <>
        {queue.map(que => (
          <div
            key={que.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center border border-black"
          >
            <div>
              <p className="font-semibold">{que?.name}</p>
              <p className="text-sm text-gray-500">{que.service}</p>

              <span
                className={`inline-block mt-2  text-sm
                  ${que.status === "waiting" && "text-yellow-500"}
                  ${que.status === "serving" && "text-blue-500"}
                  ${que.status === "complete" && "text-green-500"}
                `}
              >
                {que.status}
              </span>
            </div>

            <div className="flex gap-2">
              {que.status === "waiting" && (
                <button
                  onClick={() => onUpdate(que.id, "serving")}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Serve
                </button>
              )}

              {que.status === "serving" && (
                <button
                  onClick={() => onUpdate(que.id, "complete")}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Complete
                </button>
              )}

              <button
                onClick={() => onRemove(que.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        </> 
        )}
      </div>
    )
}