const Input = ({ onChange, placeholder, ...rest }) => {
  return (
    <input
      className="app-input"
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
