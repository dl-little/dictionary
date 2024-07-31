import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import axe from 'axe-core';
import FormGroup from './FormGroup';

const setup = (group: JSX.Element) => {
  return {
    user: userEvent.setup(),
    ...render(group),
  };
};

describe('Functional - FormGroup', () => {
  it('renders the correct input of type text', async () => {
    render(
      <FormGroup
        input={{
          id: 'text_input',
          name: 'Text Input',
          label: 'Text Input',
          type: 'text',
        }}
      />
    );
    const input = await screen.findByRole('textbox', { name: /Text Input/i });
    expect(input).toMatchSnapshot();
  });

  it('renders the correct input of type number', async () => {
    render(
      <FormGroup
        input={{
          id: 'number_input',
          name: 'Number Input',
          label: 'Number Input',
          type: 'number',
        }}
      />
    );
    const input = (await screen.findByRole('textbox', {
      name: /Number Input/i,
    })) as HTMLInputElement;
    expect(input).toMatchSnapshot();
  });

  it('uses pattern validation for input of type number', async () => {
    const { user } = setup(
      <FormGroup
        input={{
          id: 'number_input',
          name: 'Number Input',
          label: 'Number Input',
          type: 'number',
        }}
      />
    );
    const input = (await screen.findByRole('textbox', {
      name: /Number Input/i,
    })) as HTMLInputElement;

    await user.type(input, 'Non-numerical entry.');
    expect(input.checkValidity()).toBeFalsy();

    await user.click(input);
    await user.clear(input);
    await user.type(input, '12');
    expect(input.checkValidity()).toBeTruthy();
  });
});

describe('Accessibility - FormGroup', () => {
  it('does not render with any accessibility violations', async () => {
    const { container } = render(
      <FormGroup
        input={{
          id: 'number_input',
          name: 'Number Input',
          label: 'Number Input',
          type: 'number',
        }}
      />
    );

    const results = await axe.run(container);
    expect(results.violations.length).toBe(0);
  });
});
