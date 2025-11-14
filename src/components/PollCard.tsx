import { BarChart3, CheckCircle2 } from 'lucide-react';
import { Poll } from '../lib/data';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PollCardProps {
  poll: Poll;
  onVote?: (optionId: string) => void;
}

export function PollCard({ poll, onVote }: PollCardProps) {
  const handleVote = (optionId: string) => {
    if (!poll.hasVoted && onVote) {
      onVote(optionId);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 mb-3 shadow-card">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <ImageWithFallback
          src={poll.user.avatar}
          alt={poll.user.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="font-semibold text-text-primary">{poll.user.name}</p>
          <p className="text-text-secondary">{poll.timestamp}</p>
        </div>
        <div className="flex items-center gap-1 text-text-secondary">
          <BarChart3 className="w-4 h-4" />
          <span className="font-medium">{poll.totalVotes.toLocaleString()}</span>
        </div>
      </div>

      {/* Question */}
      <h3 className="text-text-primary mb-4">{poll.question}</h3>

      {/* Options */}
      <div className="space-y-2">
        {poll.options.map((option) => {
          const percentage = Math.round((option.votes / poll.totalVotes) * 100) || 0;
          const isSelected = poll.votedOptionId === option.id;

          return (
            <button
              key={option.id}
              onClick={() => handleVote(option.id)}
              disabled={poll.hasVoted}
              className={`w-full text-left rounded-xl border-2 transition-all relative overflow-hidden ${
                poll.hasVoted
                  ? 'cursor-default'
                  : 'cursor-pointer hover:border-nexora-blue hover:bg-soft-white'
              } ${
                isSelected
                  ? 'border-nexora-blue bg-nexora-blue/5'
                  : 'border-border-light'
              }`}
            >
              {/* Progress bar */}
              {poll.hasVoted && (
                <div
                  className="absolute inset-0 bg-nexora-blue/10 transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              )}

              {/* Content */}
              <div className="relative p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {isSelected && (
                    <CheckCircle2 className="w-5 h-5 text-nexora-blue flex-shrink-0" />
                  )}
                  <span className="font-medium text-text-primary">{option.text}</span>
                </div>
                {poll.hasVoted && (
                  <span className="font-semibold text-text-primary ml-2">{percentage}%</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      {!poll.hasVoted && (
        <p className="text-text-muted text-center mt-3">
          Tap an option to vote
        </p>
      )}
    </div>
  );
}
