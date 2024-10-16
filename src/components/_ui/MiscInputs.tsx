import { WuStepper, WuSwitcher, WuToggle } from "@npm-questionpro/wick-ui-lib";
import React from "react";
import { IFormControls } from "../../assets/model";

export const MiscInputs: React.FC<IFormControls> = (props) => {
  const { handleChange, formData } = props;
  return (
    <>
      <div>
        <label htmlFor="satisfaction">
          Rate your satisfaction with your current framework (1-10):
        </label>
        <WuStepper
          id="satisfaction"
          min="1"
          max="10"
          value={formData.satisfaction}
        />
      </div>

      <WuToggle label="Share email" />
      <div className="flex flex-col gap-1">
        <label>Select your favorite editor:</label>
        <WuSwitcher
          options={[
            { value: "vim", label: "Vim" },
            { value: "emacs", label: "Emacs" },
          ]}
          value="vim"
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <label htmlFor="">Select you operating system</label>
        <WuSwitcher
          options={[
            { value: "linux", label: "Linux" },
            { value: "others", label: "Others" },
          ]}
          value="linux"
          type="toggle"
        />
      </div>
    </>
  );
};
