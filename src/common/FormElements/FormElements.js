import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #fff;
`;
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;
export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const Form = styled.form`
  background-color: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  font-family: "Anton", sans-serif !important;

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;
export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  font-family: "Anton", sans-serif !important;
`;
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;
export const FormInput = styled.input`
  padding: 10px 10px;
  margin-bottom: 24px;
  border-radius: 4px;
  display: inline-block;
`;

export const FormTextArea = styled.textarea`
  padding: 10px 10px;
  margin-bottom: 24px;
  border-radius: 4px;
  display: inline-block;
`;
export const FormButton = styled.button`
  background: var(--lightBlue);
  padding: 10px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 20px;
  color: #fff;
  font-size: 14px;
`;

export const FormSelect = styled.select`
  padding: 10px 10px;
  margin-bottom: 24px;
  border-radius: 4px;
`;

export const Form2 = styled.form`
  background-color: #010101;
  max-width: 500px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 34px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  font-family: "Anton", sans-serif !important;

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;

export const FormLabel2 = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
  width: 200px;
  float: left;
  margin: 0 20px 0 0;
`;

export const FormSelect2 = styled.select`
  padding: 10px 10px;
  margin-bottom: 24px;
  border-radius: 4px;
  width: 200px;
  border: 1px solid #000;
`;

export const FormInput2 = styled.input`
  padding: 10px 10px;
  margin-bottom: 24px;
  border-radius: 4px;
  display: inline-block;
  width: 200px;
  border: 1px solid #000;
`;

export const FormButton2 = styled.button`
  background: var(--lightBlue);
  padding: 10px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  width: 95%;
`;

export const Form3 = styled.form`
  background-color: #010101;
  max-width: 1200px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 34px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  font-family: "Anton", sans-serif !important;

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;

export const FormInput3 = styled.input`
  padding: 10px 10px;
  margin-bottom: 24px;
  border-radius: 4px;
  display: inline-block;
  width: 520px;
  border: 1px solid #000;
`;

export const FormSelect3 = styled.select`
  padding: 10px 10px;
  margin-bottom: 24px;
  border-radius: 4px;
  width: 520px;
  border: 1px solid #000;
`;
