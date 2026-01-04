import React from 'react';

function SmallSquareButton({ onClick, active }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '30px',
        height: '30px',
        backgroundColor: active ? '#4CAF50' : '#ddd',
        border: '1px solid #999',
        cursor: 'pointer',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}
    >
    {active ? '✓' : ''}
    </button>
    );
}
 
export default function OneMillionButtons() {
  const itemCount = 1000000;
  const buttonsPerRow = 20;
  const rowCount = Math.ceil(itemCount / buttonsPerRow);
  const [activeButtons, setActiveButtons] = React.useState(new Set());

  const toggleButton = (index) => {
    setActiveButtons(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
    const Row = ({ index, style }) => {
      const start = index * buttonsPerRow;
      const end = start + buttonsPerRow;
      const rowButtons = [];
      for (let i = start; i < end && i < itemCount; i++) {
        rowButtons.push(
          <SmallSquareButton
            key={i}
            onClick={() => toggleButton(i)}
            active={activeButtons.has(i)}
          />
        );
      }
      return (
        <div style={{ ...style, display: 'flex' }}>
          {rowButtons}
        </div>
      );
    };

    let buttons = [];

    for (let i = 0; i < rowCount; i++) {
        buttons[i] = <Row key={i} index={i} style={{ height: '35px' }} />;
        }

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <h1>One Million Buttons</h1>
        {buttons}
    </div>
  );
}