import { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { PollCard } from '../components/PollCard';
import { FAB } from '../components/FAB';
import { polls as initialPolls } from '../lib/data';

interface PollsScreenProps {
  onCreatePoll: () => void;
}

export function PollsScreen({ onCreatePoll }: PollsScreenProps) {
  const [polls, setPolls] = useState(initialPolls);

  const handleVote = (pollId: string, optionId: string) => {
    setPolls(
      polls.map((poll) =>
        poll.id === pollId
          ? { ...poll, hasVoted: true, votedOptionId: optionId }
          : poll
      )
    );
  };

  return (
    <div className="min-h-screen bg-soft-white pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-border-light z-40">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <h2 className="mb-1">Polls</h2>
          <p className="text-text-secondary">Share your opinion with the community</p>
        </div>
      </header>

      {/* Polls List */}
      <main className="max-w-2xl mx-auto px-4 pt-4">
        {polls.map((poll) => (
          <PollCard key={poll.id} poll={poll} onVote={(optionId) => handleVote(poll.id, optionId)} />
        ))}
      </main>

      {/* FAB */}
      <FAB onClick={onCreatePoll} icon={<PlusCircle className="w-7 h-7" />} />
    </div>
  );
}
