import { projects } from '@/components/Portfolio/Constans';
import React from 'react';

export async function generateMetadata({
  params: { id },
}: {
  params: { id: number };
}) {
  const project = projects.find((project) => project.id === Number(id));

  return {
    title: `sem;-colon | ${project?.name}`,
  };
}

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default PortfolioLayout;
