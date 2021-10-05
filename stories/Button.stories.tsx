/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from 'components/elements/Input';
import { InputVariants } from 'types/elements/Input';

export default {
  title: 'Example/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const UnderlinedInput = Template.bind({});
UnderlinedInput.args = {
  variant: InputVariants.UnderlinedInput,
  name: 'Ziyak',
  label: 'Ziyak',
};
