import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
    min-height: 100vh;
    margin: 0;
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,  Arial, sans-serif,'Open Sans Codensed';
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
    padding: 0 40px;


    @media screen and (max-width: 800px){
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
}
/* .root{
    height: 100vh;
} */
a{
    text-decoration: none;
    color: black;
}

*{
    box-sizing: border-box;
    
}
`;
