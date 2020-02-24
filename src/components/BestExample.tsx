import * as React from "react";
import { inject, observer } from "mobx-react";
import ExampleStore from "../stores/ExampleStore";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

@inject("exampleStore")
@observer
export default class BestExample extends React.Component {
  get stores() {
    return this.props;
  }
  constructor(props: any) {
    super(props);
    const { exampleStore } = props;
  }
  render() {
    const { exampleStore } = this.stores as { exampleStore: ExampleStore };
    const theme = createMuiTheme({
      palette: {
        type: "dark"
      }
    });
    return <div>Some {exampleStore.name} text</div>;
  }
}
