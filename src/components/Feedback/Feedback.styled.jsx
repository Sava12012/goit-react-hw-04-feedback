import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ButtonItem = styled.li`
  :hover:nth-of-type(1) button {
    background-color: var(--good);
  }

  :hover:nth-of-type(2) button {
    background-color: var(--neutral);
  }

  :hover:nth-of-type(3) button {
    background-color: var(--bad);
  }
`;

export const Button = styled.button`
  padding: 10px 30px;

  font-size: 26px;
  color: var(--accent);

  background-color: transparent;

  border-radius: 20px;
  border: 1px solid var(--accent);

  transition: all 250ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

  cursor: pointer;

  :hover {
    color: var(--bg);
    border: 1px solid transparent;
  }
`;
