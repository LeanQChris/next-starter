import { Meta, StoryObj } from "@storybook/react";
import CardButton from "./CardButton";

const meta = {
    title: "Example/CardButton",
    component: CardButton,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof CardButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        cardLabel: "Card",
        buttonLabel: "Button",
    }
}