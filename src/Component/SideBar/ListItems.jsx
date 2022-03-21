import React, { useContext, useEffect, useRef, useState } from "react";
import CustomList from "../../Common/CustomList";
import { menuItems } from "../util/helpers";
import ListItemStyle from "./Styles/ListItemStyle.module.css";
import { useSearchParams } from "react-router-dom";
import { UserContext } from "../../Contexts/Context";

const ListItems = () => {
  const { listClickColor } = ListItemStyle;
  const [prevClicked, setPrevClick] = useState(0);
  const [clickedListIdx, setClickedListIdx] = useState(0);
  // let [searchParams, setSearchParams] = useSearchParams();
  const [, setState] = useContext(UserContext);

  const lists = useRef();
  const handleItemClick = ({ target: { innerText } }, idx) => {
    setClickedListIdx(idx);
    setPrevClick((prev) => prev + 1);
    setState((data) => ({ ...data, tag: innerText && innerText }));
    console.log("innerText :>> ", innerText);
  };

  useEffect(() => {
    const handleClickedList = () => {
      const {
        current: { children },
      } = lists;
      const ulList = [...children];

      for (let i = 0; i < ulList.length; ++i) {
        clickedListIdx === i
          ? ulList[clickedListIdx].classList.add(listClickColor)
          : ulList[i].classList.remove(listClickColor);
      }
    };
    handleClickedList();
  }, [prevClicked, clickedListIdx, listClickColor]);

  return (
    <nav className="list-group" ref={lists}>
      {menuItems?.length &&
        menuItems.map(({ icon, text }, idx) => (
          <CustomList
            key={idx}
            icon={icon}
            text={text}
            idx={idx}
            handleItemClick={handleItemClick}
          />
        ))}
    </nav>
  );
};

export default ListItems;
