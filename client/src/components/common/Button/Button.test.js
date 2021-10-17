import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from 'components';
import { testId } from 'constants/index';

describe('<Button />', () => {

    it('should render <Button />', () => {
        render(<Button />);

        const customButton = screen.getByTestId(testId.customButton);

        expect(customButton).toBeInTheDocument();
    });
    it('should call mockedFunc 1 time', () => {
        const mockedFunc = jest.fn();

        render(<Button onClick={mockedFunc} />);

        const customButton = screen.getByTestId(testId.customButton);

        fireEvent.click(customButton);

        expect(mockedFunc).toBeCalled();
    });
});
