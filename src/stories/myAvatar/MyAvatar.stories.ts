import { Meta, StoryObj } from "@storybook/react";
import MyAvatar from "../../components/myAvatar/MyAvatar";

const meta = {
    title: "Example/MyAvatar",
    component: MyAvatar,
    tags: ['autodocs'],
} satisfies Meta<typeof MyAvatar>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        modelSrc: 'https://readyplayerme.github.io/visage/male.glb'
    },
}
