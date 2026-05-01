import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Shield, Activity, Users, Database, LogOut } from "lucide-react";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPoster, setShowPoster] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (name.toLowerCase() === "mohsin" && password === "mohsinshah") {
      setShowPoster(true);
      setTimeout(() => {
        setShowPoster(false);
        setIsLoggedIn(true);
      }, 3000);
    } else {
      setError("ACCESS DENIED: INVALID CREDENTIALS");
      setTimeout(() => setError(""), 3000);
    }
  };

  if (showPoster) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center bg-[#030612] px-6"
      >
        <div className="glass p-16 rounded-[40px] border border-blue-500/30 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-500/5 animate-pulse" />
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="relative z-10"
          >
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 uppercase italic">
              CONGRATULATIONS <br />
              <span className="text-blue-500">MOHSIN</span>
            </h1>
            <p className="text-gray-400 tracking-[0.5em] uppercase font-bold">Accessing Intelligence Hub...</p>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#030612] px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md glass p-10 rounded-[32px] border border-white/5 relative overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-8 text-blue-500">
            <Terminal size={20} />
            <span className="text-[10px] tracking-[0.3em] font-black uppercase">Terminal Auth v2.0</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">System Login</h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">Identity</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all font-mono"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">Security Key</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all font-mono"
              />
            </div>

            {error && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-red-500 text-[10px] font-black uppercase text-center tracking-widest"
              >
                {error}
              </motion.p>
            )}

            <button className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl uppercase tracking-widest text-sm hover:bg-blue-500 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.2)] active:scale-[0.98]">
              Verify Access
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030612] p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-green-500 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] tracking-[0.2em] font-black uppercase">Core System Online</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Command <span className="text-blue-500">Center</span>
            </h1>
            <p className="text-gray-500 mt-2">Welcome back, mohsin</p>
            <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mt-1">Failed to fetch intelligence data. System may be offline.</p>
          </div>

          <button 
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-red-500/50 hover:text-red-500 px-6 py-3 rounded-2xl transition-all text-sm font-bold uppercase tracking-widest group"
          >
            <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
            Terminate Session
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Intelligence Captured", value: "0", icon: Database },
            { label: "Profile Reach", value: "1.2k", icon: Users },
            { label: "System Health", value: "99%", icon: Activity },
            { label: "Auth Status", value: "ADMIN", icon: Shield, highlight: true },
          ].map((stat, i) => (
            <div key={i} className="glass p-8 rounded-[32px] border border-white/5 relative group hover:border-white/10 transition-all">
              <stat.icon className="absolute top-8 right-8 text-blue-500/20 group-hover:text-blue-500 transition-colors" size={24} />
              <p className="text-[10px] tracking-[0.2em] text-gray-500 font-black uppercase mb-4">{stat.label}</p>
              <h3 className={`text-5xl font-black tracking-tighter ${stat.highlight ? 'text-white' : 'text-white'}`}>
                {stat.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Intelligence Hub Table */}
        <div className="glass rounded-[40px] border border-white/5 overflow-hidden">
          <div className="p-10 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-1">Intelligence Hub</h2>
              <p className="text-[10px] tracking-[0.1em] text-gray-500 font-bold uppercase">Comprehensive Client & Visitor Records</p>
            </div>
            <button className="text-red-500 text-[10px] font-black uppercase tracking-widest hover:underline">Purge All Records</button>
          </div>

          <div className="p-10">
            <div className="flex justify-between items-center text-[10px] tracking-[0.2em] text-gray-500 font-black uppercase mb-10 pb-4 border-b border-white/5">
              <div className="w-[15%]">Time / Context</div>
              <div className="w-[15%]">Identity</div>
              <div className="w-[15%]">Contact Details</div>
              <div className="w-[20%]">Client Message</div>
              <div className="w-[15%]">Residence</div>
              <div className="w-[10%] text-right">Actions</div>
            </div>

            <div className="flex flex-col items-center justify-center py-20 text-gray-600">
               <Database size={40} className="mb-4 opacity-20" />
               <p className="text-[10px] tracking-[0.3em] font-black uppercase italic">No Intelligence Data Captured</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
