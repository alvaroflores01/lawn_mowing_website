const TextAndImage = () => {
  return (
    <div className="container mx-auto sm:flex sm:p-10 gap-11 my-10 items-center">
      {/* COLUMN 1 */}
      <div className="sm:w-1/2 p-4">
        <h2 className="font-extrabold sm:text-2xl text-xl mb-3">
          About Tampa Lawns, LLC
        </h2>
        <p className="italic">
          At Tampa Lawns, we are more than just a lawn care company - we are
          cultivators of natural beauty and outdoor sanctuaries. With a passion
          for transforming ordinary landscapes into thriving works of art, we
          bring expertise and dedication to every blade of grass. Our team of
          skilled professionals understands that your lawn is a canvas of
          possibilities, and we treat it as such. Through meticulous care,
          tailored solutions, and a commitment to sustainable practices, we
          breathe life into lawns, creating lush, vibrant spaces that enchant
          and inspire. Experience the essence of verdant elegance with
          GreenScape Lawns - where nature and craftsmanship unite.
        </p>
        <button className="bg-yellow-400  border text-gray-700 font-bold my-5 p-3 rounded-lg hover:cursor-pointer hover:bg-yellow-500">
          READ MORE
        </button>
      </div>
      {/* //COLUMN 2 */}
      <div className="sm:w-1/2 h-96 flex justify-center p-6 sm:p-0">
        <div className="bg-gray-800 text-white rounded-lg w-full flex justify-center items-center">
          <h1>About Us Image</h1>
        </div>
      </div>
    </div>
  );
};

export default TextAndImage;
