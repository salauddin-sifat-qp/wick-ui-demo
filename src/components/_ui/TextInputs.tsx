import { WuInput, WuTextarea } from "@npm-questionpro/wick-ui-lib";
import React from "react";
import { IFormControls } from "../../assets/model";

export const TextInputs: React.FC<IFormControls> = (props) => {
  const { handleChange, formData } = props;
  return (
    <>
      <WuInput
        label="Your Name"
        placeholder="Enter your name"
        name="name"
        onChange={handleChange}
      />

      <WuInput
        label="Email"
        placeholder="Enter your email"
        name="email"
        type="email"
        icon="mail"
      />

      <WuTextarea
        placeholder="Share your thoughts in 100 chars..."
        name="comments"
        label="Comments"
        maxLength={100}
      />

      <WuInput
        type="file"
        id="screenshot"
        name="screenshot"
        label="Upload a screenshot of your project (optional):"
      />
    </>
  );
};
