import React from "react";
import { useContent } from "../hooks";
import { selectionFilter } from "../utils";

export default function Browse() {
  // need series & flims
  const { films } = useContent("films");
  const { series } = useContent("series");
  // console.log("films = ", films);

  // slides to display content
  const slides = selectionFilter(films, series);
  console.log("slides = ", slides);
  // pass info to browse container
  return (
    <div>
      <h1>Browse page</h1>
      <p>This is the Browse right now page</p>
    </div>
  );
}
