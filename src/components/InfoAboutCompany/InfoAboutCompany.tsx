import { Building2 } from "lucide-react";
import TeamSection from "../TeamSection/TeamSection";

function InfoAboutCompany() {
  return (
    <div className="flex flex-col gap-2">
      <h1
        className="flex items-center mb-4 pb-2
        gap-3 text-2xl sm:text-xl font-bold border-b-2 w-4/6 sm:w-2/12"
      >
        <Building2 />
        Sporting-Goods
      </h1>
      <div>
        <div className=" mx-auto p-6 bg-white rounded-lg shadow-lg">
          <p className="text-lg mb-2">
            <strong>Founded:</strong> 2024
          </p>
          <p className="text-lg mb-2">
            <strong>Headquarters:</strong> Rangpur, Thakurgaon, BAN
          </p>
          <p className="text-lg mb-4">
            <strong>Industry:</strong> Sporting Goods
          </p>

          <h2 className="text-2xl font-semibold mb-2">
            Mission and Vission Statement
          </h2>
          <p className="mb-4">
            "To inspire and nurture the athlete in everyone by providing
            top-quality sporting goods and equipment that enhance performance
            and promote a healthy, active lifestyle."
          </p>
          <h2 className="text-2xl font-semibold mb-2">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-1">Basketball</h3>
              <ul className="list-disc list-inside">
                <li>Basketballs</li>
                <li>Hoops and Nets</li>
                <li>Basketball Shoes</li>
                <li>Apparel</li>
                <li>Training Equipment</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Football</h3>
              <ul className="list-disc list-inside">
                <li>Foot Balls</li>
                <li>Goal Nets</li>
                <li>Cleats</li>
                <li>Jerseys and Shorts</li>
                <li>Training Equipment</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Tennis</h3>
              <ul className="list-disc list-inside">
                <li>Running Shoes</li>
                <li>Apparel</li>
                <li>Accessories</li>
                <li>Nutrition and Hydration</li>
                <li>Fitness Trackers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Volleyball</h3>
              <ul className="list-disc list-inside">
                <li>Camping Gear</li>
                <li>Hiking Equipment</li>
                <li>Outdoor Apparel</li>
                <li>Climbing Gear</li>
                <li>Water Sports Equipment</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p className="mb-2">
            <strong>Website:</strong>{" "}
            <a
              href="http://www.sportpro.com"
              className="text-blue-600 hover:underline"
            >
              www.sporting-goods.com
            </a>
          </p>
          <p className="mb-2">
            <strong>Customer Service:</strong> 1-800-SPORTING-GOODS
          </p>
          <p className="mb-2">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@sporting-goods.com"
              className="text-blue-600 hover:underline"
            >
              support@sporting-goods.com
            </a>
          </p>
          <p className="mb-2">
            <strong>Social Media:</strong>
          </p>
          <ul className="list-none pl-0">
            <li>
              <a
                href="http://facebook.com/sporting-goods"
                className="text-blue-600 hover:underline"
              >
                Facebook: Sporting-Goods
              </a>
            </li>
            <li>
              <a
                href="http://twitter.com/sporting-goods"
                className="text-blue-600 hover:underline"
              >
                Twitter: @Sporting-Goods
              </a>
            </li>
            <li>
              <a
                href="http://instagram.com/Sporting-Goods-fficial"
                className="text-blue-600 hover:underline"
              >
                Instagram: @Sporting-Goods-official
              </a>
            </li>
          </ul>
        </div>
      </div>
      <TeamSection></TeamSection>
      <div>
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-bold mb-8">Our Store</h2>
              <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-xl">
                Visit Our Sporting Goods Store
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                We offer a wide range of high-quality sporting goods for all
                your needs. Come visit us and explore our collection!
              </p>
            </div>

            <div className="mt-10">
              <div className="flex flex-col md:flex-row md:justify-around">
                <div className="md:w-1/3 mb-8 md:mb-0">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Store Address
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    1234 Sports Avenue,
                    <br />
                    Rangpur, Thakurgaon, ST 12345
                  </p>
                </div>
                <div className="md:w-1/3 mb-8 md:mb-0">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Contact Information
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Phone: (123) 456-7890
                    <br />
                    Email: info@sportinggoods.com
                  </p>
                </div>
                <div className="md:w-1/3">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Store Hours
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Monday - Friday: 9am - 8pm
                    <br />
                    Saturday: 10am - 6pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <iframe
                title="Store Location"
                className="w-full h-64 md:h-96"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093166!2d144.95373531564846!3d-37.81720984299843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8e4c3c8b8e7!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1591012744064!5m2!1sen!2sau"
                aria-hidden="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoAboutCompany;
