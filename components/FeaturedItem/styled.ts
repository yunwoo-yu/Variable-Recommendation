import styled from 'styled-components';

const FeaturedItemWrapper = styled.li`
  padding: 16px;
  font-size: 24px;
  background-color: #575356;
  margin-bottom: 20px;
  border-radius: 5px;
  color: #4fc2ff;
  display: flex;
  align-items: center;

  > span {
    color: #569cd6;
    margin-right: 4px;
  }

  button {
    margin-left: auto;
    width: 42px;
    height: 42px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default FeaturedItemWrapper;
