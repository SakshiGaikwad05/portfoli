import { Bot, Sparkles, BrainCircuit, Workflow, FileSearch, Cpu, Database, ScanSearch, Webhook } from 'lucide-react'

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const devSkills = [
  { name: 'Python', icon: `${CDN}/python/python-original.svg` },
  { name: 'React', icon: `${CDN}/react/react-original.svg` },
  { name: 'Node.js', icon: `${CDN}/nodejs/nodejs-original.svg` },
  { name: 'Express', icon: `${CDN}/express/express-original.svg` },
  { name: 'FastAPI', icon: `${CDN}/fastapi/fastapi-original.svg` },
  { name: 'TypeScript', icon: `${CDN}/typescript/typescript-original.svg` },
  { name: 'JavaScript', icon: `${CDN}/javascript/javascript-original.svg` },
  { name: 'REST APIs', Icon: Webhook },
  { name: 'SQL', Icon: Database },
  { name: 'PostgreSQL', icon: `${CDN}/postgresql/postgresql-original.svg` },
  { name: 'MySQL', icon: `${CDN}/mysql/mysql-original.svg` },
  { name: 'MongoDB', icon: `${CDN}/mongodb/mongodb-original.svg` },
  { name: 'Git', icon: `${CDN}/git/git-original.svg` },
]

const aiSkills = [
  { name: 'AI Agents', Icon: Bot },
  { name: 'Generative AI', Icon: Sparkles },
  { name: 'LLMs', Icon: BrainCircuit },
  { name: 'RAG', Icon: FileSearch },
  { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain/4FA89A' },
  { name: 'OpenAI API', Icon: Cpu },
  { name: 'AI Automation', Icon: Workflow },
  { name: 'Web Scraping', Icon: ScanSearch },
  { name: 'Claude Code', icon: 'https://cdn.simpleicons.org/claude/D97757' },
]

// Seconds per skill, so both rows scroll at the same speed
const SECONDS_PER_SKILL = 5.5

function SkillRow({ skills, reverse = false }) {
  return (
    <div className="marquee-container">
      <div
        className={reverse ? 'marquee marquee-reverse' : 'marquee'}
        style={{ animationDuration: `${skills.length * SECONDS_PER_SKILL}s` }}
      >
        {[...skills, ...skills, ...skills].map((skill, i) => (
          <span key={i} className="skill-pill">
            <span className="skill-icon">
              {skill.Icon
                ? <skill.Icon size={18} aria-hidden="true" />
                : <img src={skill.icon} alt={skill.name} width={18} height={18} />}
            </span>
            <span className="skill-name">{skill.name}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <div className="skill-rows">
      <SkillRow skills={devSkills} />
      <SkillRow skills={aiSkills} reverse />
    </div>
  )
}
