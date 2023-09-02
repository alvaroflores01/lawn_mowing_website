const SectionTitle = ({ title, subtitle, color, bgColor }) => {
  return (
    <div
      className={`${bgColor} container mx-auto my-10 pt-10 text-center px-2 text-${color}`}
    >
      <div className="sm:w-1/2 mx-auto">
        <h2 className="sm:text-6xl sm:font-light text-4xl">{title}</h2>
        <p className="my-3 text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
