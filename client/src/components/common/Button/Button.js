import './Button.css';

const Button = ({ children, title = '', classname = '', ...props }) => (
    <button
        className={`customButton ${classname}`}
        {...props}
    >
        {children || title}
    </button>
);

export default Button;
