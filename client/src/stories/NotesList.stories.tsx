import type { Meta, StoryObj } from "@storybook/react";
import NotesList from "../components/journal/NotesList";
import { Note } from "../components/journal/types";

const sampleNotes: Note[] = [
  {
    id: "1",
    title: "A Calm Morning",
    content: "Today felt peaceful. I enjoyed a quiet cup of coffee.",
    mood: "happy",
    tags: ["morning", "peace"],
    photo: "",
    createdAt: "2026-01-15T08:30:00Z",
    lastUpdated: "2026-01-15T08:30:00Z",
  },
  {
    id: "2",
    title: "Feeling Tired",
    content: "Did not sleep well last night. Need to rest more.",
    mood: "tired",
    tags: ["sleep", "self-care"],
    photo: "https://picsum.photos/400/200",
    createdAt: "2026-01-14T22:10:00Z",
    lastUpdated: "2026-01-15T07:45:00Z",
  },
];

const meta: Meta<typeof NotesList> = {
  title: "Notes/NotesList",
  component: NotesList,
};

export default meta;

type Story = StoryObj<typeof NotesList>;

export const WithNotes: Story = {
  args: {
    notes: sampleNotes,
    onUpdateNote: async (note) => {
      console.log("Updated note:", note);
      return true;
    },
    onDeleteNote: (id) => {
      console.log("Deleted note:", id);
    },
  },
};

export const EmptyState: Story = {
  args: {
    notes: [],
    onUpdateNote: async () => true,
    onDeleteNote: () => {},
  },
};

export const SingleNote: Story = {
  args: {
    notes: [sampleNotes[0]],
    onUpdateNote: async (note) => {
      console.log("Updated single note:", note);
      return true;
    },
    onDeleteNote: (id) => {
      console.log("Deleted single note:", id);
    },
  },
};