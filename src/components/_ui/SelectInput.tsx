import { WuSelect } from "@npm-questionpro/wick-ui-lib";
import React from "react";
import { JSFrameworks } from "../../assets/mockApi";
import { IFormControls } from "../../assets/model";

export const SelectInput: React.FC<IFormControls> = (props) => {
  const { handleChange, formData } = props;
  return (
    <>
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
          value={formData.experience}
          onSelect={(e) => handleChange({ key: "experience", value: e })}
        ></WuSelect>
      </div>
      <div>
        <label htmlFor="experience">What frameworks did you use?</label>
        <WuSelect
          options={JSFrameworks}
          id="experience"
          multiple
          name="experience"
          value={formData.usedFrameworks}
          onSelect={(e) => handleChange({ key: "usedFrameworks", value: e })}
        ></WuSelect>
      </div>
    </>
  );
};
