import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  position: relative;
  width: 512px;
  height: 768px;
  margin: 96px auto 32px;
  display: flex;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  flex-direction: column;
  background: #fff;
  border-radius: 16px;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
