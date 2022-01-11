const Button = ({ text, onClick, ...rest }) => {
  return (
    <div className="button app-btn" onClick={onClick} {...rest}>
      {text}
    </div>
  );
};

export default Button;
