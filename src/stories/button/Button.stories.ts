import { Meta, StoryObj } from "@storybook/react";
import Button from "../../components/button/Button";

const meta = {
    title: "Example/Button",
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Button',
        onClick: () => { },
    },
}

export const Disabled: Story = {
    args: {
        title: "Disabled button"
    }
}