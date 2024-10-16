import { WuCheckbox } from "@npm-questionpro/wick-ui-lib";
import React from "react";
import { IFormControls } from "../../assets/model";

export const Checkboxes: React.FC<IFormControls> = (props) => {
  const { handleChange, formData } = props;
  const checkboxes = [
    { label: "Performance", value: "performance" },
    { label: "Ease of Use", value: "ease-of-use" },
    { label: "Strong Community Support", value: "community" },
    { label: "Comprehensive Documentation", value: "documentation" },
    { label: "Open Source", value: "open-source", disabled: true },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <label>
        What features do you value in a framework? (Check all that apply)
      </label>
      {checkboxes.map((checkbox) => (
        <WuCheckbox
          key={checkbox.value}
          label={checkbox.label}
          id={checkbox.value}
          disabled={checkbox.disabled}
          checked={formData.features?.includes(checkbox.value)}
          onChange={() =>
            handleChange({
              key: "features",
              value: checkbox.value,
              type: "checkbox",
            })
          }
        />
      ))}
    </div>
  );
};
