import React from "react";

// Card component
function Card({ title, description }) {
  return (
    <div className="bg-white p-4 mb-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export default function General() {
  return (
    <div className="flex flex-wrap  justify-between">
 <div className="flex justify-between items-center mb-4">
      <h1 className="">General Books</h1>
      <h1 className="underline">View all</h1>
    </div>
      {/* Card 1 */}
      <Card title="Card 1 Title" description="Description of Card 1." />

      {/* Card 2 */}
      <Card title="Card 2 Title" description="Description of Card 2." />

      {/* Card 3 */}
      <Card title="Card 3 Title" description="Description of Card 3." />

      <Card title="Card 3 Title" description="Description of Card 3." />

      <Card title="Card 3 Title" description="Description of Card 3." />

     

      {/* Add more cards as needed */}
    </div>
  );
}
