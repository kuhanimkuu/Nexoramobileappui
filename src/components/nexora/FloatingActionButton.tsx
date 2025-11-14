import { Plus } from 'lucide-react';

interface FloatingActionButtonProps {
  onClick?: () => void;
  icon?: React.ReactNode;
}

export function FloatingActionButton({ onClick, icon }: FloatingActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-20 right-6 w-14 h-14 bg-gradient-to-br from-nexora-blue to-accent-purple text-white rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 active:scale-95 z-40 flex items-center justify-center"
    >
      {icon || <Plus className="w-6 h-6" />}
    </button>
  );
}
