import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Calendar, 
  Settings, 
  Upload,
  LogOut,
  Edit3,
  Eye,
  Plus,
  Trash2,
  Save
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { 
  getMinistries, 
  setMinistries, 
  getSermons, 
  setSermons,
  getContent,
  setContent 
} from '../../utils/storage';
import { Ministry, Sermon, PageContent } from '../../types';

// Main admin dashboard component
const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { user, logout } = useAuth();

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'content', label: 'Content Management', icon: FileText },
    { id: 'ministries', label: 'Ministries', icon: Users },
    { id: 'sermons', label: 'Sermons', icon: Users },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'media', label: 'Media Library', icon: Upload },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Admin Dashboard</h2>
          <p className="text-sm text-gray-600">Welcome, {user?.username}</p>
        </div>
        
        <nav className="mt-6">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                  activeTab === item.id ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' : 'text-gray-700'
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-64 p-6 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {activeTab === 'dashboard' && <DashboardOverview />}
          {activeTab === 'content' && <ContentManagement />}
          {activeTab === 'ministries' && <MinistriesManagement />}
          {activeTab === 'sermons' && <SermonsManagement />}
          {activeTab === 'events' && <EventManagement />}
          {activeTab === 'media' && <MediaLibrary />}
          {activeTab === 'settings' && <SettingsPanel />}
        </div>
      </div>
    </div>
  );
};

