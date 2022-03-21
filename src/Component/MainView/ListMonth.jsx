import React, { useEffect, useState } from "react";
import { dayMonth } from "../util/helpers";

const ListMonth = () => {
  const [days, setdays] = useState([]);
  useEffect(() => {
    // console.log("new Date() :>> ", new Date());
    let res = dayMonth({ month: 2, year: 2022 });
    setdays(res);
  }, []);
  return (
    <div>
      <nav className="d-flex .list-group-horizontal ">
        {days?.length &&
          days.map(({ day, _date }, idx) => (
            <li
              key={idx}
              className="list-group-item list-group-item-action border-0"
            >
              <span className="me-2" style={{ opacity: 0.5, color: "#ccc" }}>
                {day}
              </span>
              <span>{_date}</span>
            </li>
          ))}
      </nav>
    </div>
  );
};

export default ListMonth;
