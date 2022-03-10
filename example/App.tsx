import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import styled, { css } from 'styled-components';
import * as polished from 'polished';
import { foreground, lightGrey, reactLiveHome, red } from './utils';
import { Button } from "../src/Button";


const Container = styled.div`
  margin: 0 auto;
  max-width: 100%;
  padding: ${polished.rem(20)};
  padding-bottom: ${polished.rem(100)};
`;

const Description = styled.p`
  color: ${foreground};
  font-size: ${polished.modularScale(1)};
  margin-bottom: ${polished.rem(20)};
  margin-top: ${polished.rem(50)};
  text-align: center;
`;
const StyledProvider = styled(LiveProvider)`
  border-radius: ${polished.rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: ${polished.rem(100)};
`;

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const column = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`;

const StyledEditor = styled.div`
  background: ${lightGrey};
  font-family: 'Source Code Pro', monospace;
  font-size: ${polished.rem(14)};
  height: ${polished.rem(350)};
  max-height: ${polished.rem(350)};
  overflow: auto;
  ${column};
  * > textarea:focus {
    outline: none;
  }
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem 0px;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  text-align: center;
  ${column};
`;

const StyledError = styled(LiveError)`
  display: block;
  padding: ${polished.rem(8)};
  background: ${red};
  color: ${foreground};
  white-space: pre-wrap;
  text-align: left;
  font-size: 0.9em;
  font-family: 'Source Code Pro', monospace;
`;

const LiveEdit = ({ code, scope }) => (
    <StyledProvider code={code} theme={reactLiveHome} scope={scope}>
      <LiveWrapper>
        <StyledEditor>
          <LiveEditor />
        </StyledEditor>
        <StyledPreview />
      </LiveWrapper>
      <StyledError />
    </StyledProvider>
  );

const scope = { Button };

const code = `
<Button primary>按键</Button>
`;

export default function App() {
  return (
    <Container>
      <Description>Button Example Code</Description>
       <LiveEdit code={code} scope={scope} />
    </Container>
  );
}
