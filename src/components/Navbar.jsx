const Navbar = () => {
  return (
    <div className="sm:flex sm:h-1/6 justify-between container mx-auto items-center sm:p-2">
      <div className="border-4 px-10 py-3 font-bold text-center border-green-500">
        TAMPA LAWNS LOGO
      </div>
      <div>
        <ul className="sm:flex items-center text-center gap-5 font-bold py-3 text-green-600">
          <li className="">
            <a href="#about">About Us</a>
          </li>
          <li className="">
            <a href="#services">Services</a>
          </li>
          <li className="bg-yellow-400 p-2 rounded-lg text-gray-800 hover:bg-yellow-500 px-4">
            <a href="#contact">Get Estimate</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
