import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {

    --purple:  hsl(259, 100%, 65%);
    --light-red: hsl(0, 100%, 67%);

    --white: hsl(0, 0%, 100%);
    --off-white: hsl(0, 0%, 94%);
    --light-grey: hsl(0, 0%, 86%);
    --smokey-grey: hsl(0, 1%, 44%);
    --off-black: hsl(0, 0%, 8%);

}

*,*::before,*::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--off-black);
  transition: color 0.3s, background-color 0.3s;
  line-height: 1.5;
  font-size: 1.6rem;
  font-size: 3.2rem;
  font-weight: 700;
  background-color: var(--light-grey);
  overflow: hidden;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

select:disabled,
input:disabled {
  background-color: var(--off-white);
  color: var(--smokey-grey);
}

input:focus,

textarea:focus,
select:focus {
  outline: 1px solid var(--purple);
 
}

@media (max-width: 400px) {
  svg {
    width: 3rem;  // Adjust the size for smaller screens
    height: 2.8rem; // Adjust the size for smaller screens
  }
}


`




export default GlobalStyles;



