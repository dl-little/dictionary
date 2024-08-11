const Radio = () => {
  return (
    <>
      <h3 id="group_label_1">Pizza Crust</h3>
      <ul
        className="radiogroup-activedescendant"
        role="radiogroup"
        aria-labelledby="group_label_1"
        aria-activedescendant="rb11"
        tabIndex={0}
      >
        <li id="rb11" role="radio" aria-checked="false">
          Regular crust
        </li>
        <li id="rb12" role="radio" aria-checked="false">
          Deep dish
        </li>
        <li id="rb13" role="radio" aria-checked="false">
          Thin crust
        </li>
      </ul>
    </>
  );
};

export default Radio;
