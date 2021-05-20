import React from 'react';
import { render, screen, waitfor, fireEvent } from '@testing-library/react';
import Resty from './Resty';

describe('Resty container', () => {
    it('Render Resty container and find DOM elements on screen', async () => {
        render(<Resty />);

        // input field
        const urlInput = screen.getByRole('textbox', { name: 'user-input' });

        // radio buttons
        const getRadio = screen.getByRole('radio', { name: 'get' });
        const postRadio = screen.getByRole('radio', { name: 'post' });
        const putRadio = screen.getByRole('radio', { name: 'put' });
        const patchRadio = screen.getByRole('radio', { name: 'patch' });
        const deleteRadio = screen.getByRole('radio', { name: 'delete' });

        // body input
        const bodyInput = screen.getByRole('textbox', { name: 'body' });

        // submit button
        const submitButton = screen.getByRole('button', { name: 'make-fetch' })

        // response field
        const responseP = screen.getByLabelText('response');

        // history field
        const historyP = screen.getByLabelText('history');

    });
});
