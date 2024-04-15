// create component for drop down menu
export const CustomGeo = () => {
  const handleGeoChange = (value) => {
    console.log(value);
    window.localStorage.setItem("geo", value);
    //window.location.reload();
  };
  return (
    <div>
      <select onChange={(e) => handleGeoChange(e)}>
        <option value="IN">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>

      <style jsx>
        {`
          select {
            margin-left: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default CustomGeo;
