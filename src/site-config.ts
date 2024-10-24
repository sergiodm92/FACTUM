import { Github, Linkedin, Mail } from 'lucide-react'

export const siteConfig = {
  name: "FACTUM",
  role: "Consultora",
  description: "Specialized in creating innovative and scalable web solutions.",
  location: "Ciudad Autónoma de Buenos Aires, Argentina",
  email: "comercial@factumconsultora.com",
  phone: "(+54)11 4165 2500",
  linkedin: "https://www.linkedin.com/company/factum-consultora/posts/?feedView=all",
  linkedinName: "Factum Consultora",
  socialLinks: [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: Mail, href: "mailto:crgiodm@gmail.com", label: "Email" },
  ],
  skills: [
    { title: 'Frontend', skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
    { title: 'Backend', skills: ['Node.js', 'Express', 'Python', 'Django'] },
    { title: 'Databases', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'] },
    { title: 'Other Technologies', skills: ['Git', 'Docker', 'AWS', 'CI/CD'] },
    { title: 'Artificial Intelligence', skills: ['Machine Learning', 'TensorFlow', 'PyTorch', 'NLP'] },
    { title: 'Cloud Computing', skills: ['AWS', 'Azure', 'Google Cloud', 'Serverless'] },
  ],
}