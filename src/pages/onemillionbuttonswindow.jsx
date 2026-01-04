import React from 'react';
import { List } from 'react-window';

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
        justifyContent: 'center',
        marginRight: '2px'
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

  // This component is rendered by FixedSizeList
  const Row = ({ index, style }) => {
    const start = index * buttonsPerRow;
    const end = Math.min(start + buttonsPerRow, itemCount);
    const rowButtons = [];
    
    for (let i = start; i < end; i++) {
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

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <h1>One Million Buttons</h1>
      <List
        style={{ height: '600px', width: '100%' }}
        rowCount={rowCount}
        rowHeight={35}
        rowComponent={Row}
        rowProps={{}} 
      />
    </div>
  );
}