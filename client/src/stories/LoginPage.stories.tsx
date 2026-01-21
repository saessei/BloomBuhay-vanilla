import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import LoginPage from "../pages/LoginPage";

const LoginPageWrapper = () => (
  <BrowserRouter>
    <LoginPage />
  </BrowserRouter>
);

const meta = {
  title: "Pages/LoginPage",
  component: LoginPageWrapper,
  decorators: [
    (Story) => (
      <div className="w-full min-h-screen">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LoginPageWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FillAndSubmit: Story = {
  play: async ({ canvasElement }) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const inputs = canvasElement.querySelectorAll('input');
    const emailInput = inputs[0] as HTMLInputElement;
    const passwordInput = inputs[1] as HTMLInputElement;
    
    if (emailInput && passwordInput) {
      emailInput.focus();
      emailInput.value = "test@example.com";
      emailInput.dispatchEvent(new Event("input", { bubbles: true }));
      emailInput.dispatchEvent(new Event("change", { bubbles: true }));
      
      passwordInput.focus();
      passwordInput.value = "mypassword";
      passwordInput.dispatchEvent(new Event("input", { bubbles: true }));
      passwordInput.dispatchEvent(new Event("change", { bubbles: true }));
      
      const buttons = canvasElement.querySelectorAll('button');
      const submitButton = buttons[buttons.length - 1] as HTMLButtonElement;
      
      if (submitButton) {
        submitButton.click();
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
  },
};

export const EmailFieldInteraction: Story = {
  play: async ({ canvasElement }) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const inputs = canvasElement.querySelectorAll('input');
    const emailInput = inputs[0] as HTMLInputElement;
    
    if (emailInput) {
      emailInput.focus();
      emailInput.value = "user@bloom.com";
      emailInput.dispatchEvent(new Event("input", { bubbles: true }));
      emailInput.dispatchEvent(new Event("change", { bubbles: true }));
      
      await new Promise(resolve => setTimeout(resolve, 800));
    }
  },
};