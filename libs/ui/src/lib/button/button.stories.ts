import {Meta, moduleMetadata, Story, } from '@storybook/angular';
import {ButtonComponent} from './button.component';
import { ButtonModule } from './button.module';
import {action} from '@storybook/addon-actions';

export default {
   title: 'ButtonComponent',
   component: ButtonComponent,
   decorators: [
       moduleMetadata({
           imports:[ButtonModule]
       })
   ],
   argTypes: { click: {action: 'clicked'}}
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: args
});

export const Primary = Template.bind({});
Primary.args = {
    text: 'Click me'
}