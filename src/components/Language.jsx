import Lang from "./Lang";

const Language = () => {
  const lang = ["English", "Hindi", "Urdu", "Arabic", "Telugu"];
  let count = 0;
  return (
    <>
      <h4 className="my-5">Languages Available</h4>
      <p>{count}</p>
      <button onClick={() => count + 1}>+</button>
      {lang.map((ln, index) => (
        <Lang ln={ln} key={index} />
      ))}
    </>
  );
};

export default Language;