// Dashboard Overview Component
const DashboardOverview: React.FC = () => {
  const ministries = getMinistries();
  const sermons = getSermons();
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Pages</h3>
              <p className="text-2xl font-bold text-blue-600">7</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Ministries</h3>
              <p className="text-2xl font-bold text-green-600">{ministries.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Calendar className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Sermons</h3>
              <p className="text-2xl font-bold text-yellow-600">{sermons.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Upload className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Media Files</h3>
              <p className="text-2xl font-bold text-purple-600">0</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="text-sm text-gray-600">Ministries and Sermons pages added</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="text-sm text-gray-600">Admin content management enabled</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <p className="text-sm text-gray-600">Website initialized with default content</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200">
              <div className="flex items-center space-x-3">
                <Plus className="h-5 w-5 text-blue-600" />
                <span className="text-blue-600 font-medium">Add New Ministry</span>
              </div>
            </button>
            <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200">
              <div className="flex items-center space-x-3">
                <Plus className="h-5 w-5 text-green-600" />
                <span className="text-green-600 font-medium">Add New Sermon</span>
              </div>
            </button>
            <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200">
              <div className="flex items-center space-x-3">
                <Upload className="h-5 w-5 text-purple-600" />
                <span className="text-purple-600 font-medium">Upload Media</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Content Management Component
const ContentManagement: React.FC = () => {
  const [content, setContentState] = useState<PageContent[]>(getContent());
  const [editingContent, setEditingContent] = useState<PageContent | null>(null);

  const handleSaveContent = (updatedContent: PageContent) => {
    const updatedContentList = content.map(item => 
      item.id === updatedContent.id ? updatedContent : item
    );
    setContentState(updatedContentList);
    setContent(updatedContentList);
    setEditingContent(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
          <Plus className="h-5 w-5" />
          <span>Add Content</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Page Content</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {content.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.content.substring(0, 100)}...</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Last modified: {new Date(item.lastModified).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setEditingContent(item)}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                  >
                    <Edit3 className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit Content Modal */}
      {editingContent && (
        <ContentEditModal
          content={editingContent}
          onSave={handleSaveContent}
          onClose={() => setEditingContent(null)}
        />
      )}
    </div>
  );
};

// Ministries Management Component
const MinistriesManagement: React.FC = () => {
  const [ministries, setMinistriesState] = useState<Ministry[]>(getMinistries());
  const [editingMinistry, setEditingMinistry] = useState<Ministry | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const handleSaveMinistry = (ministry: Ministry) => {
    let updatedMinistries;
    if (isAddingNew) {
      updatedMinistries = [...ministries, { ...ministry, id: Date.now().toString() }];
    } else {
      updatedMinistries = ministries.map(m => m.id === ministry.id ? ministry : m);
    }
    setMinistriesState(updatedMinistries);
    setMinistries(updatedMinistries);
    setEditingMinistry(null);
    setIsAddingNew(false);
  };

  const handleDeleteMinistry = (id: string) => {
    const updatedMinistries = ministries.filter(m => m.id !== id);
    setMinistriesState(updatedMinistries);
    setMinistries(updatedMinistries);
  };

  const handleAddNew = () => {
    setEditingMinistry({
      id: '',
      name: '',
      description: '',
      leader: '',
      contactEmail: '',
      meetingTime: '',
      imageUrl: ''
    });
    setIsAddingNew(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Ministries Management</h1>
        <button 
          onClick={handleAddNew}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add Ministry</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ministries.map((ministry) => (
          <div key={ministry.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{ministry.name}</h3>
              <p className="text-gray-600 mb-4">{ministry.description.substring(0, 100)}...</p>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Leader:</span> {ministry.leader}</p>
                <p><span className="font-medium">Meeting:</span> {ministry.meetingTime}</p>
                <p><span className="font-medium">Contact:</span> {ministry.contactEmail}</p>
              </div>
              <div className="flex space-x-2 mt-4">
                <button 
                  onClick={() => setEditingMinistry(ministry)}
                  className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Edit3 className="h-4 w-4 mr-1" />
                  Edit
                </button>
                <button 
                  onClick={() => handleDeleteMinistry(ministry.id)}
                  className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Ministry Modal */}
      {editingMinistry && (
        <MinistryEditModal
          ministry={editingMinistry}
          isNew={isAddingNew}
          onSave={handleSaveMinistry}
          onClose={() => {
            setEditingMinistry(null);
            setIsAddingNew(false);
          }}
        />
      )}
    </div>
  );
};

// Sermons Management Component
const SermonsManagement: React.FC = () => {
  const [sermons, setSermonsState] = useState<Sermon[]>(getSermons());
  const [editingSermon, setEditingSermon] = useState<Sermon | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const handleSaveSermon = (sermon: Sermon) => {
    let updatedSermons;
    if (isAddingNew) {
      updatedSermons = [...sermons, { ...sermon, id: Date.now().toString() }];
    } else {
      updatedSermons = sermons.map(s => s.id === sermon.id ? sermon : s);
    }
    setSermonsState(updatedSermons);
    setSermons(updatedSermons);
    setEditingSermon(null);
    setIsAddingNew(false);
  };

  const handleDeleteSermon = (id: string) => {
    const updatedSermons = sermons.filter(s => s.id !== id);
    setSermonsState(updatedSermons);
    setSermons(updatedSermons);
  };

  const handleAddNew = () => {
    setEditingSermon({
      id: '',
      title: '',
      speaker: '',
      date: new Date().toISOString().split('T')[0],
      description: '',
      audioUrl: '',
      videoUrl: '',
      transcript: '',
      tags: []
    });
    setIsAddingNew(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Sermons Management</h1>
        <button 
          onClick={handleAddNew}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add Sermon</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Speaker
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tags
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sermons.map((sermon) => (
                <tr key={sermon.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{sermon.title}</div>
                    <div className="text-sm text-gray-500">{sermon.description.substring(0, 50)}...</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {sermon.speaker}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(sermon.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {sermon.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {tag}
                        </span>
                      ))}
                      {sermon.tags.length > 2 && (
                        <span className="text-xs text-gray-500">+{sermon.tags.length - 2} more</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setEditingSermon(sermon)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Edit3 className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteSermon(sermon.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Sermon Modal */}
      {editingSermon && (
        <SermonEditModal
          sermon={editingSermon}
          isNew={isAddingNew}
          onSave={handleSaveSermon}
          onClose={() => {
            setEditingSermon(null);
            setIsAddingNew(false);
          }}
        />
      )}
    </div>
  );
};

// Content Edit Modal Component
const ContentEditModal: React.FC<{
  content: PageContent;
  onSave: (content: PageContent) => void;
  onClose: () => void;
}> = ({ content, onSave, onClose }) => {
  const [editedContent, setEditedContent] = useState(content);

  const handleSave = () => {
    onSave({
      ...editedContent,
      lastModified: new Date().toISOString(),
      modifiedBy: 'admin'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Edit Content</h3>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={editedContent.title}
              onChange={(e) => setEditedContent({ ...editedContent, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
            <textarea
              value={editedContent.content}
              onChange={(e) => setEditedContent({ ...editedContent, content: e.target.value })}
              rows={10}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors duration-200 flex items-center space-x-2"
          >
            <Save className="h-4 w-4" />
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Ministry Edit Modal Component
const MinistryEditModal: React.FC<{
  ministry: Ministry;
  isNew: boolean;
  onSave: (ministry: Ministry) => void;
  onClose: () => void;
}> = ({ ministry, isNew, onSave, onClose }) => {
  const [editedMinistry, setEditedMinistry] = useState(ministry);

  const handleSave = () => {
    onSave(editedMinistry);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            {isNew ? 'Add New Ministry' : 'Edit Ministry'}
          </h3>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ministry Name</label>
            <input
              type="text"
              value={editedMinistry.name}
              onChange={(e) => setEditedMinistry({ ...editedMinistry, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={editedMinistry.description}
              onChange={(e) => setEditedMinistry({ ...editedMinistry, description: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Leader</label>
            <input
              type="text"
              value={editedMinistry.leader}
              onChange={(e) => setEditedMinistry({ ...editedMinistry, leader: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
            <input
              type="email"
              value={editedMinistry.contactEmail}
              onChange={(e) => setEditedMinistry({ ...editedMinistry, contactEmail: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Meeting Time</label>
            <input
              type="text"
              value={editedMinistry.meetingTime}
              onChange={(e) => setEditedMinistry({ ...editedMinistry, meetingTime: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Fridays at 6:00 PM"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image URL (optional)</label>
            <input
              type="url"
              value={editedMinistry.imageUrl || ''}
              onChange={(e) => setEditedMinistry({ ...editedMinistry, imageUrl: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors duration-200 flex items-center space-x-2"
          >
            <Save className="h-4 w-4" />
            <span>{isNew ? 'Add Ministry' : 'Save Changes'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Sermon Edit Modal Component
const SermonEditModal: React.FC<{
  sermon: Sermon;
  isNew: boolean;
  onSave: (sermon: Sermon) => void;
  onClose: () => void;
}> = ({ sermon, isNew, onSave, onClose }) => {
  const [editedSermon, setEditedSermon] = useState(sermon);
  const [tagsInput, setTagsInput] = useState(sermon.tags.join(', '));

  const handleSave = () => {
    const tags = tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    onSave({ ...editedSermon, tags });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            {isNew ? 'Add New Sermon' : 'Edit Sermon'}
          </h3>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={editedSermon.title}
              onChange={(e) => setEditedSermon({ ...editedSermon, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Speaker</label>
              <input
                type="text"
                value={editedSermon.speaker}
                onChange={(e) => setEditedSermon({ ...editedSermon, speaker: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={editedSermon.date}
                onChange={(e) => setEditedSermon({ ...editedSermon, date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={editedSermon.description}
              onChange={(e) => setEditedSermon({ ...editedSermon, description: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Audio URL (optional)</label>
              <input
                type="url"
                value={editedSermon.audioUrl || ''}
                onChange={(e) => setEditedSermon({ ...editedSermon, audioUrl: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Video URL (optional)</label>
              <input
                type="url"
                value={editedSermon.videoUrl || ''}
                onChange={(e) => setEditedSermon({ ...editedSermon, videoUrl: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma-separated)</label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="faith, prayer, love"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Transcript (optional)</label>
            <textarea
              value={editedSermon.transcript || ''}
              onChange={(e) => setEditedSermon({ ...editedSermon, transcript: e.target.value })}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Full sermon transcript..."
            />
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors duration-200 flex items-center space-x-2"
          >
            <Save className="h-4 w-4" />
            <span>{isNew ? 'Add Sermon' : 'Save Changes'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Placeholder components for other admin sections
const EventManagement: React.FC = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Event Management</h1>
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-600">Event management features coming soon...</p>
    </div>
  </div>
);

const MediaLibrary: React.FC = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Media Library</h1>
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-600">Media library features coming soon...</p>
    </div>
  </div>
);

const SettingsPanel: React.FC = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-600">Settings panel coming soon...</p>
    </div>
  </div>
);

export default AdminDashboard;