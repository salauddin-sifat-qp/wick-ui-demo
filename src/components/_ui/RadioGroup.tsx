import { WuRadioGroup } from "@npm-questionpro/wick-ui-lib";
import React from "react";
import { IFormControls } from "../../assets/model";

export const RadioGroup: React.FC<IFormControls> = (props) => {
  const { handleChange, formData } = props;
  return (
    <div>
      <label>Which framework do you think is the best?</label>
      <WuRadioGroup
        options={[
          { label: "Angular", value: "angular" },
          { label: "EmberJs", value: "emberjs", disabled: true },
          { label: "React", value: "react" },
          { label: "Svelte", value: "svelte" },
          { label: "Vue", value: "vue" },
        ]}
        defaultValue={formData.framework}
        id="framework"
        onChange={(e) => handleChange({ key: "framework", value: e })}
      />
    </div>
  );
};
