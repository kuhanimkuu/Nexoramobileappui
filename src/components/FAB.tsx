import { Plus } from 'lucide-react';

interface FABProps {
  onClick: () => void;
  icon?: React.ReactNode;
}

export function FAB({ onClick, icon }: FABProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-20 right-6 w-16 h-16 bg-gradient-to-br from-nexora-blue to-accent-purple text-white rounded-full shadow-fab hover:shadow-xl transition-all hover:scale-110 active:scale-95 z-40 flex items-center justify-center"
    >
      {icon || <Plus className="w-7 h-7" strokeWidth={2.5} />}
    </button>
  );
}
