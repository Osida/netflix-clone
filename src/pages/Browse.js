import React from "react";
import { useContent } from "../hooks";
import { selectionFilter } from "../utils";
import { BrowseContainer } from "../containers";

export default function Browse() {
  // need series & flims
  const { films } = useContent("films");
  const { series } = useContent("series");
  // console.log("films = ", films);

  // slides to display content
  const slides = selectionFilter(films, series);
  // console.log("slides = ", slides);

  // pass info to browse container
  return <BrowseContainer slides={slides} />;
}
