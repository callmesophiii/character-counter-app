import React, { useState, useEffect } from 'react';
import type { TextInputProps } from '../../types';

const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = 'Start typing...',
  initialValue = '',
}) => {
  const [text, setText] = useState(initialValue);

  useEffect(() => {
    onTextChange(text);
  }, [text, onTextChange]);

  return (
    <textarea
      className="text-input"
      value={text}
      placeholder={placeholder}
      onChange={(e) => setText(e.target.value)}
      rows={10}
    />
  );
};

export default TextInput;
