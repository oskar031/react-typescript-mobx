import React from "react";
import { render } from "@testing-library/react";
import BestExample from "../components/BestExample";
import { Provider } from "mobx-react";
import stores from "../stores";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider {...stores}>
      <BestExample />
    </Provider>
  );
  const text = getByText(/Some hello text/i);
  expect(text).toBeInTheDocument();
});
