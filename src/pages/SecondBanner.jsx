

export default function SecondBanner() {
  // Define background images for each card
  const cardImages = [
    'url("https://via.placeholder.com/300x200")',
    'url("https://via.placeholder.com/300x200")',
    'url("https://via.placeholder.com/300x200")'
  ];

  return (
    <div className='flex space-x-5 justify-between m-10'>
      {/* Card 1 with background image */}
      <div className="bg-white p-4 mb-4 rounded shadow cursor-pointer" style={{ backgroundImage: cardImages[0] }}>
        <h2 className="text-lg font-bold mb-2">New Books</h2>
        <p className="text-sm">Description of product 1 goes here.</p>
      </div>

      {/* Card 2 with background image */}
      <div className="bg-white p-4 mb-4 rounded shadow cursor-pointer" style={{ backgroundImage: cardImages[1] }}>
        <h2 className="text-lg font-bold mb-2">Premimu books</h2>
        <p className="text-sm">Description of product 2 goes here.</p>
      </div>

      {/* Card 3 with background image */}
      <div className="bg-white p-4 mb-4 rounded shadow cursor-pointer" style={{ backgroundImage: cardImages[2] }}>
        <h2 className="text-lg font-bold mb-2">Gernal books</h2>
        <p className="text-sm">Description of product 3 goes here.</p>
      </div>
    </div>
  );
}
