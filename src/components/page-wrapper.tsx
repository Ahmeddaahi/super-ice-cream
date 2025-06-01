'use client';

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  // Removed motion animations to avoid conflicts with Template component
  return (
    <div>
      {children}
    </div>
  );
}
