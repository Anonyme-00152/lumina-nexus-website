import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowRight, Check, Code, Zap, Gauge, Lock, Rocket, Users, 
  Search, ShieldCheck, Headphones, BarChart, Cpu, Globe, Layout 
} from "lucide-react";

/**
 * Design Philosophy: Ultra-Premium Agency (Stripe/Apple style)
 * - Refined Wording for Conversion
 * - Subtle Background Gradients
 * - Tech Stack Section for Authority
 * - Enhanced Micro-interactions
 */

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const services = [
    {
      title: "Expérience Vitrine",
      description: "Au-delà d'un simple site, nous créons une immersion digitale qui captive vos futurs clients dès la première seconde.",
      icon: Globe,
    },
    {
      title: "E-commerce Haute Performance",
      description: "Des boutiques optimisées pour la conversion massive, alliant fluidité de navigation et sécurité de paiement.",
      icon: Zap,
    },
    {
      title: "Solutions Sur Mesure",
      description: "Architectures complexes et applications web métiers conçues pour répondre à vos défis les plus ambitieux.",
      icon: Cpu,
    },
    {
      title: "Landing Pages Haute Conversion",
      description: "Design psychologique et copywriting stratégique pour transformer votre trafic en revenus concrets.",
      icon: Layout,
    },
    {
      title: "Refonte & Modernisation",
      description: "Propulsez votre image de marque dans l'ère moderne avec une interface actuelle, rapide et intuitive.",
      icon: Search,
    },
    {
      title: "SEO & Croissance",
      description: "Dominez les résultats de recherche et assurez une visibilité pérenne grâce à nos stratégies sémantiques avancées.",
      icon: BarChart,
    },
  ];

  const techStack = [
    { name: "React", icon: Code },
    { name: "Next.js", icon: Rocket },
    { name: "Tailwind CSS", icon: Layout },
    { name: "Node.js", icon: Cpu },
    { name: "TypeScript", icon: ShieldCheck },
    { name: "Framer Motion", icon: Zap },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "2 990",
      description: "L'essentiel pour une présence digitale de qualité.",
      features: [
        "Design Unique & Responsive",
        "Optimisation SEO On-page",
        "Performance Lighthouse 90+",
        "Hébergement Sécurisé",
        "Support 30 jours",
      ],
      highlighted: false,
      cta: "Lancer mon projet",
    },
    {
      name: "Business",
      price: "5 990",
      description: "La solution complète pour les entreprises en pleine croissance.",
      features: [
        "Tout le pack Starter",
        "Blog & Stratégie de Contenu",
        "Intégration CRM & Analytics",
        "Maintenance Prioritaire",
        "Accompagnement Stratégique",
      ],
      highlighted: true,
      cta: "Choisir la croissance",
    },
    {
      name: "Premium",
      price: "12 990",
      description: "L'excellence digitale pour les leaders de leur marché.",
      features: [
        "E-commerce ou App Métier",
        "Automatisations Avancées",
        "Design Ultra-Personnalisé",
        "Audit de Conversion Mensuel",
        "Support Dédié 24/7",
      ],
      highlighted: false,
      cta: "Viser l'excellence",
    },
    {
      name: "Sur-mesure",
      price: "Sur devis",
      description: "Projets complexes et architectures spécifiques.",
      features: [
        "Architecture Cloud Scalable",
        "Intégrations API Tierces",
        "Équipe Dédiée",
        "Garantie de Performance",
        "Maintenance Annuelle",
      ],
      highlighted: false,
      cta: "Discuter avec un expert",
    },
  ];

  const whyUs = [
    {
      title: "Expertise Senior",
      description: "Pas de stagiaires. Votre projet est géré par des experts ayant 10+ ans d'expérience.",
      icon: Users,
    },
    {
      title: "Obsession Qualité",
      description: "Nous ne livrons rien qui ne soit pas parfait. Chaque pixel et chaque ligne de code comptent.",
      icon: ShieldCheck,
    },
    {
      title: "Vitesse Absolue",
      description: "Le temps, c'est de l'argent. Nos sites chargent en moins d'une seconde.",
      icon: Zap,
    },
    {
      title: "Transparence Totale",
      description: "Suivi en temps réel de l'avancement et communication fluide via Slack/Discord.",
      icon: Headphones,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-primary/10 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
        <div className="container flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-extrabold tracking-tighter"
          >
            <span className="text-primary">Lumina</span>
            <span className="text-slate-900 ml-1">Nexus</span>
          </motion.div>
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-500">
            <a href="#services" className="hover:text-primary transition-all">Services</a>
            <a href="#offres" className="hover:text-primary transition-all">Offres</a>
            <a href="#expertise" className="hover:text-primary transition-all">Expertise</a>
            <a href="#processus" className="hover:text-primary transition-all">Processus</a>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Button className="bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-full px-8 font-bold">
              Démarrer un projet
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-10"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-primary text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                L'excellence digitale pour votre marque
              </motion.div>
              
              <motion.h1
                variants={itemVariants}
                className="text-6xl lg:text-8xl font-black leading-[1] tracking-tight text-slate-900"
              >
                Votre présence <br />
                <span className="text-primary">exceptionnelle</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-slate-500 max-w-xl leading-relaxed"
              >
                Nous ne créons pas seulement des sites web. Nous bâtissons des vecteurs de croissance premium, alliant design émotionnel et ingénierie de pointe.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-5"
              >
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 shadow-2xl shadow-primary/30 rounded-full px-10 h-16 text-lg font-bold"
                >
                  Lancer mon projet
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-bold text-slate-900">Réponse sous 24h</span>
                  <span className="text-xs text-slate-400">Audit gratuit inclus</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative bg-white p-10 rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-slate-100">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex gap-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-slate-100" />
                    <div className="w-3.5 h-3.5 rounded-full bg-slate-100" />
                    <div className="w-3.5 h-3.5 rounded-full bg-slate-100" />
                  </div>
                  <div className="px-4 py-1 rounded-full bg-slate-50 text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                    Secure Environment
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="h-3 w-1/3 bg-slate-50 rounded-full" />
                  <div className="h-3 w-full bg-slate-50 rounded-full" />
                  <div className="h-3 w-2/3 bg-slate-50 rounded-full" />
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10">
                      <div className="text-3xl font-black text-primary mb-1">98%</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Conversion Rate</div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <div className="text-3xl font-black text-slate-900 mb-1">0.8s</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Load Time</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center shadow-lg shadow-green-200">
                  <Check className="text-white w-8 h-8" />
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Satisfaction Client</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white border-y border-slate-50">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {techStack.map((tech, i) => (
              <div key={i} className="flex items-center gap-3">
                <tech.icon className="w-6 h-6" />
                <span className="font-bold tracking-tighter text-xl">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-black mb-8 tracking-tight"
            >
              Nos services <br />
              <span className="text-primary">d'excellence</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-slate-500 leading-relaxed"
            >
              Nous combinons stratégie, design et technologie pour créer des produits digitaux qui dominent leur marché.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-primary/20 hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <service.icon className="w-8 h-8 text-slate-900 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-black mb-5 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="offres" className="py-32 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl font-black mb-8 tracking-tight">Investissez dans votre <span className="text-primary">succès</span></h2>
            <p className="text-xl text-slate-500">Des offres transparentes conçues pour un retour sur investissement maximal.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-10 rounded-[2.5rem] bg-white border ${plan.highlighted ? 'border-primary shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-sm'} flex flex-col`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-xl shadow-primary/20">
                    Le choix des leaders
                  </div>
                )}
                <div className="mb-10">
                  <h3 className="text-xl font-black text-slate-900 mb-3">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-primary">{plan.price}</span>
                    <span className="text-slate-400 text-sm font-bold">€</span>
                  </div>
                  <p className="text-slate-500 text-xs font-medium mt-4 leading-relaxed">{plan.description}</p>
                </div>
                <div className="space-y-5 mb-10 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-4 text-sm font-medium text-slate-600">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button 
                  className={`w-full rounded-full h-14 font-bold text-base transition-all ${plan.highlighted ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-5xl font-black mb-12 tracking-tight">Pourquoi nous confier votre <span className="text-primary">vision</span> ?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {whyUs.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-5"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] bg-slate-50 overflow-hidden border border-slate-100 flex items-center justify-center p-10">
                <div className="w-full h-full bg-white rounded-[2rem] shadow-2xl p-12 flex flex-col justify-between border border-slate-50">
                  <div className="space-y-6">
                    <div className="h-4 w-1/2 bg-slate-50 rounded-full" />
                    <div className="h-4 w-full bg-slate-50 rounded-full" />
                    <div className="h-4 w-3/4 bg-slate-50 rounded-full" />
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="flex -space-x-4">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full bg-slate-100 border-4 border-white" />
                      ))}
                    </div>
                    <div className="w-32 h-12 bg-primary rounded-2xl shadow-lg shadow-primary/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="bg-slate-900 rounded-[4rem] p-16 lg:p-32 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-5xl lg:text-7xl font-black mb-10 tracking-tight">Prêt à redéfinir vos standards ?</h2>
              <p className="text-xl text-slate-400 mb-16 leading-relaxed">Discutons de vos ambitions et créons ensemble l'outil qui propulsera votre entreprise vers de nouveaux sommets.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-12 h-20 text-xl font-black shadow-2xl shadow-primary/40">
                  Démarrer maintenant
                  <ArrowRight className="ml-3 w-7 h-7" />
                </Button>
                <div className="text-left">
                  <div className="text-lg font-bold">contact@lumina-nexus.com</div>
                  <div className="text-sm text-slate-500">Réponse garantie sous 24h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-white border-t border-slate-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-black mb-8 tracking-tighter">
                <span className="text-primary">Lumina</span>
                <span className="text-slate-900 ml-1">Nexus</span>
              </div>
              <p className="text-slate-500 max-w-md text-lg leading-relaxed">
                L'agence web premium dédiée aux marques qui refusent la médiocrité. Nous bâtissons le futur du web, un pixel à la fois.
              </p>
            </div>
            <div>
              <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-xs">Navigation</h4>
              <ul className="space-y-5 text-slate-500 font-bold text-sm">
                <li><a href="#services" className="hover:text-primary transition-all">Services</a></li>
                <li><a href="#offres" className="hover:text-primary transition-all">Offres</a></li>
                <li><a href="#expertise" className="hover:text-primary transition-all">Expertise</a></li>
                <li><a href="#" className="hover:text-primary transition-all">Projets</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-xs">Contact</h4>
              <ul className="space-y-5 text-slate-500 font-bold text-sm">
                <li>Paris, France</li>
                <li>contact@lumina-nexus.com</li>
                <li>+33 1 23 45 67 89</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <p>© 2026 Lumina Nexus. Tous droits réservés.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-primary transition-all">Mentions Légales</a>
              <a href="#" className="hover:text-primary transition-all">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
