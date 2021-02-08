import React from "react";
import "../App.css";
import "../Ctable.css";
import TeacherContent from "../pages/TeacherContent";

const new_teachers = [
  {
    number: 1,
    id: "mrk211",
    name: "김상우",
    date: "2019/02/03",
    admit: "승인",
  },
  {
    number: 2,
    id: "fkfkf",
    name: "김도윤",
    date: "2018/02/03",
    admit: "승인",
  },
];

const origin_teachers = [
  {
    number: 1,
    id: "vbvfvd144",
    name: "문예림",
    date: "2019/02/03",
    admit: "제거",
  },
  {
    number: 2,
    id: "gkvkmbm90",
    name: "김수진",
    date: "2018/02/03",
    admit: "제거",
  },
];

function Teacher() {
  return (
    <div className="content">
      <header className="header_frame">
        <text className="header_frame_title">선생님 관리</text>
      </header>
    </div>
  );
}

export default Teacher;
