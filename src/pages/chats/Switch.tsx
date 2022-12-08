interface Props {
  isOn: boolean;
  onClick?: () => void;
}

const Switch = ({ isOn, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: 'pointer',
        width: 44,
        height: 22,
        backgroundColor: '#eee',
        borderRadius: '11px',
      }}
    >
      <div
        style={{
          height: 22,
          width: 22,
          borderRadius: '50%',
          backgroundColor: isOn ? '#4856df' : 'gray',
          marginLeft: isOn ? 'auto' : 0,
        }}
      />
    </div>
  );
};

export default Switch;
