import { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { PollCard } from '../nexora/PollCard';
import { FloatingActionButton } from '../nexora/FloatingActionButton';
import { mockPolls } from '../../lib/mockData';

interface PollsScreenProps {
  onCreatePoll: () => void;
}

export function PollsScreen({ onCreatePoll }: PollsScreenProps) {
  const [polls, setPolls] = useState(mockPolls);

  const handleVote = (pollId: string, optionId: string) => {
    setPolls(polls.map(poll => {
      if (poll.id === pollId) {
        return { ...poll, hasVoted: true };
      }
      return poll;
    }));
  };

  return (
    <div className="min-h-screen bg-soft-white pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-border z-40">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <h2>Polls</h2>
          <p className="text-text-secondary mt-1">
            Vote on community polls and share your opinion
          </p>
        </div>
      </header>

      {/* Polls List */}
      <main className="max-w-2xl mx-auto px-4 pt-4">
        {polls.map(poll => (
          <PollCard
            key={poll.id}
            poll={poll}
            onVote={handleVote}
          />
        ))}
      </main>

      {/* FAB */}
      <FloatingActionButton
        onClick={onCreatePoll}
        icon={<PlusCircle className="w-6 h-6" />}
      />
    </div>
  );
}
