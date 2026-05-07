import { useEffect, useRef, useState } from "react";

interface UseTypewriterOptions {
  segments: string[];
  segmentDelay: number;
  charDelay: number;
  startDelay?: number;
  trigger: boolean;
}

interface SegmentState {
  text: string;
  visible: boolean;
}

export function useTypewriter({
  segments,
  segmentDelay,
  charDelay,
  startDelay = 0,
  trigger,
}: UseTypewriterOptions) {
  const [segmentStates, setSegmentStates] = useState<SegmentState[]>(
    () => segments.map(() => ({ text: "", visible: false }))
  );
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!trigger) {
      setSegmentStates(segments.map(() => ({ text: "", visible: false })));
      setIsComplete(false);
      setShowCursor(true);
      return;
    }

    setIsComplete(false);
    setShowCursor(true);
    let currentSegment = 0;
    let currentChar = 0;

    const runSegment = () => {
      if (currentSegment >= segments.length) {
        setIsComplete(true);
        setShowCursor(false);
        return;
      }

      // Reveal this segment's container
      setSegmentStates((prev) => {
        const next = [...prev];
        next[currentSegment] = { ...next[currentSegment], visible: true };
        return next;
      });

      currentChar = 0;

      const typeChar = () => {
        const segmentText = segments[currentSegment];
        if (currentChar < segmentText.length) {
          setSegmentStates((prev) => {
            const next = [...prev];
            next[currentSegment] = {
              visible: true,
              text: segmentText.slice(0, currentChar + 1),
            };
            return next;
          });
          currentChar += 1;
          timeoutRef.current = setTimeout(typeChar, charDelay);
        } else {
          currentSegment += 1;
          timeoutRef.current = setTimeout(runSegment, segmentDelay);
        }
      };

      timeoutRef.current = setTimeout(typeChar, charDelay);
    };

    timeoutRef.current = setTimeout(runSegment, startDelay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [trigger, segments, segmentDelay, charDelay, startDelay]);

  return { segmentStates, showCursor, isComplete };
}