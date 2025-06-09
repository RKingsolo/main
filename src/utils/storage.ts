// Local storage utilities for data persistence
// In a production environment, this would be replaced with a proper database

const STORAGE_KEYS = {
  USERS: 'church_users',
  CONTENT: 'church_content',
  SERMONS: 'church_sermons',
  EVENTS: 'church_events',
  MINISTRIES: 'church_ministries',
  NAVIGATION: 'church_navigation',
  MEDIA_FILES: 'church_media_files',
  CURRENT_USER: 'church_current_user'
};

// Generic storage functions
export const setStorageItem = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const getStorageItem = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
};

// Initialize default data if not exists
export const initializeDefaultData = (): void => {
  // Default admin user
  const defaultUsers = [
    {
      id: 'admin-1',
      username: 'admin',
      email: 'admin@churchofchrist.org',
      role: 'admin' as const,
      password: 'admin123', // In production, this should be properly hashed
      isAuthenticated: false
    }
  ];

  // Default navigation items
  const defaultNavigation = [
    { id: 'home', title: 'Home', path: '/', isVisible: true, order: 1 },
    { id: 'about', title: 'About Us', path: '/about', isVisible: true, order: 2 },
    { id: 'beliefs', title: 'Our Beliefs', path: '/beliefs', isVisible: true, order: 3 },
    { id: 'ministries', title: 'Ministries', path: '/ministries', isVisible: true, order: 4 },
    { id: 'sermons', title: 'Sermons', path: '/sermons', isVisible: true, order: 5 },
    { id: 'events', title: 'Events', path: '/events', isVisible: true, order: 6 },
    { id: 'contact', title: 'Contact', path: '/contact', isVisible: true, order: 7 }
  ];

  // Default page content
  const defaultContent = [
    {
      id: 'home-hero',
      pageId: 'home',
      title: 'Welcome to Church of Christ',
      content: 'Join us in worship and fellowship as we grow together in faith and love.',
      lastModified: new Date().toISOString(),
      modifiedBy: 'admin'
    },
    {
      id: 'about-main',
      pageId: 'about',
      title: 'About Our Church',
      content: 'Church of Christ is a vibrant community of believers located at No.5 Owerri Street High Level Makurdi. We are committed to following the teachings of Jesus Christ and serving our community with love and compassion.',
      lastModified: new Date().toISOString(),
      modifiedBy: 'admin'
    }
  ];

  // Default ministries
  const defaultMinistries = [
    {
      id: '1',
      name: 'Youth Ministry',
      description: 'Empowering young people to grow in faith and leadership through fellowship, Bible study, and community service.',
      leader: 'Brother Mike Johnson',
      contactEmail: 'youth@churchofchristmakurdi.org',
      meetingTime: 'Fridays at 6:00 PM',
      imageUrl: 'https://images.pexels.com/photos/8923562/pexels-photo-8923562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '2',
      name: 'Women\'s Ministry',
      description: 'A supportive community for women to grow spiritually, build friendships, and serve together in various outreach programs.',
      leader: 'Sister Grace Adamu',
      contactEmail: 'women@churchofchristmakurdi.org',
      meetingTime: 'Saturdays at 10:00 AM',
      imageUrl: 'https://images.pexels.com/photos/8923564/pexels-photo-8923564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  // Default sermons
  const defaultSermons = [
    {
      id: '1',
      title: 'Walking in Faith',
      speaker: 'Elder John Doe',
      date: '2024-12-15',
      description: 'A powerful message about trusting God in uncertain times and walking by faith, not by sight.',
      audioUrl: '#',
      videoUrl: '#',
      tags: ['faith', 'trust', 'christian-living']
    },
    {
      id: '2',
      title: 'The Power of Prayer',
      speaker: 'Pastor Samuel Iorfa',
      date: '2024-12-08',
      description: 'Understanding the importance of prayer in our daily lives and how it transforms our relationship with God.',
      audioUrl: '#',
      tags: ['prayer', 'spiritual-growth', 'relationship-with-god']
    }
  ];

  // Initialize if data doesn't exist
  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    setStorageItem(STORAGE_KEYS.USERS, defaultUsers);
  }
  if (!localStorage.getItem(STORAGE_KEYS.NAVIGATION)) {
    setStorageItem(STORAGE_KEYS.NAVIGATION, defaultNavigation);
  }
  if (!localStorage.getItem(STORAGE_KEYS.CONTENT)) {
    setStorageItem(STORAGE_KEYS.CONTENT, defaultContent);
  }
  if (!localStorage.getItem(STORAGE_KEYS.MINISTRIES)) {
    setStorageItem(STORAGE_KEYS.MINISTRIES, defaultMinistries);
  }
  if (!localStorage.getItem(STORAGE_KEYS.SERMONS)) {
    setStorageItem(STORAGE_KEYS.SERMONS, defaultSermons);
  }
  if (!localStorage.getItem(STORAGE_KEYS.EVENTS)) {
    setStorageItem(STORAGE_KEYS.EVENTS, []);
  }
  if (!localStorage.getItem(STORAGE_KEYS.MEDIA_FILES)) {
    setStorageItem(STORAGE_KEYS.MEDIA_FILES, []);
  }
};

// Specific data access functions
export const getUsers = () => getStorageItem(STORAGE_KEYS.USERS, []);
export const setUsers = (users: any[]) => setStorageItem(STORAGE_KEYS.USERS, users);

export const getCurrentUser = () => getStorageItem(STORAGE_KEYS.CURRENT_USER, null);
export const setCurrentUser = (user: any) => setStorageItem(STORAGE_KEYS.CURRENT_USER, user);

export const getNavigation = () => getStorageItem(STORAGE_KEYS.NAVIGATION, []);
export const setNavigation = (nav: any[]) => setStorageItem(STORAGE_KEYS.NAVIGATION, nav);

export const getContent = () => getStorageItem(STORAGE_KEYS.CONTENT, []);
export const setContent = (content: any[]) => setStorageItem(STORAGE_KEYS.CONTENT, content);

export const getSermons = () => getStorageItem(STORAGE_KEYS.SERMONS, []);
export const setSermons = (sermons: any[]) => setStorageItem(STORAGE_KEYS.SERMONS, sermons);

export const getEvents = () => getStorageItem(STORAGE_KEYS.EVENTS, []);
export const setEvents = (events: any[]) => setStorageItem(STORAGE_KEYS.EVENTS, events);

export const getMinistries = () => getStorageItem(STORAGE_KEYS.MINISTRIES, []);
export const setMinistries = (ministries: any[]) => setStorageItem(STORAGE_KEYS.MINISTRIES, ministries);

export const getMediaFiles = () => getStorageItem(STORAGE_KEYS.MEDIA_FILES, []);
export const setMediaFiles = (files: any[]) => setStorageItem(STORAGE_KEYS.MEDIA_FILES, files);