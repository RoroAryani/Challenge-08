import React from "react";
import { render } from '@testing-library/react';
import ListCars from './ListCars';
import '@testing-library/jest-dom';

describe(
  "ListCars", () => {
  it(
    "should render Why US component", () => {
    const htmlBlank = render.create(<ListCars></ListCars>);
    expect(htmlBlank).toBeInTheDocument();
      }
    );
  }
);

