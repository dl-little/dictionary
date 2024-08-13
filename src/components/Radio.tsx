const Radio: React.FC<TRadio> = (props) => {
  const { id, label, handleClick, activeIndex, index, fClass } = props;

  return (
    <li
      id={id}
      onClick={handleClick}
      role="radio"
      aria-checked={activeIndex === index}
      data-index={`${index}`}
      className={fClass}
    >
      {label}
    </li>
  );
};

export default Radio;
