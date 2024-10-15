import {
  useWuShowToast,
  WuAppHeader,
  WuButton,
  WuCheckbox,
  WuInput,
  WuModal,
  WuModalClose,
  WuModalContent,
  WuModalFooter,
  WuModalHeader,
  WuRadio,
  WuSelect,
  WuStepper,
  WuSwitcher,
  WuTextarea,
  WuToggle,
  WuTooltip,
} from "@npm-questionpro/wick-ui-lib";
import { useState } from "react";
import { MockProducts } from "./assets/mockApi";

const SurveyForm = () => {
  const { showToast } = useWuShowToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    framework: "",
    experience: "",
    features: [],
    satisfaction: 5,
    comments: "",
    screenshot: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => {
        const newFeatures = checked
          ? [...prevData.features, value]
          : prevData.features.filter((feature) => feature !== value);
        return { ...prevData, features: newFeatures };
      });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  const handleReset = () => {
    setLoading(true);
    setFormData({
      name: "",
      email: "",
      framework: "",
      experience: "",
      features: [],
      satisfaction: 5,
      comments: "",
      screenshot: null,
    });
    showToast("Form Reset");
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <WuAppHeader productName="Demo App" catagories={MockProducts} />
      <div style={{ padding: "20px 20px 0" }}>
        <h1>Survey: Best Framework</h1>
        <WuModal
          trigger={
            <WuButton variant="link" style={{ padding: "0px" }}>
              Please check the License Agreement before submitting the survey.
            </WuButton>
          }
          hideCloseButton
        >
          <WuModalHeader>License</WuModalHeader>
          <WuModalContent>
            <h3>Agreement to Participate in the Best Framework Survey</h3>

            <p>
              By participating in this survey, you agree to the following terms
              and conditions:
            </p>
            <br />
            <ol>
              <li>
                <strong>Purpose of the Survey</strong>
                <br />
                The primary goal of this survey is to gather information about
                your preferences and opinions regarding web development
                frameworks. Your responses will be used solely for research and
                analysis purposes to improve understanding of framework trends.
              </li>

              <li>
                <strong>Confidentiality</strong>
                <br />
                We respect your privacy and are committed to protecting your
                personal information. Any personal data collected, including but
                not limited to your name and email, will be kept confidential
                and will not be shared with third parties without your explicit
                consent. Your responses will be anonymized in any reports or
                publications that may arise from this survey.
              </li>

              <li>
                <strong>Voluntary Participation</strong>
                <br />
                Participation in this survey is entirely voluntary. You have the
                right to refuse to participate or to withdraw at any time,
                without providing any reason, and without facing any
                consequences. If you choose to withdraw, all data related to
                your participation will be deleted upon request.
              </li>

              <li>
                <strong>Accuracy of Information</strong>
                <br />
                By completing this survey, you agree to provide accurate and
                truthful information to the best of your knowledge. Providing
                false or misleading information may affect the validity of the
                research results.
              </li>

              <li>
                <strong>Use of Responses</strong>
                <br />
                Your survey responses may be used for academic, commercial, or
                public purposes, including but not limited to presentations,
                reports, and publications. Your personal data will not be
                identified in any public report.
              </li>

              <li>
                <strong>Data Protection</strong>
                <br />
                Your data will be stored securely and in compliance with
                applicable data protection laws. If you wish to withdraw or
                modify your data, you can contact us at any time, and we will
                process your request promptly.
              </li>
            </ol>

            <p>
              By clicking “Submit,” you acknowledge that you have read,
              understood, and agreed to the above terms and conditions.
            </p>
          </WuModalContent>
          <WuModalFooter>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <WuCheckbox label="I agree to agreement" />
              <WuModalClose>Close</WuModalClose>
            </div>
          </WuModalFooter>
        </WuModal>
      </div>
      <div
        style={{
          padding: "20px",
          display: "flex",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          <WuInput
            label="Your Name"
            placeholder="Enter your name"
            name="name"
          />

          <WuInput
            label="Email"
            placeholder="Enter your email"
            name="email"
            type="email"
            icon="mail"
          />

          {/* Radio buttons */}
          <div>
            <label>Which framework do you think is the best?</label>
            <WuRadio
              options={[
                { label: "React", value: "react" },
                { label: "Vue", value: "vue" },
                { label: "Angular", value: "angular" },
                { label: "Svelte", value: "svelte" },
              ]}
              defaultValue="svelte"
              id="framework"
            />
          </div>

          {/* Dropdown select */}
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

          {/* Checkboxes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <label>
              What features do you value in a framework? (Check all that apply)
            </label>
            <WuCheckbox
              label="Performance"
              id="performance"
              checked={formData.features.includes("performance")}
            />
            <WuCheckbox
              label="Ease of Use"
              id="ease-of-use"
              checked={formData.features.includes("ease-of-use")}
            />
            <WuCheckbox
              label="Strong Community Support"
              id="community"
              checked={formData.features.includes("community")}
            />
            <WuCheckbox
              label="Comprehensive Documentation"
              id="documentation"
              checked={formData.features.includes("documentation")}
            />
          </div>

          {/* Range input */}
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

          <WuTextarea
            placeholder="Share your thoughts..."
            name="comments"
            label="Comments"
            maxLength={100}
          />

          {/* File input */}
          <WuInput
            type="file"
            id="screenshot"
            name="screenshot"
            label="Upload a screenshot of your project (optional):"
          />

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
          {/* Submit and Reset buttons */}
          <div style={{ display: "flex", gap: "8px" }}>
            <WuTooltip content="This is a button">
              <WuButton>Submit Survey</WuButton>
            </WuTooltip>
            <WuButton onClick={handleReset} variant="outline" loading={loading}>
              Reset Form
            </WuButton>
          </div>
        </form>

        <main style={{ padding: "20px" }}></main>
      </div>
    </>
  );
};

export default SurveyForm;
