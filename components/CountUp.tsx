"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  to: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
};

export default function CountUp({
  to,
  suffix = "",
  prefix = "",
  className,
  duration = 2,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (inView) motionVal.set(to);
  }, [inView, motionVal, to]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent =
          prefix + Math.round(v).toLocaleString("cs-CZ") + suffix;
      }
    });
    return unsub;
  }, [spring, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
