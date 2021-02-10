import "../../App.css";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});
const rows = [
  createData("점심시간", "김일번", "2020-10-5", [
    { date: "2020-01-05", lname: "황혁주", grade: "3학년1반" },
  ]), //이건왜 안될까.

  createData("주간야자", "이이번", "2020-05-05"),
  createData("주말야자", "박삼번", "2020-06-09"),
  createData("주간야자", "유사번", "2020-09-06"),
  createData("주말야자", "서오번", "2020-11-18"),
];

function createData(listname, creator, date) {
  return {
    listname,
    creator,
    date,
    history: [
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
      { date: "2020-01-05", lname: "황혁주", grade: "3학년1반", inout: "0" },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.listname}
        </TableCell>
        <TableCell align="right">{row.creator}</TableCell>
        <TableCell align="right">{row.date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                기록
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>학년</TableCell>
                    <TableCell>이름</TableCell>
                    <TableCell>날짜</TableCell>
                    <TableCell>입실/퇴실</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell>{historyRow.grade}</TableCell>
                      <TableCell>{historyRow.lname}</TableCell>
                      <TableCell>{historyRow.date}</TableCell>
                      <TableCell>{historyRow.inout}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    date: PropTypes.number.isRequired,
    creator: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        grade: PropTypes.number.isRequired,
        lname: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

export default function Library() {
  return (
    <div className="content">
      <header className="header_frame">
        <text className="header_frame_title">독서실 관리</text>
      </header>
      <div className="content_frame">
        <TableContainer>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>명단 이름</TableCell>
                <TableCell align="right">생성자</TableCell>
                <TableCell align="right">생성일</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
