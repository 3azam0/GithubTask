import * as React from "react";
import Loader from "../Loader";
import {  render } from '@testing-library/react-native';
it(`renders correctly`, () => {
  const tree = render(<Loader />);
  expect(tree).toMatchSnapshot();
});