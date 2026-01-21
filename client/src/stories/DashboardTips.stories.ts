import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import DashboardTipsSection from "../components/dashboard/DashboardTipsSection";
import type { TipsSectionProps } from "../components/dashboard/DashboardTipsSection";

const meta: Meta<TipsSectionProps> = {
  title: "Components/DashboardTipsSection",
  component: DashboardTipsSection as any,
  argTypes: {
    canonicalStageKey: {
      control: {
        type: "select",
        options: ["pregnant", "postpartum", "childcare", null],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DashboardTipsSection>;

export const PregnantTips: Story = {
  args: {
    canonicalStageKey: "pregnant",
  },
};

export const PostpartumTips: Story = {
  args: {
    canonicalStageKey: "postpartum",
  },
};

export const ChildcareTips: Story = {
  args: {
    canonicalStageKey: "childcare",
  },
};

export const NoStage: Story = {
  args: {
    canonicalStageKey: null,
  },
};
