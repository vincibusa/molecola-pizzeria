import React from 'react';
import { useLocation } from 'react-router-dom';

interface ContentWrapperProps {
  children: React.ReactNode;
}

export default function ContentWrapper({ children }: ContentWrapperProps) {
  const location = useLocation();
  // Applica padding-top se non si è nella home ("/")
  const paddingClass = location.pathname === "/" ? "" : "pt-20";
  return <div className={paddingClass}>{children}</div>;
}