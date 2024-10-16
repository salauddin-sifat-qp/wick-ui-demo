import { WuInput, WuTextarea } from "@npm-questionpro/wick-ui-lib";
import React from "react";
import { IFormControls, IFormData, IFormDataTypes } from "../../assets/model";

export const TextInputs: React.FC<IFormControls> = (props) => {
  const { handleChange, formData } = props;
  const handleTextChange = (key: keyof IFormData, value: IFormDataTypes) => {
    handleChange({ key, value });
  };
  return (
    <>
      <div
        style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" }}
      >
        <WuInput
          label="Your Name"
          placeholder="Enter your name"
          name="name"
          id="name"
          onChange={(e) => handleTextChange("name", e.target.value)}
          value={formData.name}
          required
        />
        <WuInput
          label="Secret"
          type="password"
          placeholder="Enter your secret"
          name="secret"
          id="secret"
          onChange={(e) => handleTextChange("secret", e.target.value)}
          value={formData.secret}
        />
      </div>

      <WuInput
        label="Email"
        placeholder="Enter your email"
        name="email"
        type="email"
        icon="mail"
        onChange={(e) => handleTextChange("email", e.target.value)}
        value={formData.email}
      />

      <WuTextarea
        placeholder="Share your thoughts in 100 chars..."
        name="comments"
        id="comments"
        label="Comments"
        maxLength={100}
        minLength={10}
        onChange={(e) => handleTextChange("comments", e.target.value)}
        value={formData.comments}
      />

      <WuInput
        type="file"
        id="screenshot"
        name="screenshot"
        label="Upload a screenshot of your project (optional):"
        onChange={(e) => handleTextChange("screenshot", e.target.files?.[0])}
      />
    </>
  );
};
