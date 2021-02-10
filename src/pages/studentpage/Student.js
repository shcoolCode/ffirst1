import React from "react";
import "../../App.css";
import "./Cstudent.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import StudentContent from "./StudentContent";
import "../../Ctable.css";
const new_students = [
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

const origin_students = [
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

class Student extends React.Component {
  render() {
    return (
      <div className="content">
        <header className="header_frame">
          <text className="header_frame_title">학생 관리</text>
        </header>

        <div className="content_frame">
          <div>신청명단</div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>아이디</TableCell>
                <TableCell>날짜</TableCell>
                <TableCell>승인</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {new_students.map((c) => {
                return (
                  <StudentContent
                    number={c.number}
                    name={c.name}
                    id={c.id}
                    date={c.date}
                    admit={c.admit} //버튼기능 넣는법
                  />
                );
              })}
            </TableBody>
          </Table>
        </div>

        <div className="content_frame2">
          <div>등록명단</div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>아이디</TableCell>
                <TableCell>날짜</TableCell>
                <TableCell>제거</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {origin_students.map((c) => {
                return (
                  <StudentContent
                    number={c.number}
                    name={c.name}
                    id={c.id}
                    date={c.date}
                    admit={c.admit} //버튼기능 넣는법
                  />
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Student;
