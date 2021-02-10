import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Button } from "@material-ui/core";
import "../../App.css";
import "../../Ctable.css";

class TeacherContent extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.number}</TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>{this.props.job}</TableCell>
        <TableCell>{this.props.date}</TableCell>
        <TableCell className>
          <Button className="button_color">{this.props.admit}</Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default TeacherContent;
