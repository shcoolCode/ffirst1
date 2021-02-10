import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Button } from "@material-ui/core";
import "../../App.css";
import "../../Ctable.css";

export class ParentContent extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.number}</TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>{this.props.c_id}</TableCell>
        <TableCell>{this.props.date}</TableCell>
        <TableCell className>
          <Button className="button_color">{this.props.admit}</Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default ParentContent;
