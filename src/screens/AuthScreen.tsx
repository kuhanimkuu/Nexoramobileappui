import { useState } from 'react';
import { Logo } from '../components/Logo';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

type AuthMode = 'login' | 'signup' | 'forgot';

interface AuthScreenProps {
  onAuth: () => void;
}

export function AuthScreen({ onAuth }: AuthScreenProps) {
  const [mode, setMode] = useState<AuthMode>('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAuth();
  };

  const updateField = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="fixed inset-0 bg-soft-white dark:bg-dark-bg flex flex-col justify-center px-6">
      <div className="max-w-md mx-auto w-full">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo size="lg" showText />
        </div>

        <div className="text-center mb-8">
          <h2 className="mb-2">
            {mode === 'login' && 'Welcome Back'}
            {mode === 'signup' && 'Create Account'}
            {mode === 'forgot' && 'Reset Password'}
          </h2>
          <p className="text-text-secondary dark:text-dark-text-secondary">
            {mode === 'login' && 'Sign in to continue your journey'}
            {mode === 'signup' && 'Join the community today'}
            {mode === 'forgot' && 'Enter your email to reset password'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <Label htmlFor="name" className="text-text-primary dark:text-dark-text-primary">Full Name</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="John Doe"
                className="h-12 mt-1.5 bg-white dark:bg-dark-surface border-border-light dark:border-dark-border text-text-primary dark:text-dark-text-primary placeholder:text-text-muted dark:placeholder:text-dark-text-muted"
                required
              />
            </div>
          )}

          <div>
            <Label htmlFor="email" className="text-text-primary dark:text-dark-text-primary">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="your@email.com"
              className="h-12 mt-1.5 bg-white dark:bg-dark-surface border-border-light dark:border-dark-border text-text-primary dark:text-dark-text-primary placeholder:text-text-muted dark:placeholder:text-dark-text-muted"
              required
            />
          </div>

          {mode !== 'forgot' && (
            <div>
              <Label htmlFor="password" className="text-text-primary dark:text-dark-text-primary">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => updateField('password', e.target.value)}
                placeholder="••••••••"
                className="h-12 mt-1.5 bg-white dark:bg-dark-surface border-border-light dark:border-dark-border text-text-primary dark:text-dark-text-primary"
                required
              />
            </div>
          )}

          {mode === 'login' && (
            <button
              type="button"
              onClick={() => setMode('forgot')}
              className="text-nexora-blue hover:underline"
            >
              Forgot password?
            </button>
          )}

          <Button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-nexora-blue to-accent-purple hover:opacity-90 text-white"
          >
            {mode === 'login' && 'Sign In'}
            {mode === 'signup' && 'Create Account'}
            {mode === 'forgot' && 'Send Reset Link'}
          </Button>
        </form>

        {/* Toggle Mode */}
        <div className="mt-6 text-center">
          {mode === 'login' && (
            <p className="text-text-secondary dark:text-dark-text-secondary">
              Don't have an account?{' '}
              <button
                onClick={() => setMode('signup')}
                className="text-nexora-blue hover:underline font-medium"
              >
                Sign up
              </button>
            </p>
          )}
          {mode === 'signup' && (
            <p className="text-text-secondary dark:text-dark-text-secondary">
              Already have an account?{' '}
              <button
                onClick={() => setMode('login')}
                className="text-nexora-blue hover:underline font-medium"
              >
                Sign in
              </button>
            </p>
          )}
          {mode === 'forgot' && (
            <p className="text-text-secondary dark:text-dark-text-secondary">
              Remember your password?{' '}
              <button
                onClick={() => setMode('login')}
                className="text-nexora-blue hover:underline font-medium"
              >
                Sign in
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}