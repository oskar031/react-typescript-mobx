import * as React from "react";
import { inject, observer } from "mobx-react";
import ExampleStore from "../stores/ExampleStore";

@inject("exampleStore")
@observer
export default class BestExample extends React.Component {
  get stores() {
    return this.props;
  }
  constructor(props: any) {
    super(props);
  }

  render() {
    const { exampleStore } = this.stores as { exampleStore: ExampleStore };
    return <div>Some {exampleStore.name} text</div>;
  }
}
