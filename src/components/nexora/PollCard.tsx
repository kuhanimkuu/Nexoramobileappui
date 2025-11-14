import { Poll } from '../../lib/mockData';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { BarChart3 } from 'lucide-react';

interface PollCardProps {
  poll: Poll;
  onVote?: (pollId: string, optionId: string) => void;
}

export function PollCard({ poll, onVote }: PollCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-border mb-3">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <ImageWithFallback
          src={poll.user.avatar}
          alt={poll.user.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="text-text-primary">{poll.user.name}</p>
          <p className="text-text-secondary">{poll.timestamp}</p>
        </div>
        <div className="flex items-center gap-1 text-text-secondary">
          <BarChart3 className="w-4 h-4" />
          <span>{poll.totalVotes} votes</span>
        </div>
      </div>

      {/* Question */}
      <h3 className="text-text-primary mb-4">{poll.question}</h3>

      {/* Options */}
      <div className="space-y-3">
        {poll.options.map((option) => (
          <button
            key={option.id}
            onClick={() => !poll.hasVoted && onVote?.(poll.id, option.id)}
            disabled={poll.hasVoted}
            className={`w-full text-left rounded-lg border transition-all ${
              poll.hasVoted
                ? 'cursor-default'
                : 'cursor-pointer hover:border-nexora-blue hover:bg-soft-white'
            } ${poll.hasVoted ? 'border-border' : 'border-border'}`}
          >
            <div className="relative p-3">
              {/* Progress bar background */}
              {poll.hasVoted && (
                <div
                  className="absolute inset-0 bg-nexora-blue/10 rounded-lg transition-all"
                  style={{ width: `${option.percentage}%` }}
                />
              )}
              
              {/* Content */}
              <div className="relative flex items-center justify-between">
                <span className="text-text-primary">{option.text}</span>
                {poll.hasVoted && (
                  <span className="text-text-secondary">
                    {option.percentage}%
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {!poll.hasVoted && (
        <p className="text-text-secondary mt-3 text-center">
          Click to vote
        </p>
      )}
    </div>
  );
}
