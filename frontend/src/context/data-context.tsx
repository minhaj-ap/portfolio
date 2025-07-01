"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type AIProject = {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  github?: string;
  contributorsWelcome: boolean;
};
type LeetCodeItem = {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topics: string[];
  solved: boolean;
  solutionLink?: string;
};
type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  metrics: string[];
  links: {
    live: string;
    github?: string;
  };
};
type DataContextType = {
  AIprojects: AIProject[] | null;
  LeetCode: LeetCodeItem[] | null;
  Projects: ProjectItem[] | null;
  loading: boolean;
};

const DataContext = createContext<DataContextType>({
  AIprojects: null,
  LeetCode: null,
  Projects: null,
  loading: true,
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [Projects, setProjects] = useState<ProjectItem[] | null>(null);
  const [AIprojects, setAIProjects] = useState<AIProject[] | null>(null);
  const [LeetCode, setLeetCode] = useState<LeetCodeItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
        setAIProjects(data.AIProject);
        setLeetCode(data.leetCode);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <DataContext.Provider value={{ Projects, AIprojects, LeetCode, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
