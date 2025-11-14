import { useState } from 'react';
import { ArrowLeft, Plus, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface CreatePollScreenProps {
  onBack: () => void;
  onCreatePoll: (question: string, options: string[]) => void;
}

export function CreatePollScreen({ onBack, onCreatePoll }: CreatePollScreenProps) {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const addOption = () => {
    if (options.length < 6) {
      setOptions([...options, '']);
    }
  };

  const removeOption = (index: number) => {
    if (options.length > 2) {
      setOptions(options.filter((_, i) => i !== index));
    }
  };

  const updateOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleCreate = () => {
    const validOptions = options.filter(opt => opt.trim());
    if (question.trim() && validOptions.length >= 2) {
      onCreatePoll(question, validOptions);
      onBack();
    }
  };

  const isValid = question.trim() && options.filter(opt => opt.trim()).length >= 2;

  return (
    <div className="fixed inset-0 bg-soft-white flex flex-col z-50">
      {/* Header */}
      <header className="bg-white border-b border-border px-4 py-3 flex items-center justify-between">
        <button
          onClick={onBack}
          className="p-2 hover:bg-soft-white rounded-full transition-colors -ml-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h3>Create Poll</h3>
        <Button
          onClick={handleCreate}
          disabled={!isValid}
          className="bg-nexora-blue hover:bg-nexora-blue/90 text-white disabled:opacity-50"
        >
          Create
        </Button>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Question */}
          <div>
            <Label htmlFor="question">Question</Label>
            <Input
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a question..."
              className="mt-1"
              autoFocus
            />
          </div>

          {/* Options */}
          <div>
            <Label>Options</Label>
            <div className="mt-2 space-y-3">
              {options.map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={option}
                    onChange={(e) => updateOption(index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                  />
                  {options.length > 2 && (
                    <button
                      onClick={() => removeOption(index)}
                      className="p-2 hover:bg-soft-white rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-text-secondary" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {options.length < 6 && (
              <Button
                onClick={addOption}
                variant="outline"
                className="mt-3 w-full border-dashed"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Option
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
