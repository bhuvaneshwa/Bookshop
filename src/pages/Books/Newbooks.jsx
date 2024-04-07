import { Link } from "react-router-dom"
export default function Newbooks() {
  return (
    <div>
      <div className="grid grid-rows-2">
        <div className="flex flex-row justify-between">
          <h1>Premium books</h1>
          <Link to="/premium-books" className="underline">View all</Link>
        </div>
        <div className="bg-gray-700 flex flex-wrap" style={{ marginTop: '-10px' }}> {/* Adjust the margin */}
          {/* Here goes the content of your premium books */}
          <div className="bg-red-800 p-4 m-2">
            {/* Card content */}
            <h2>Title 1</h2>
            <p>Description of the book 1</p>
          </div>
          <div className="bg-red-800 p-4 m-2">
            {/* Card content */}
            <h2>Title 2</h2>
            <p>Description of the book 2</p>
          </div>
          <div className="bg-red-800 p-4 m-2">
            {/* Card content */}
            <h2>Title 3</h2>
            <p>Description of the book 3</p>
          </div>
          <div className="bg-red-800 p-4 m-2">
            {/* Card content */}
            <h2>Title 4</h2>
            <p>Description of the book 4</p>
          </div>
          <div className="bg-red-800 p-4 m-2">
            {/* Card content */}
            <h2>Title 5</h2>
            <p>Description of the book 5</p>
          </div>

          <div className="bg-red-800 p-4 m-2">
            {/* Card content */}
            <h2>Title 5</h2>
            <p>Description of the book 5</p>
          </div>

          
        </div>
      </div>
    </div>
  )
}
