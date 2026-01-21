import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import InputField from "../components/ui/inputField";

const InputFieldWrapper = (props: any) => {
  const [value, setValue] = useState(props.value || "");

  return <InputField {...props} value={value} onChange={setValue} />;
};

const meta: Meta<typeof InputFieldWrapper> = {
  title: "Components/UI/InputField",
  component: InputFieldWrapper,
  decorators: [
    (Story) => (
      <div className="w-full max-w-md mx-auto p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof InputFieldWrapper>;

export const DefaultText: Story = {
  args: {
    label: "Email Address",
    type: "text",
    value: "",
    placeholder: "Enter your email",
  },
};

export const PasswordFilled: Story = {
  args: {
    label: "Password",
    type: "password",
    value: "randompassword67",
    placeholder: "Enter your password",
  },
};

export const WithError: Story = {
  args: {
    label: "Email Address",
    type: "email",
    value: "invalid-email",
    placeholder: "Enter your email",
    error: "Please enter a valid email address",
  },
};
