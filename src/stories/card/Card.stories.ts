import { Meta, StoryObj } from "@storybook/react";
import Card from "../../components/card/Card";

const meta = {
    title: "Example/Card",
    component: Card,
    tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Card',
        image: "https://v1.tailwindcss.com/img/card-top.jpg",
        content: "Hello Word",
    },
}