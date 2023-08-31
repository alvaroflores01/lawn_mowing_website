const SmallBanner = ({ message }) => {
  return (
    <div className="mx-auto sm:h-28 sm:flex justify-center py-5 items-center bg-yellow-400">
      <div>
        <h1 className="text-gray-700 font-bold sm:text-3xl text-2xl text-center px-3 italic">
          {message}
        </h1>
      </div>
    </div>
  );
};
export default SmallBanner;
