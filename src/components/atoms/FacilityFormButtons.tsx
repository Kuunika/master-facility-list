import React from "react";
import Button from "./Button";
import styled from "styled-components";

export default (props: Props) => {
  const { handleSubmit, isSubmitting, handleCancel, saveBtnText } = props;
  return (
    <Container>
      {saveBtnText && (
        <Button
          type="submit"
          style={{ backgroundColor: "#5a90dc" }}
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : saveBtnText}
        </Button>
      )}
      <Button disabled={isSubmitting} onClick={handleCancel} theme="default">
        or Cancel
      </Button>
    </Container>
  );
};
type Props = {
  handleSubmit: Function;
  handleCancel: Function;
  saveBtnText: string;
  isSubmitting: boolean;
};

const Container = styled.div`
  padding: 10px;
  margin-bottom: -11px;
  background-color: #eee;
  display: flex;
  justify-content: flex-end;
`;
