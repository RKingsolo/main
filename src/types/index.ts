// Types for the Church website application
export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'user';
  isAuthenticated: boolean;
}

export interface NavigationItem {
  id: string;
  title: string;
  path: string;
  isVisible: boolean;
  order: number;
}

export interface PageContent {
  id: string;
  pageId: string;
  title: string;
  content: string;
  lastModified: string;
  modifiedBy: string;
}

export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  description: string;
  audioUrl?: string;
  videoUrl?: string;
  transcript?: string;
  tags: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageUrl?: string;
  isRecurring: boolean;
  recurringType?: 'weekly' | 'monthly' | 'yearly';
}

export interface Ministry {
  id: string;
  name: string;
  description: string;
  leader: string;
  contactEmail: string;
  meetingTime: string;
  imageUrl?: string;
}

export interface MediaFile {
  id: string;
  filename: string;
  originalName: string;
  fileType: string;
  fileSize: number;
  uploadDate: string;
  category: 'document' | 'image' | 'audio' | 'video';
  downloadUrl: string;
}