import { motion } from 'framer-motion'
import { Sparkles, Layers, Rocket } from 'lucide-react'

const highlights = [
  {
    icon: Sparkles,
    title: 'AI & automation',
    text: 'Building AI-powered tools and workflows that take repetitive work off people’s plates.',
  },
  {
    icon: Layers,
    title: 'Full stack',
    text: 'React, Next.js and TypeScript on the front, Node.js with PostgreSQL or MongoDB behind it.',
  },
  {
    icon: Rocket,
    title: 'Shipping real products',
    text: 'From a live e-commerce store to a daily startup job finder, built, deployed and used.',
  },
]

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="font-['Figtree'] flex flex-col gap-4"
    >
      <p className="text-[15px] leading-[1.75]" style={{ color: 'var(--text-zinc-400)' }}>
        I'm a <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>full stack developer</span> who
        likes turning a rough idea into something people can actually use. Most of what I build starts
        with a problem I've run into myself, like spending hours hunting for startups that are hiring,
        which became <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Daily Startup Finder</span>.
      </p>
      <p className="text-[15px] leading-[1.75]" style={{ color: 'var(--text-zinc-400)' }}>
        I care about clean, maintainable code, interfaces that feel simple, and being honest about
        data. Right now I'm focused on <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>AI automation</span>,
        and I'm open to internships, freelance projects and collaborations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-1">
        {highlights.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-[10px] border p-3 flex flex-col gap-[6px]"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <div className="flex items-center gap-2 text-[13px] font-semibold" style={{ color: 'var(--text-primary)' }}>
              <Icon size={14} />
              <span>{title}</span>
            </div>
            <p className="text-[13px] leading-[1.6]" style={{ color: 'var(--text-zinc-400)' }}>{text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
