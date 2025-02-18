import  { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import SEO from "../components/SEO";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <section className="border-t pt-16">
      <SEO
        content="This is orders page of FashionFix"
        title="Orders Page"
        route="/orders"
      />
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div className="">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img src={item.image[0]} alt="" className=" w-16 sm:w-20" />
              <div className="">
                <p
                  className="sm:text-base font-medium
                "
                >
                  {item.name}
                </p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}.00
                  </p>
                  <p className="">Quantity: 1</p>
                  <p className="">Size: M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-400">24 Dec,2024</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Ready to ship</p>
              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Orders;
