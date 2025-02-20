import Navbar from "../../components/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-neutral min-h-dvh text-accent">
      <Navbar />
      <div className="px-5">
        <div className="max-w-7xl mx-auto mt-12">
          <h1 className="text-3xl font-bold mb-8">Welcome to Your Dashboard</h1>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Wallet Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Wallet</h2>
              <div className="flex justify-between items-center">
                <span className="text-lg">Balance:</span>
                <span className="text-2xl font-bold">$500.00</span>
              </div>
            </div>

            {/* Orders Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Orders</h2>
              <ul className="space-y-3">
                <li className="text-sm">Order #1 - Delivered</li>
                <li className="text-sm">Order #2 - Pending</li>
                <li className="text-sm">Order #3 - Shipped</li>
                {/* Add more orders dynamically */}
              </ul>
            </div>

            {/* Transactions Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Transactions</h2>
              <ul className="space-y-3">
                <li className="text-sm">Transaction #1 - $30.00</li>
                <li className="text-sm">Transaction #2 - $120.00</li>
                <li className="text-sm">Transaction #3 - $15.00</li>
                {/* Add more transactions dynamically */}
              </ul>
            </div>
          </div>

          {/* Earnings Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">Earnings</h2>
            <div className="flex justify-between items-center">
              <span className="text-lg">Total Earnings:</span>
              <span className="text-2xl font-bold">$350.00</span>
            </div>
          </div>

          {/* Products Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <Image
                  src={"/images/img.jpeg"}
                  alt="Product 1"
                  layout="responsive"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <h3 className="text-lg font-semibold mt-4">Product 1</h3>
                <p className="text-sm text-gray-500">Description of product 1.</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <Image
                  src={"/images/img.jpeg"}
                  alt="Product 2"
                  layout="responsive"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <h3 className="text-lg font-semibold mt-4">Product 2</h3>
                <p className="text-sm text-gray-500">Description of product 2.</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <Image
                  src={"/images/img.jpeg"}
                  alt="Product 3"
                  layout="responsive"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <h3 className="text-lg font-semibold mt-4">Product 3</h3>
                <p className="text-sm text-gray-500">Description of product 3.</p>
              </div>
              {/* Add more product cards dynamically */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
