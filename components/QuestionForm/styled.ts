import styled from 'styled-components';

const QuestionFormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    flex: 3;
    padding: 10px;
    height: 40px;
    border: 2px solid #228be6;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
`;

export default QuestionFormWrapper;
