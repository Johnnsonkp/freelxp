import React, { useEffect, useRef, useState } from 'react';

interface PinProtectionProps {
  correctPin: string;
  onSuccess: () => void;
}

export default function PinProtection({ correctPin, onSuccess }: PinProtectionProps) {
  const [pin, setPin] = useState(['', '', '', '']);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    // Only allow digits
    if (value && !/^\d$/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
    setError(false);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if all 4 digits are entered
    if (index === 3 && value) {
      const enteredPin = newPin.join('');
      if (enteredPin === correctPin) {
        onSuccess();
      } else {
        // Wrong PIN
        setError(true);
        setShake(true);
        setTimeout(() => {
          setPin(['', '', '', '']);
          setShake(false);
          inputRefs.current[0]?.focus();
        }, 500);
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !pin[index] && index > 0) {
      // Move to previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 4);
    
    if (!/^\d+$/.test(pastedData)) return;

    const newPin = pastedData.split('').concat(['', '', '', '']).slice(0, 4);
    setPin(newPin);

    // Focus the next empty input or last input
    const nextEmptyIndex = newPin.findIndex(digit => !digit);
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus();
    } else {
      inputRefs.current[3]?.focus();
      // Check PIN
      const enteredPin = newPin.join('');
      if (enteredPin === correctPin) {
        onSuccess();
      } else {
        setError(true);
        setShake(true);
        setTimeout(() => {
          setPin(['', '', '', '']);
          setShake(false);
          inputRefs.current[0]?.focus();
        }, 500);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
        {/* Lock Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
          Enter PIN
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Please enter your 4-digit PIN to access this page
        </p>

        {/* PIN Input */}
        <div
          className={`flex justify-center gap-4 mb-6 ${shake ? 'animate-shake' : ''}`}
          onPaste={handlePaste}
        >
          {pin.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={`w-14 h-14 text-center text-2xl font-bold border-2 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500 
                dark:bg-gray-700 dark:text-white transition-all
                ${
                  error
                    ? 'border-red-500 dark:border-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                }
              `}
            />
          ))}
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-center text-red-500 text-sm animate-fade-in">
            Incorrect PIN. Please try again.
          </p>
        )}

        {/* Info */}
        <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-6">
          This page is protected for privacy
        </p>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
