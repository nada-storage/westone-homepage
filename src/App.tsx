import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-white mb-4">
          Westone Team
        </h1>
        <p className="text-xl text-slate-300">
          인터랙티브 팀 홈페이지 구축 중...
        </p>
      </motion.div>
    </div>
  );
}

export default App;