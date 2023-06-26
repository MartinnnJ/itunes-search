import { useRef } from 'react';

function SearchBar({ header, onSubmit, placeholder }) {
  const inputRef = useRef();

  const handleSubmit = e => {
    const inputValue = inputRef.current.value;
    e.preventDefault();
    if (!inputValue.length) return;
    onSubmit(inputValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{header}</h1>
      <input
        type='search'
        ref={inputRef}
        placeholder={placeholder}
        autoFocus
      />
    </form>
  );
}

export default SearchBar;