import React, { useEffect, useRef } from "react";
import { data } from "../SubMenuData";
import { useGlobalContext } from "../Provider";

const SubMenu = () => {
  const { subMenuState, link, center, closeSubMenu } = useGlobalContext();
  const subMenuValues = data.find((unit) => link === unit.header);
  const container = useRef(null);
  useEffect(() => {
    const subMenu = container.current;
    subMenu.style.left = `${center}px`;
  }, [link, center]);
  return (
    <aside
      className="subMenu-container"
      style={{ display: subMenuState === true ? "flex" : "none" }}
      ref={container}
      onMouseOut={() => closeSubMenu()}
    >
      {subMenuValues ? (
        <>
          <h1 className="submenu-header">{subMenuValues.header}</h1>
          {subMenuValues.contents.map((content, index) => {
            return (
              <>
                <ul className="submenu-list">
                  <li key={index}>{content}</li>
                </ul>
              </>
            );
          })}
        </>
      ) : (
        "welcome"
      )}
    </aside>
  );
};

export default SubMenu;
