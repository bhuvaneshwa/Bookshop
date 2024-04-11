import { Link } from "react-router-dom";

export default function General() {
  return (
    <div>
      <div className="grid grid-rows-2">
        <div className="flex flex-row justify-between">
          <h1>General books</h1>
          <Link to="/premium-books" className="underline">View all</Link>
        </div>
        <div className="bg-gray-200 flex flex-wrap" style={{ marginTop: '-26rem' }}>
          {/* Here goes the content of your premium books */}
          <div class=" w-72 mr-3 m-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
            <a href="#">
              <img class="p-8 rounded-t-lg w-46 h-46" src="https://bestofusedbooks.com/cdn/shop/products/OneIndianGirl_195x195@2x.jpg?v=1627227323" alt="product image" />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">One Indian Girl</h5>
              </a>
              <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                  {/* Replace the SVG icons with your own icons */}
                  {/* SVG icons */}
                </div>
                <span class="bg-blue-100 text-orange-400 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-white dark:text-orange-400 ms-3">5.0</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">₹500</span>
                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
              </div>
            </div>
          </div>
          {/* Repeat the above code block for each book */}
          <div class=" w-72 mr-3 m-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
            <a href="#">
              <img class="p-8 rounded-t-lg w-46 h-46" src="https://images-us.bookshop.org/ingram/9780062963505.jpg?height=500&v=v2-314a5e611f125ea779c71f17189016c2" alt="product image" />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">The Adventures of Amina Al-Sirafi, by Shannon Chakraborty</h5>
              </a>
              <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                  {/* Replace the SVG icons with your own icons */}
                  {/* SVG icons */}
                </div>
                <span class="bg-blue-100 text-orange-400 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-white dark:text-orange-400 ms-3">5.0</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">₹500</span>
                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
              </div>
            </div>
          </div>

          <div class=" w-72 mr-3 m-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
            <a href="#">
              <img class="p-8 rounded-t-lg w-46 h-46" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663778488-51vYL46dfL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="product image" />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">The Eye of the World</h5>
              </a>
              <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                  {/* Replace the SVG icons with your own icons */}
                  {/* SVG icons */}
                </div>
                <span class="bg-blue-100 text-orange-400 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-white dark:text-orange-400 ms-3">5.0</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">₹500</span>
                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
              </div>
            </div>
          </div>


          <div class=" w-72 mr-3 m-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
            <a href="#">
              <img class="p-8 rounded-t-lg w-46 h-46" src="https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780356516851&w=&h=250" alt="product image" />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">The Wheel Time</h5>
              </a>
              <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                  {/* Replace the SVG icons with your own icons */}
                  {/* SVG icons */}
                </div>
                <span class="bg-blue-100 text-orange-400 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-white dark:text-orange-400 ms-3">5.0</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">₹500</span>
                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</a>
              </div>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
}
