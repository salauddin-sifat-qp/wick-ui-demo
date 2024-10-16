import { WuButton, WuTooltip } from "@npm-questionpro/wick-ui-lib";
import React, { FormEvent } from "react";

interface IFooterProps {
  loading: boolean;
  handleSubmit: (e: FormEvent) => void;
  handleReset: () => void;
}
export const Footer: React.FC<IFooterProps> = ({
  loading,
  handleSubmit,
  handleReset,
}) => {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <WuTooltip content="This is a button">
        <WuButton onClick={handleSubmit}>Submit Survey</WuButton>
      </WuTooltip>
      <WuButton onClick={handleReset} variant="outline" loading={loading}>
        Reset Form
      </WuButton>
    </div>
  );
};
