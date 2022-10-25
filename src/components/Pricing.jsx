import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { useState } from "react";

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="w-screen flex justify-center bg-customDarkBg2">
      <div className="pb-20 pt-12 bg-customDarkBg2 w-3/5 ">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="custom-block-subtitle">
              Dolor sit amet consectutar
            </span>
            <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
              Choose your best plan
            </h2>
            <p className="mb-6 text-customGrayText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <label className="mx-auto bg-customDarkBg3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
              <input
                type="checkbox"
                className="peer appearance-none"
                checked={!isMonthly}
                onChange={handleChange}
              />
              <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-customDarkBg3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-customPrimary hover:after:bg-[#7765e6]  after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
              <div className="flex absolute text-white text-sm font-bold">
                <div
                  className={
                    isMonthly ? "mr-9 ml-3" : "mr-9 ml-3 text-gray-400"
                  }
                >
                  Monthly
                </div>
                <div className={isMonthly && "text-gray-400"}>Yearly</div>
              </div>
            </label>
          </div>
          <div className="flex flex-wrap -mx-4 items-center mt-20">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="p-8 bg-customDarkBg3 rounded-3xl">
                <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                  Beginner
                </h4>
                <div className="flex justify-start items-end">
                  <div className="text-5xl font-bold text-white text-left mt-4 mr-2">
                    $0
                  </div>
                  <div className="text-gray-500">
                    {isMonthly ? "/ month" : "/ year"}
                  </div>
                </div>

                <p className="mt-4 mb-14 text-gray-500 leading-loose text-left">
                  The perfect way to get started and get used to our tools.
                  Lorem ipsum.
                </p>
                <ul className="mb-6 text-white">
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Vestibulum viverra</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Morbi mollis metus pretium</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Etiam lectus nunc, commodo</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Ut quam nisl mollis id pretium</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Suspendisse bibendum</span>
                  </li>
                </ul>
                <a
                  className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                  href="#"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="px-8 py-8 bg-customDarkBg3 rounded-3xl">
                <h4 className="mb-4 text-2xl font-bold font-heading text-white text-left">
                  Standard
                </h4>
                <div className="flex justify-start items-end">
                  <div className="text-5xl font-bold text-white text-left mt-4 mr-2">
                    {isMonthly ? "$19" : "$180"}
                  </div>
                  <div className="text-gray-500">
                    {isMonthly ? "/ month" : "/ year"}
                  </div>
                </div>
                <p className="mt-8 mb-16 text-gray-500 leading-loose text-left">
                  The perfect way to get started and get used to our tools.
                  Lorem ipsum.
                </p>
                <ul className="mb-14 text-white">
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Vestibulum viverra</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Morbi mollis metus pretium</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Etiam lectus nunc, commodo</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Ut quam nisl mollis id pretium</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Suspendisse bibendum</span>
                  </li>
                </ul>
                <a
                  className="inline-block text-center py-2 px-4 w-full custom-button-colored leading-loose transition duration-200 mt-20"
                  href="#"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="p-8 bg-customDarkBg3 rounded-3xl">
                <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                  Premium
                </h4>
                <div className="flex justify-start items-end">
                  <div className="text-5xl font-bold text-white text-left mt-4 mr-2">
                    {isMonthly ? "$36" : "$390"}
                  </div>
                  <div className="text-gray-500">
                    {isMonthly ? "/ month" : "/ year"}
                  </div>
                </div>
                <p className="mt-4 mb-14 text-gray-500 leading-loose text-left">
                  The perfect way to get started and get used to our tools.
                  Lorem ipsum.
                </p>
                <ul className="mb-6 text-white">
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Vestibulum viverra</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Morbi mollis metus pretium</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Etiam lectus nunc, commodo</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Ut quam nisl mollis id pretium</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Suspendisse bibendum</span>
                  </li>
                </ul>
                <a
                  className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                  href="#"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
