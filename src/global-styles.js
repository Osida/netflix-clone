import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        /* https://fonts.google.com/specimen/Work+Sans?query=Sans&preview.text=Netflix%20unveils%20Netflix%20Sans,%20a%20new%20custom%20typeface%20developed%20with%20Dalton%20Maag&preview.text_type=custom&sidebar.open=true&selection.family=Work+Sans#standard-styles */
        font-family: 'Work Sans', sans-serif;
        background-color: rgb(0, 0, 0);
        color: rgb(51, 51, 51);
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
