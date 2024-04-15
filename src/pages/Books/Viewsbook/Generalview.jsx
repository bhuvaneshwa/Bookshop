// Ecommerce Card Component
const EcommerceCard = ({ image, title, price, description }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="text-gray-700 text-base">{price}</p>
      </div>
    </div>
  );
};


export default function Generalview() {
  // Sample data for demonstration
  const products = [
    {
      id: 1,
      title: "Product 1",
      image: "https://via.placeholder.com/150",
      price: "$19.99",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Product 2",
      image: "https://via.placeholder.com/150",
      price: "$24.99",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: 3,
      title: "Product 3",
      image: "https://via.placeholder.com/150",
      price: "$29.99",
      description: "Fusce at nisi eget dolor rhoncus tincidunt id in libero.",
    },
    {
      id: 3,
      title: "Product 3",
      image: "https://via.placeholder.com/150",
      price: "$29.99",
      description: "Fusce at nisi eget dolor rhoncus tincidunt id in libero.",
    },
  ];

  return (
    <div className="container mx-5 py-8">
      <h2 className="text-3xl font-bold mb-8">General Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Render each product card */}
        {products.map((product) => (
          <EcommerceCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}
