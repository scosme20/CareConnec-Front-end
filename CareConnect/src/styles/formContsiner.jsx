import styled from 'styled-components';

export const OverviewContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const CarouselContainer = styled.div`
  margin-bottom: 40px;
`;

export const FeaturesSection = styled.div`
  padding: 20px;
  text-align: center;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      font-size: 14px;
      margin-bottom: 5px;
    }
  }
`;

export const TestimonialsSection = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  margin-top: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  blockquote {
    font-size: 14px;
    font-style: italic;
    margin: 10px auto;
    max-width: 600px;
  }
`;

export const ContactSection = styled.div`
  padding: 20px;
  text-align: center;
  margin-top: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      margin-bottom: 10px;
    }

    label {
      margin-right: 10px;
    }

    input, textarea {
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    button {
      padding: 10px 20px;
      background-color: #4caf50;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #45a049;
      }
    }
  }
`;


export const FormContainer = styled.form`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
    text-align: center;
  }

  div {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s ease;
  }

  input:focus {
    border-color: #4caf50;
  }

  button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #4caf50;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #45a049;
  }

  p {
    text-align: center;
    color: #333;
    cursor: pointer;
  }

  p:hover {
    text-decoration: underline;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  opacity: 0; 
  animation: fadeIn 0.5s ease forwards; 

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; 
`;









