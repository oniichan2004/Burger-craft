interface AddButtonProps {
  onClick: () => void;
}

export default function AddButton({ onClick }: AddButtonProps) {
  return (
    <button
      className="bg-green-500 text-white w-50"
      
      onClick={onClick}
    >
      +
    </button>
  );
}
