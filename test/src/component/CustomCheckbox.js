import React, { useState } from 'react';

function CustomCheckbox({ checked, onChange }) {
  const [isChecked, setIsChecked] = useState(checked);

  const checkedImage = './image/checkbox_checked.png'; // 체크된 이미지 URL
  const uncheckedImage = './image/checkbox_unchecked.png'; // 체크되지 않은 이미지 URL

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  return (
    <div className="CustomCheckbox" onClick={toggleCheckbox} style={{ cursor: 'pointer' }}>
      <img src={isChecked ? checkedImage : uncheckedImage} alt="Checkbox" style={{ width: '18px', height: '18px' }} />
    </div>
  );
}

export default CustomCheckbox;