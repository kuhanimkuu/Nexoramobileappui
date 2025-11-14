import { useState } from 'react';
import { NexoraLogo } from '../nexora/NexoraLogo';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface AuthScreenProps {
  onLogin: () => void;
  initialMode?: 'login' | 'signup';
}

export function AuthScreen({ onLogin, initialMode = 'login' }: AuthScreenProps) {
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>(initialMode);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="fixed inset-0 bg-soft-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Logo */}
        <div className="mb-8">
          <NexoraLogo size="lg" />
        </div>
        <h1 className="mb-2">Nexora</h1>
        <p className="text-text-secondary mb-8 text-center">
          {mode === 'login' && 'Welcome back! Sign in to continue.'}
          {mode === 'signup' && 'Create your account to get started.'}
          {mode === 'forgot' && 'Reset your password'}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          {mode === 'signup' && (
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1"
              />
            </div>
          )}

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1"
            />
          </div>

          {mode !== 'forgot' && (
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="mt-1"
              />
            </div>
          )}

          {mode === 'login' && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setMode('forgot')}
                className="text-nexora-blue hover:underline"
              >
                Forgot password?
              </button>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-nexora-blue to-accent-purple hover:opacity-90 text-white"
          >
            {mode === 'login' && 'Sign In'}
            {mode === 'signup' && 'Create Account'}
            {mode === 'forgot' && 'Reset Password'}
          </Button>

          {mode === 'forgot' && (
            <Button
              type="button"
              variant="ghost"
              onClick={() => setMode('login')}
              className="w-full"
            >
              Back to Sign In
            </Button>
          )}
        </form>

        {/* Switch mode */}
        {mode !== 'forgot' && (
          <div className="mt-6 text-center">
            <p className="text-text-secondary">
              {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className="text-nexora-blue hover:underline"
              >
                {mode === 'login' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
