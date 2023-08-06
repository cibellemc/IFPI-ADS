import React from 'react';

type InputProps = {
  nomeCampo: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputBox: React.FC<InputProps> = ({ nomeCampo, value, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <span>{nomeCampo}:</span>
      <input type="text" value={value} onChange={onChange} className='text-black' />
    </div>
  );
};

export default InputBox;
