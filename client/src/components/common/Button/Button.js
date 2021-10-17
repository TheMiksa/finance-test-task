import './Button.css';
import { testId } from 'constants/index';

const Button = ({ children, title = '', classname = '', ...props }) => (
    <button
        className={`customButton ${classname}`}
        data-testid={testId.customButton}
        {...props}
    >
        {children || title}
    </button>
);

export default Button;
