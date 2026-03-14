import { create } from 'zustand';

interface Prospect {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  category?: string;
  city?: string;
  status: string;
}

interface Website {
  id: string;
  business_name: string;
  business_type?: string;
  status: string;
  vercel_url?: string;
  github_url?: string;
  lighthouse_score?: number;
}

interface AppState {
  prospects: Prospect[];
  websites: Website[];
  setProspects: (prospects: Prospect[]) => void;
  setWebsites: (websites: Website[]) => void;
  addProspect: (prospect: Prospect) => void;
  addWebsite: (website: Website) => void;
}

export const useAppStore = create<AppState>((set) => ({
  prospects: [],
  websites: [],
  setProspects: (prospects) => set({ prospects }),
  setWebsites: (websites) => set({ websites }),
  addProspect: (prospect) => set((state) => ({ prospects: [...state.prospects, prospect] })),
  addWebsite: (website) => set((state) => ({ websites: [...state.websites, website] })),
}));
