const Banner = () => {
  return (
    <div className=" h-5/6 bg-[url('./assets/bannerimg.jpeg')] bg-cover  ">
      <div className="backdrop-brightness-50 h-full w-full flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-white font-extrabold sm:text-3xl text-2xl">
            TURNING ORDINARY LAWNS INTO EXTRAORDINARY LANDSCAPES
          </h1>
          <p className="text-white font-light text-sm sm:text-lg">
            PREMIER NATIONAL LAWN SERVICES COMPANY
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
