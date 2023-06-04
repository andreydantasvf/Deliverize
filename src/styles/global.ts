import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :root {
        font-size: 62.5%;
    }

    body {
        background-color: #FFF;
        color: #4E4E4E;
        -webkit-font-smoothing: antialiased;

        font-family: 'Roboto', sans-serif;

        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none;
    }

    body, input, button, textarea {
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
    }
`;
