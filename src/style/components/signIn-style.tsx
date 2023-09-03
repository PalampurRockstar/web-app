import styled from "styled-components";



export const SignInStyle = styled.div`
      .text{
        font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
        font-size: 14px;
        width: max-content;
      }
      .login-page{
        overflow: hidden;
        position: relative;
      }
      .background-image{
        opacity: 0.6;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
      }
      .left-container{
        
      }
      .generat-text{
        display:flex;
        justify-content: center;
      }
      .login-form{
        position: relative;
        background:#f9ecec;
        opacity: 0.8;
        border-radius:20px;
        padding-left: 50px ;
        padding-right: 50px ;
        padding-top:30px;
        
        text-align: center;
        .signup-text{
          padding-top:100px;
          padding-bottom:30px;
          h4{
            margin:0px;
          }
        }
        .login-button{
          text-transform: inherit;
          border-radius:20px;
          margin: 10px auto;
          img{
            position:relative;
            bottom:8px;
          }
        }
        .forgot-password{
          margin: 10px auto;
          display: flex;
          justify-content: end;
        }
        .welcome-text{
          font-size: x-large;
          font-weight: bold;
        }
      }    
  
`;
