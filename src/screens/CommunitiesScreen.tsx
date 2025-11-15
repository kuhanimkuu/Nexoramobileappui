import { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { CommunityCard } from '../components/CommunityCard';
import { FAB } from '../components/FAB';
import { communities as initialCommunities } from '../lib/data';

interface CommunitiesScreenProps {
  onCommunitySelect: (communityId: string) => void;
  onCreateCommunity: () => void;
}

export function CommunitiesScreen({ onCommunitySelect, onCreateCommunity }: CommunitiesScreenProps) {
  const [communities, setCommunities] = useState(initialCommunities);
  const [activeFilter, setActiveFilter] = useState<'all' | 'joined'>('all');

  const handleJoinToggle = (communityId: string) => {
    setCommunities(
      communities.map((community) =>
        community.id === communityId
          ? {
              ...community,
              isJoined: !community.isJoined,
              members: community.isJoined ? community.members - 1 : community.members + 1,
            }
          : community
      )
    );
  };

  const filteredCommunities =
    activeFilter === 'joined'
      ? communities.filter((c) => c.isJoined)
      : communities;

  return (
    <div className="min-h-screen bg-soft-white pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-border-light z-40">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <h2 className="mb-3">Communities</h2>

          {/* Search */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
            <input
              type="text"
              placeholder="Search communities..."
              className="w-full h-11 pl-10 pr-4 bg-soft-white rounded-xl border border-border-light focus:outline-none focus:border-nexora-blue transition-colors"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeFilter === 'all'
                  ? 'bg-nexora-blue text-white'
                  : 'bg-soft-white text-text-secondary hover:bg-border-light'
              }`}
            >
              All Communities
            </button>
            <button
              onClick={() => setActiveFilter('joined')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeFilter === 'joined'
                  ? 'bg-nexora-blue text-white'
                  : 'bg-soft-white text-text-secondary hover:bg-border-light'
              }`}
            >
              Joined
            </button>
          </div>
        </div>
      </header>

      {/* Communities Grid */}
      <main className="max-w-2xl mx-auto px-4 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCommunities.map((community) => (
            <CommunityCard
              key={community.id}
              community={community}
              onClick={() => onCommunitySelect(community.id)}
              onJoinToggle={() => handleJoinToggle(community.id)}
            />
          ))}
        </div>

        {filteredCommunities.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-secondary">No communities found</p>
          </div>
        )}
      </main>

      {/* FAB */}
      <FAB onClick={onCreateCommunity} icon={<Plus className="w-7 h-7" />} />
    </div>
  );
}
