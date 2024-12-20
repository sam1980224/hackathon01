import React from "react";

interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 0,
  radius = 50,
  path = true,
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 w-full h-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      <div
        style={{
          "--duration": `${duration}s`,
          "--radius": `${radius}px`,
          "--delay": `${-delay}s`,
        }}
        className={`absolute flex w-full h-full transform-gpu animate-orbit items-center justify-center rounded-full bg-black/10 dark:bg-white/10 ${className}`}
        data-reverse={reverse ? "true" : undefined}
      >
        {children}
      </div>
    </>
  );
}

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Circles
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        duration={20}
        delay={0}
        radius={120}
      >
        <Icons.whatsapp />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        duration={20}
        delay={5}
        radius={120}
      >
        <Icons.notion />
      </OrbitingCircles>

      {/* Outer Circles */}
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={120}
      >
        <Icons.googleDrive />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        duration={20}
        delay={15}
        radius={120}
      >
        <Icons.gitHub />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  gitHub: () => (
    <svg width="100" height="100" viewBox="0 0 438.549 438.549">
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596..."
      />
    </svg>
  ),
  notion: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543..."
        fill="#ffffff"
      />
    </svg>
  ),
  googleDrive: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 87.3 78"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95..."
        fill="#0066da"
      />
    </svg>
  ),
  whatsapp: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 175.216 175.552"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m54.532 138.45 2.235 1.324c9.387..."
        fill="#b3b3b3"
      />
    </svg>
  ),
};

export default OrbitingCirclesDemo;
