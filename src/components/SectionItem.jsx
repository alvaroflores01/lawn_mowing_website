const SectionItem = ({ imgUrl, itemTitle, itemText, theme, svg }) => {
  let titleColor = "black";
  let textColor = "black";
  if (theme == "dark") {
    titleColor = "white";
    textColor = "white";
  }
  return (
    <div className={`flex flex-col text-center items-center sm:w-1/3 mb-11 `}>
      {/* ICON */}
      <img className="w-16" src={imgUrl}></img>
      <div className={`text-${titleColor} pb-3`}>{svg}</div>
      {/* ITEM TITLE */}
      <h2 className={`text-${titleColor} font-extrabold`}>{itemTitle}</h2>
      {/* ITEM TEXT */}
      <p className={`w-60 text-${textColor}`}>{itemText}</p>
    </div>
  );
};

export default SectionItem;
