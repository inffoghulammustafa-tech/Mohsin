import { motion } from "motion/react";

interface SkillProps {
  title: string;
  proficiency: string;
  icon: string;
}

function SkillCard({ title, proficiency, icon }: SkillProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex items-center w-full max-w-[380px] relative h-40 group"
    >
      {/* Text Card */}
      <div className="bg-gradient-to-br from-[#1e2943]/40 to-[#0c132c]/40 backdrop-blur-md border border-white/5 rounded-[24px] w-[280px] p-8 pr-16 transition-all group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] h-full flex flex-col justify-center">
        <h3 className="text-3xl font-bold text-white mb-2 tracking-tight transition-colors group-hover:text-blue-400">{title}</h3>
        <p className="text-[12px] text-gray-500 font-black uppercase tracking-widest">{proficiency} PROFICIENCY</p>
      </div>
      
      {/* Icon Card */}
      <motion.div 
        whileHover={{ rotate: 12, scale: 1.1 }}
        className="bg-[#1e2943]/80 w-[110px] h-[110px] rounded-[24px] flex items-center justify-center absolute -right-0 top-1/2 -translate-y-1/2 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 transition-all group-hover:border-blue-500/50 group-hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] z-10"
      >
        <img 
          src={icon} 
          alt={title} 
          className="max-w-[70px] max-h-[70px] object-contain drop-shadow-2xl"
        />
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-[24px] bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
      </motion.div>
    </motion.div>
  );
}

export default function Expertise() {
  const skills: SkillProps[] = [
    {
      title: "HTML",
      proficiency: "98%",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
    },
    {
      title: "CSS",
      proficiency: "95%",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
    },
    {
      title: "Development",
      proficiency: "92%",
      icon: "https://png.pngtree.com/png-vector/20250110/ourlarge/pngtree-web-developer-3d-icon-isolated-on-a-white-background-highlighting-coding-png-image_15139686.png"
    },
    {
      title: "Canva",
      proficiency: "90%",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgd-nf45w8vq-NqpmyL_UOhLluI6UsB5mKMg&s"
    },
    {
      title: "Graphic",
      proficiency: "88%",
      icon: "https://dcassetcdn.com/design_img/124745/123626/123626_1868058_124745_image.jpg"
    },
    {
      title: "Photoshop",
      proficiency: "94%",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
    }
  ];

  return (
    <section id="expertise" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center mb-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[12px] tracking-[0.4em] uppercase text-blue-500 font-bold mb-4"
        >
          My Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-center uppercase tracking-tight"
        >
          Expertise In
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <SkillCard {...skill} />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-8 mt-20 opacity-50">
        <div className="w-8 h-8 rounded-full bg-blue-600 blur-xl animate-pulse" />
        <div className="w-8 h-8 rounded-full bg-red-600 blur-xl animate-pulse delay-700" />
      </div>
    </section>
  );
}
