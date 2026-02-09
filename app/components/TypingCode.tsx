'use client';

import { useState, useEffect } from 'react';

interface CodeLine {
  text: string;
  color: string;
}

interface TypingCodeProps {
  lines: CodeLine[][];
  typingSpeed?: number;
  pauseBeforeFade?: number;
  fadeDuration?: number;
  restartDelay?: number;
}

export default function TypingCode({
  lines,
  typingSpeed = 50,
  pauseBeforeFade = 1000,
  fadeDuration = 800,
  restartDelay = 500,
}: TypingCodeProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Reset state
    if (currentLineIndex >= lines.length && isComplete) {
      const fadeTimer = setTimeout(() => {
        setOpacity(0);
        setTimeout(() => {
          setDisplayedLines([]);
          setCurrentLineIndex(0);
          setCurrentCharIndex(0);
          setIsComplete(false);
          setOpacity(1);
        }, fadeDuration);
      }, pauseBeforeFade);
      return () => clearTimeout(fadeTimer);
    }

    // Typing animation
    if (currentLineIndex < lines.length) {
      const currentLine = lines[currentLineIndex];
      const fullLineText = currentLine.map(segment => segment.text).join('');

      if (currentCharIndex < fullLineText.length) {
        const timer = setTimeout(() => {
          setCurrentCharIndex(prev => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        // Move to next line
        const newDisplayedLines = [...displayedLines];
        newDisplayedLines[currentLineIndex] = fullLineText;
        setDisplayedLines(newDisplayedLines);
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
        
        if (currentLineIndex === lines.length - 1) {
          setIsComplete(true);
        }
      }
    }
  }, [currentCharIndex, currentLineIndex, lines, displayedLines, isComplete, typingSpeed, pauseBeforeFade, fadeDuration]);

  const renderLine = (lineIndex: number) => {
    const line = lines[lineIndex];
    if (!line) return null;

    const fullLineText = line.map(segment => segment.text).join('');
    const displayText = lineIndex === currentLineIndex 
      ? fullLineText.slice(0, currentCharIndex)
      : displayedLines[lineIndex] || '';

    let charCount = 0;
    return (
      <div key={lineIndex} className="font-mono text-base leading-relaxed">
        {line.map((segment, segmentIndex) => {
          const segmentLength = segment.text.length;
          const startChar = charCount;
          const endChar = charCount + segmentLength;
          charCount = endChar;

          let visibleText = '';
          if (lineIndex < currentLineIndex) {
            visibleText = segment.text;
          } else if (lineIndex === currentLineIndex) {
            const visibleStart = Math.max(0, currentCharIndex - startChar);
            const visibleEnd = Math.min(segmentLength, currentCharIndex - startChar);
            visibleText = segment.text.slice(0, visibleEnd);
          }

          return (
            <span key={segmentIndex} className={segment.color}>
              {visibleText}
            </span>
          );
        })}
        {lineIndex === currentLineIndex && currentCharIndex > 0 && (
          <span className="animate-cursor-blink text-[#61AFEF]">▌</span>
        )}
      </div>
    );
  };

  return (
    <div 
      className="transition-opacity duration-800"
      style={{ opacity }}
    >
      {lines.map((_, index) => (
        index <= currentLineIndex ? renderLine(index) : null
      ))}
    </div>
  );
}
