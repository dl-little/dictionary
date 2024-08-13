/* eslint-disable react-hooks/exhaustive-deps */
import {
  Children,
  cloneElement,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  useContext,
} from 'react';
import { FormContext } from '../contexts/FormContextProvider';

const RadioGroup: React.FC<IRadioGroup> = (props) => {
  const { id, label, children } = props;
  /* @ts-expect-error: TODO: Provide default in definition of context */
  const { activeDescendant, setActiveDescendant } = useContext(FormContext);
  const groupRef = useRef<HTMLUListElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [listItems, setListItems] = useState<ReactElement[]>(children);
  const labelId = `${id}_label`;

  const handleKeydown = (event: KeyboardEvent) => {
    let flag = false;
    let offset = 0;

    switch (event.key) {
      case ' ':
        flag = true;
        break;

      case 'Up':
      case 'ArrowUp':
      case 'Left':
      case 'ArrowLeft':
        offset = -1;
        flag = true;
        break;

      case 'Down':
      case 'ArrowDown':
      case 'Right':
      case 'ArrowRight':
        offset = 1;
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
      setActiveIndex((activeIndex) => {
        return (activeIndex + offset + listItems.length) % listItems.length;
      });
    }
  };

  useEffect(() => {
    const group = groupRef.current;

    if (!group) {
      return;
    }

    group.addEventListener('keydown', handleKeydown);

    return () => {
      group.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  useEffect(() => {
    const active = listItems.find((item) => {
      return item?.props.index === activeIndex;
    });

    setActiveDescendant(active?.props.id);
  }, [listItems]);

  useEffect(() => {
    setListItems(renderChildren());
  }, [activeIndex]);

  const renderChildren = useCallback(() => {
    return Children.map(children, (child, index) => {
      return cloneElement(child, {
        handleClick: (e: Event) => {
          // @ts-expect-error: TODO: find the right event type
          setActiveIndex(Number(e.target?.dataset?.index));
        },
        activeIndex: activeIndex,
        index: index,
        ...(activeIndex === index && {
          fClass: 'focus',
        }),
      });
    });
  }, [activeIndex]);

  return (
    <>
      <h2 id={labelId} className="text-2xl">
        {label}
      </h2>
      <ul
        className="radiogroup-activedescendant"
        role="radiogroup"
        aria-labelledby={labelId}
        aria-activedescendant={activeDescendant}
        tabIndex={0}
        ref={groupRef}
      >
        {listItems}
      </ul>
    </>
  );
};

export default RadioGroup;
