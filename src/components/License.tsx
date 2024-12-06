import {
  WuButton,
  WuCheckbox,
  WuModal,
  WuModalClose,
  WuModalContent,
  WuModalFooter,
  WuModalHeader,
} from "@npm-questionpro/wick-ui-lib";

export const License = () => {
  return (
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
          By participating in this survey, you agree to the following terms and
          conditions:
        </p>
        <br />
        <ol>
          <li>
            <strong>Purpose of the Survey</strong>
            <br />
            The primary goal of this survey is to gather information about your
            preferences and opinions regarding web development frameworks. Your
            responses will be used solely for research and analysis purposes to
            improve understanding of framework trends.
          </li>

          <li>
            <strong>Confidentiality</strong>
            <br />
            We respect your privacy and are committed to protecting your
            personal information. Any personal data collected, including but not
            limited to your name and email, will be kept confidential and will
            not be shared with third parties without your explicit consent. Your
            responses will be anonymized in any reports or publications that may
            arise from this survey.
          </li>

          <li>
            <strong>Voluntary Participation</strong>
            <br />
            Participation in this survey is entirely voluntary. You have the
            right to refuse to participate or to withdraw at any time, without
            providing any reason, and without facing any consequences. If you
            choose to withdraw, all data related to your participation will be
            deleted upon request.
          </li>

          <li>
            <strong>Accuracy of Information</strong>
            <br />
            By completing this survey, you agree to provide accurate and
            truthful information to the best of your knowledge. Providing false
            or misleading information may affect the validity of the research
            results.
          </li>

          <li>
            <strong>Use of Responses</strong>
            <br />
            Your survey responses may be used for academic, commercial, or
            public purposes, including but not limited to presentations,
            reports, and publications. Your personal data will not be identified
            in any public report.
          </li>

          <li>
            <strong>Data Protection</strong>
            <br />
            Your data will be stored securely and in compliance with applicable
            data protection laws. If you wish to withdraw or modify your data,
            you can contact us at any time, and we will process your request
            promptly.
          </li>
        </ol>

        <p>
          By clicking “Submit,” you acknowledge that you have read, understood,
          and agreed to the above terms and conditions.
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
  );
};
