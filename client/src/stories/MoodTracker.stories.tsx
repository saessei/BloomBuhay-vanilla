import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import MoodTracker from "../components/health/MoodTracker";

const MoodTrackerWrapper = () => (
  <BrowserRouter>
    <MoodTracker />
  </BrowserRouter>
);

const meta: Meta<typeof MoodTrackerWrapper> = {
  title: "Components/Health/MoodTracker",
  component: MoodTrackerWrapper,
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl mx-auto p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MoodTrackerWrapper>;

export const Default: Story = {};

export const EmptyHistory: Story = {};

export const SelectingMood: Story = {};

export const WithMoodLogged: Story = {};

export const Loading: Story = {};

export const MultipleEntries: Story = {};
