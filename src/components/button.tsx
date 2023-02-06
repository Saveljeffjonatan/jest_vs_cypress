interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <div className="flex flex-col gap-2 mt-4">
      <button className="bg-cyan-500 m-2 p-2" {...rest}>
        {children}
      </button>
    </div>
  );
};

export default Button;
