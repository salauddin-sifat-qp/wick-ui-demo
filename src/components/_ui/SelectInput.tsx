import { WuSelect } from "@npm-questionpro/wick-ui-lib";
import React from "react";
import { IFormControls } from "../../assets/model";

export const SelectInput: React.FC<IFormControls> = (props) => {
  const { handleChange, formData } = props;
  return (
    <div>
      <label htmlFor="experience">
        How long have you been using frameworks?
      </label>
      <WuSelect
        options={[
          { label: "Less than 1 year", value: "beginner" },
          { label: "1-3 years", value: "intermediate" },
          { label: "3+ years", value: "advanced" },
        ]}
        id="experience"
        name="experience"
      ></WuSelect>
    </div>
  );
};
