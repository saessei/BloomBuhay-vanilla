import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "../components/ui/Sidebar";

const SidebarWrapper = (props: any) => (
  <BrowserRouter>
    <div className="relative w-full h-screen bg-gray-100">
      <Sidebar {...props} />
    </div>
  </BrowserRouter>
);

const meta: Meta<typeof SidebarWrapper> = {
  title: "Components/UI/Sidebar",
  component: SidebarWrapper,
  decorators: [
    (Story) => (
      <div className="w-full h-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SidebarWrapper>;

export const Closed: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
  },
};

export const Open: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
};

export const OpenWithBloomStage: Story = {
  render: (args) => {
    localStorage.setItem("lastStage", "pregnant");
    return (
      <BrowserRouter>
        <div className="relative w-full h-screen bg-gray-100">
          <Sidebar {...args} />
        </div>
      </BrowserRouter>
    );
  },
  args: {
    isOpen: true,
    onClose: () => {},
  },
};
