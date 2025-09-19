'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/navbar';

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'ai'; content: string }>>([]);
  const [inputValue, setInputValue] = useState('');
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', content: inputValue }]);
    setInputValue('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: 'I understand you need help with logistics operations. Let me analyze your requirements and provide optimal solutions.' 
      }]);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <AnimatePresence mode="wait">
        {!showChat ? (
          <motion.section
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-[400px] mt-[60px] overflow-hidden"
          >
            {/* Cosmic Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background">
              <div className="absolute inset-0 opacity-50">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
                }}></div>
              </div>
              
              {/* Animated Particles */}
              <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/30 rounded-full"
                    initial={{ 
                      x: Math.random() * windowWidth,
                      y: Math.random() * 400,
                      opacity: Math.random() * 0.5 + 0.5
                    }}
                    animate={{ 
                      y: [null, Math.random() * 400],
                      opacity: [null, Math.random() * 0.5 + 0.5]
                    }}
                    transition={{ 
                      duration: Math.random() * 20 + 10,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Hero Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold text-center mb-4"
              >
                The82: Built by 82 Learn to optimize logistics
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground text-center mb-8 max-w-2xl"
              >
                AI-powered logistics platform for the modern world
              </motion.p>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowChat(true)}
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-medium text-lg hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                Start Chatting
              </motion.button>
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>

      {/* Main Content Area - Chat Interface */}
      {showChat && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex h-[calc(100vh-60px)] mt-[60px]"
        >
          {/* Left Sidebar */}
          <aside className="hidden lg:block w-[20%] bg-elevated border-r border-separator p-4 overflow-y-auto">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">CONVERSATION HISTORY</h3>
            <div className="space-y-2">
              <div className="p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                <p className="text-sm font-medium truncate">Route optimization for fleet</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
              <div className="p-3 rounded-lg hover:bg-muted/50 cursor-pointer bg-muted/30">
                <p className="text-sm font-medium truncate">Current conversation</p>
                <p className="text-xs text-muted-foreground">Just now</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-muted-foreground mb-4">QUICK FEATURES</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: '🔍', label: 'DeepSearch' },
                  { icon: '🧠', label: 'Think Mode' },
                  { icon: '🎨', label: 'Visualize' },
                  { icon: '🎤', label: 'Voice' },
                ].map((feature) => (
                  <button
                    key={feature.label}
                    className="p-3 rounded-lg hover:bg-muted/50 transition-colors flex flex-col items-center gap-1"
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="text-xs">{feature.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gradient-to-br from-primary/15 to-primary/5 rounded-lg border border-primary/30 shadow-lg shadow-primary/10">
              <h4 className="font-semibold mb-2 text-primary">SuperThe82</h4>
              <p className="text-sm text-muted-foreground mb-3">100 queries/2h • Priority support</p>
              <button className="w-full py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                Upgrade Now
              </button>
            </div>
          </aside>

          {/* Central Chat Window */}
          <div className="flex-1 flex flex-col bg-background">
            {/* Chat Header */}
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <h2 className="font-semibold">Logistics Assistant</h2>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-muted/50 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 010-5.684M5.684 15.342A9.001 9.001 0 0112 21a9.001 9.001 0 006.316-5.658" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-muted/50 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Message Feed */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.length === 0 ? (
                <div className="text-center text-muted-foreground mt-20">
                  <p className="text-lg mb-4">Start a conversation about your logistics needs</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      "Optimize my delivery routes",
                      "Track shipment #12345",
                      "Analyze last month's performance",
                      "Schedule fleet maintenance"
                    ].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => {
                          setInputValue(suggestion);
                          handleSendMessage();
                        }}
                        className="px-4 py-2 bg-muted/50 rounded-lg text-sm hover:bg-muted transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[70%] ${message.role === 'user' ? 'order-1' : 'order-2'}`}>
                      <div className={`px-4 py-3 rounded-lg ${
                        message.role === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted'
                      }`}>
                        {message.content}
                      </div>
                    </div>
                    {message.role === 'ai' && (
                      <div className="order-1 mr-3 w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">82</span>
                      </div>
                    )}
                  </motion.div>
                ))
              )}
            </div>

            {/* Input Composer */}
            <div className="border-t border-border p-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-end gap-3">
                  <div className="flex-1 relative">
                    <textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                      placeholder="Type your message..."
                      className="w-full px-4 py-3 bg-muted/50 rounded-lg text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                      rows={1}
                    />
                  </div>
                  <button className="p-3 hover:bg-muted/50 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                  <button
                    onClick={handleSendMessage}
                    className="p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="hidden xl:block w-[20%] bg-elevated border-l border-separator p-4 overflow-y-auto">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">CONTEXT</h3>
            <div className="space-y-4">
              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="text-sm font-medium mb-1">Query Analysis</p>
                <p className="text-xs text-muted-foreground">Logistics optimization request detected</p>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2">Sources</p>
                <div className="space-y-1">
                  <a href="#" className="text-xs text-primary hover:underline block">Route Planning Guide</a>
                  <a href="#" className="text-xs text-primary hover:underline block">Fleet Management Best Practices</a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-muted-foreground mb-4">SUGGESTIONS</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 rounded hover:bg-muted/50 transition-colors text-sm">
                  → How to reduce fuel costs?
                </button>
                <button className="w-full text-left p-2 rounded hover:bg-muted/50 transition-colors text-sm">
                  → Compare shipping carriers
                </button>
                <button className="w-full text-left p-2 rounded hover:bg-muted/50 transition-colors text-sm">
                  → Automate inventory tracking
                </button>
              </div>
            </div>
          </aside>
        </motion.div>
      )}

      {/* Features Section - Only show when not in chat mode */}
      {!showChat && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1920px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Powerful AI-Driven Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform your logistics operations with intelligent automation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-elevated border border-separator hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Smart Routing</h3>
                <p className="text-muted-foreground">
                  AI optimizes delivery routes in real-time, reducing costs by up to 30% and improving efficiency across your entire fleet.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-8 rounded-2xl bg-elevated border border-separator hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Predictive Analytics</h3>
                <p className="text-muted-foreground">
                  Forecast demand, prevent issues before they happen, and make data-driven decisions with advanced machine learning insights.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-8 rounded-2xl bg-elevated border border-separator hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Natural Language</h3>
                <p className="text-muted-foreground">
                  Control everything with simple conversational commands. Ask questions, get insights, and manage operations naturally.
                </p>
              </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-16 px-8 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/8 to-transparent border border-primary/30 shadow-2xl shadow-primary/20"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to revolutionize your logistics?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of companies already using The82 to optimize their operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowChat(true)}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium text-lg hover:bg-primary/90 transition-all"
                >
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-border rounded-lg font-medium text-lg hover:bg-muted/50 transition-all">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Footer - Only show when not in chat mode */}
      {!showChat && (
        <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1920px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-8">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About 82 Learn</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">API</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              </div>
              
              <div className="flex items-center gap-6">
                <span className="text-sm text-muted-foreground">© 2025 82 Learn. All rights reserved.</span>
                <div className="flex items-center gap-4">
                  <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </button>
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </main>
  );
}