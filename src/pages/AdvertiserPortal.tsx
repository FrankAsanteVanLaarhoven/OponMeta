import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Plus, 
  BarChart3, 
  Target, 
  DollarSign, 
  Eye,
  Play,
  Pause,
  Edit,
  Trash2,
  Upload,
  Settings,
  Users,
  TrendingUp,
  Calendar,
  Image,
  Video,
  FileText
} from "lucide-react";
import { useTranslation } from 'react-i18next';

const AdvertiserPortal = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("overview");

  const adStats = {
    totalCampaigns: 8,
    activeAds: 24,
    totalImpressions: 142750,
    clickRate: 3.2,
    totalSpend: 8450,
    conversions: 127
  };

  const campaigns = [
    {
      id: 1,
      name: "JavaScript Course Promotion",
      type: "video",
      status: "active",
      budget: 1500,
      spent: 847,
      impressions: 34200,
      clicks: 1089,
      conversions: 43,
      ctr: 3.2,
    },
    {
      id: 2,
      name: "React Bootcamp Banner",
      type: "banner",
      status: "active",
      budget: 800,
      spent: 542,
      impressions: 28500,
      clicks: 823,
      conversions: 31,
      ctr: 2.9,
    },
    {
      id: 3,
      name: "AI Course Launch",
      type: "native",
      status: "paused",
      budget: 2000,
      spent: 1200,
      impressions: 18900,
      clicks: 567,
      conversions: 28,
      ctr: 3.0,
    }
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "campaigns", label: "Campaigns", icon: Target },
    { id: "create", label: "Create Ad", icon: Plus },
    { id: "analytics", label: "Analytics", icon: TrendingUp },
    { id: "audience", label: "Audience", icon: Users },
    { id: "settings", label: "Settings", icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">{t('advertiserPortal.title')}</h1>
            <p className="text-blue-200 mt-1">Create and manage your advertising campaigns</p>
          </div>
          <div className="flex items-center gap-4">
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              New Campaign
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Upload className="h-4 w-4 mr-2" />
              Upload Assets
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mb-8 bg-white/10 backdrop-blur-md rounded-lg p-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 ${
                  activeTab === tab.id 
                    ? "bg-white text-slate-800 hover:bg-white/90" 
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </Button>
            );
          })}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-200">Total Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{adStats.totalCampaigns}</div>
                  <p className="text-xs text-green-400 mt-1">+2 this month</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-200">Total Impressions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{adStats.totalImpressions.toLocaleString()}</div>
                  <p className="text-xs text-green-400 mt-1">+18% vs last month</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-200">Click Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{adStats.clickRate}%</div>
                  <p className="text-xs text-green-400 mt-1">+0.3% improvement</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-200">Total Spend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${adStats.totalSpend.toLocaleString()}</div>
                  <p className="text-xs text-yellow-400 mt-1">68% of budget used</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-200">Conversions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{adStats.conversions}</div>
                  <p className="text-xs text-green-400 mt-1">+23 this week</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-200">Active Ads</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{adStats.activeAds}</div>
                  <p className="text-xs text-blue-400 mt-1">across 8 campaigns</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Campaigns */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Campaign Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {campaigns.map((campaign) => (
                    <div key={campaign.id} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                      <img 
                        src={campaign.thumbnail} 
                        alt={campaign.name}
                        className="w-16 h-16 rounded-lg object-cover"
                        loading="lazy"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-white">{campaign.name}</h3>
                          <Badge 
                            variant={campaign.status === "active" ? "default" : "secondary"}
                            className={campaign.status === "active" ? "bg-green-600 text-white" : "bg-yellow-600 text-white"}
                          >
                            {campaign.status}
                          </Badge>
                          <Badge variant="outline" className="border-blue-400 text-blue-300">
                            {campaign.type}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-blue-200">Budget:</span>
                            <div className="text-white font-medium">${campaign.budget}</div>
                          </div>
                          <div>
                            <span className="text-blue-200">Spent:</span>
                            <div className="text-white font-medium">${campaign.spent}</div>
                          </div>
                          <div>
                            <span className="text-blue-200">Impressions:</span>
                            <div className="text-white font-medium">{campaign.impressions.toLocaleString()}</div>
                          </div>
                          <div>
                            <span className="text-blue-200">CTR:</span>
                            <div className="text-white font-medium">{campaign.ctr}%</div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-blue-200">Budget Usage:</span>
                            <Progress value={(campaign.spent / campaign.budget) * 100} className="flex-1 h-2" />
                            <span className="text-xs text-white">{Math.round((campaign.spent / campaign.budget) * 100)}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                          {campaign.status === "active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Campaigns Tab */}
        {activeTab === "campaigns" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">All Campaigns</h2>
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                New Campaign
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns.map((campaign) => (
                <Card key={campaign.id} className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
                  <div className="aspect-video bg-slate-800 relative">
                    <img 
                      src={campaign.thumbnail} 
                      alt={campaign.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge 
                        variant={campaign.status === "active" ? "default" : "secondary"}
                        className={campaign.status === "active" ? "bg-green-600 text-white" : "bg-yellow-600 text-white"}
                      >
                        {campaign.status}
                      </Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="border-blue-400 text-blue-300 bg-black/50">
                        {campaign.type}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-white mb-3">{campaign.name}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-blue-200">Budget:</span>
                        <span className="text-white">${campaign.budget}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-blue-200">Spent:</span>
                        <span className="text-white">${campaign.spent}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-blue-200">CTR:</span>
                        <span className="text-green-400">{campaign.ctr}%</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-blue-200">Progress:</span>
                          <span className="text-white">{Math.round((campaign.spent / campaign.budget) * 100)}%</span>
                        </div>
                        <Progress value={(campaign.spent / campaign.budget) * 100} className="h-2" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                        {campaign.status === "active" ? <Pause className="h-4 w-4 mr-1" /> : <Play className="h-4 w-4 mr-1" />}
                        {campaign.status === "active" ? "Pause" : "Resume"}
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Create Ad Tab */}
        {activeTab === "create" && (
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Create New Campaign</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-blue-200 block mb-2">Campaign Name</label>
                      <Input placeholder="Enter campaign name" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-blue-200 block mb-2">Ad Type</label>
                      <Select>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select ad type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="banner">Banner Ad</SelectItem>
                          <SelectItem value="video">Video Ad</SelectItem>
                          <SelectItem value="native">Native Ad</SelectItem>
                          <SelectItem value="popup">Pop-up Ad</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-blue-200 block mb-2">Target Audience</label>
                      <Select>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select target audience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="students">Students</SelectItem>
                          <SelectItem value="professionals">Professionals</SelectItem>
                          <SelectItem value="beginners">Beginners</SelectItem>
                          <SelectItem value="advanced">Advanced Learners</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-blue-200 block mb-2">Budget ($)</label>
                      <Input type="number" placeholder="0.00" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-blue-200 block mb-2">Ad Content</label>
                      <Textarea 
                        placeholder="Enter your ad copy here..." 
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-32"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-blue-200 block mb-2">Upload Creative</label>
                      <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center">
                        <Upload className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                        <p className="text-white mb-2">Drag & drop your files here</p>
                        <p className="text-blue-200 text-sm">Supports: JPG, PNG, MP4, GIF (Max 10MB)</p>
                        <Button variant="outline" className="mt-4 border-white/20 text-white hover:bg-white/10">
                          Browse Files
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                    Create Campaign
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Save as Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Account Settings */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Account Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-blue-200 block mb-2">Company Name</label>
                    <Input placeholder="Your Company Name" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-blue-200 block mb-2">Business Email</label>
                    <Input type="email" placeholder="business@company.com" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-blue-200 block mb-2">Industry</label>
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Billing Settings */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Billing & Payments
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-200">Current Plan</span>
                      <Badge className="bg-green-600 text-white">Pro</Badge>
                    </div>
                    <p className="text-white font-semibold">$299/month</p>
                    <p className="text-blue-200 text-sm">Next billing: Jan 15, 2025</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-blue-200 block mb-2">Monthly Budget Limit</label>
                    <Input type="number" placeholder="5000" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-blue-200 block mb-2">Auto-reload Budget</label>
                    <div className="flex items-center gap-2">
                      <Input type="checkbox" className="w-4 h-4" />
                      <span className="text-white text-sm">Automatically reload when budget is 80% used</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Campaign Defaults */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Campaign Defaults
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-blue-200 block mb-2">Default Daily Budget</label>
                    <Input type="number" placeholder="100" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-blue-200 block mb-2">Default Audience</label>
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select default audience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="students">Students (18-25)</SelectItem>
                        <SelectItem value="professionals">Professionals (25-45)</SelectItem>
                        <SelectItem value="all">All Users</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-blue-200 block mb-2">Default Ad Format</label>
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select default format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="banner">Banner Ad</SelectItem>
                        <SelectItem value="video">Video Ad</SelectItem>
                        <SelectItem value="native">Native Ad</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white">Campaign Performance Alerts</span>
                      <input type="checkbox" className="w-4 h-4" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white">Budget Threshold Warnings</span>
                      <input type="checkbox" className="w-4 h-4" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white">Weekly Performance Reports</span>
                      <input type="checkbox" className="w-4 h-4" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white">New Feature Announcements</span>
                      <input type="checkbox" className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-blue-200 block mb-2">Email Notifications</label>
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realtime">Real-time</SelectItem>
                        <SelectItem value="daily">Daily Digest</SelectItem>
                        <SelectItem value="weekly">Weekly Summary</SelectItem>
                        <SelectItem value="never">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* API & Integrations */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  API & Integrations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-blue-200 block mb-2">API Key</label>
                    <div className="flex items-center gap-2">
                      <Input 
                        value="adv_sk_1234567890abcdef..." 
                        readOnly 
                        className="bg-white/10 border-white/20 text-white" 
                      />
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        Copy
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-blue-200 block mb-2">Webhook URL</label>
                    <Input 
                      placeholder="https://your-app.com/webhooks/ads" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" 
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-white font-medium">Connected Integrations</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white/5 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                          <BarChart3 className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-white">Google Analytics</span>
                      </div>
                      <Badge className="bg-green-600 text-white">Connected</Badge>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                          <Target className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-white">Facebook Pixel</span>
                      </div>
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        Connect
                      </Button>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                          <TrendingUp className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-white">HubSpot</span>
                      </div>
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        Connect
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-white font-medium">Data Retention</h4>
                    <div>
                      <label className="text-sm font-medium text-blue-200 block mb-2">Campaign Data Retention</label>
                      <Select>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select retention period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1year">1 Year</SelectItem>
                          <SelectItem value="2years">2 Years</SelectItem>
                          <SelectItem value="5years">5 Years</SelectItem>
                          <SelectItem value="forever">Forever</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" defaultChecked />
                      <span className="text-white text-sm">Enable two-factor authentication</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-white font-medium">Compliance</h4>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" defaultChecked />
                      <span className="text-white text-sm">GDPR Compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" defaultChecked />
                      <span className="text-white text-sm">CCPA Compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-white text-sm">COPPA Compliance</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center gap-4">
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                Save Settings
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Reset to Defaults
              </Button>
            </div>
          </div>
        )}

        {/* Other tabs placeholder */}
        {!["overview", "campaigns", "create", "settings"].includes(activeTab) && (
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8 text-center">
              <BarChart3 className="h-16 w-16 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{tabs.find(t => t.id === activeTab)?.label}</h3>
              <p className="text-blue-200">This section is coming soon. Stay tuned for updates!</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdvertiserPortal;
