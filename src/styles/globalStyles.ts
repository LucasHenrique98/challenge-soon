import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root{
  --background: #f0f2f5;
  --blue: #07f
}

*{
margin: 0;
padding: 0;

box-sizing:border-box;
}

html{ 
  @media (max-width:1080px){
    font-size:93.75%;
  }

  @media (max-width:720px){
    font-size:87.5%;
  }
  }

  body{
    background: var(--background);
    -webkit-font-smoothing:antialiased;
  }

  body,button,input,textarea{
    font-family: 'Poppins', sans-serif;
    font-weight:400;
  }

  h1,h2,h3,h4,h5,h6, strong{
    font-weight:600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity:0.6;
    cursor:not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0,0,0,0.5);
    
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;

    display:flex;
    align-items:center;
    justify-content:center;
  }

  .react-modal-content{
    width:100%;
    max-width:500px;

    background:var(--background);
    padding:3rem;
    border-radius:0.25rem;

    outline:none;
    box-shadow: 3px 3px 20px black;

    p{
      font-weight:600;
    }

    select{
      width:20rem;
    }

    input {
    padding: 0 5px;
    width:20rem;
    margin-bottom:1rem;

    &:last-child{
      margin-bottom:0;
      }
    }

    .data{
    display: flex;
    flex-direction: column;
    justify-content:center;  
    align-items:center;
    margin-top:1rem;
  
    &:first-child{
      margin:0;
      }

      input{
        border:none;
        box-shadow:1px 1px 1px black; 
        outline:none;

          &:focus{
            box-shadow:1px 1px 10px black; 
          }
      }
    }
  
    .submit-button{
    font-size: 1rem;
    color: #ffffff;   

    background: var(--blue);
    border: 0;
    padding: 0 2rem;
    margin-top:1rem;

    border-radius: 0.25rem;

    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
      cursor: pointer;
    }
    }
  }

`;
