function Button({ buttonText, onClick, type = 'button', className = '' }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`btn ${className}`}
      >
        {buttonText}
      </button>
    );
  }
  
  export default Button;