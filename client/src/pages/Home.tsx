import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, Check, Code, Zap, Gauge, Lock, Rocket, Users, 
  Search, ShieldCheck, Headphones, BarChart, Cpu, Globe, Layout,
  Lightbulb, Target, Award, Gem, Star, Handshake, TrendingUp
} from "lucide-react";
import { useRef, useState } from "react";

/**
 * Design Philosophy: Ultra-Premium Agency (Stripe/Apple/Linear style)
 * Refonte Premium : Service & Entreprise au Centre
 * - Animations d'entrée (scroll-based, reveal, stagger)
 * - Micro-interactions (hover, clic, transitions)
 * - Animations de texte modernes (split text, fade, slide, blur)
 * - Transitions fluides entre sections
 * - Effets premium (parallax léger, depth, easing naturel)
 * - Structure et layout ultra optimisés (Bento Grid, sections immersives)
 * - Identité visuelle et branding haut de gamme
 * - Optimisation mobile
 */

// Custom Animated Text Component
const AnimatedText = ({ text, el: Wrapper = "p", className, variants, stagger = 0.05 }) => {
  const words = text.split(" ");
  return (
    <Wrapper className={className}>
      <motion.span variants={variants} initial="hidden" animate="visible" className="inline-block">
        {words.map((word, i) => (
          <motion.span key={i} variants={{ hidden: { opacity: 0, y: 20, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { delay: i * stagger, duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="inline-block mr-2">
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

// Magnetic Button Component
const MagneticButton = ({ children, className, ...props }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.15, y: y * 0.15 }); // Adjust sensitivity
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
};

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
      title: "Sites Vitrine d'Exception",
      description: "Nous créons une immersion digitale captivante qui sublime votre image de marque et transforme vos visiteurs en prospects qualifiés.",
      icon: Globe,
      target: "Entreprises cherchant une présence élégante et professionnelle",
      benefits: "Renforcez votre crédibilité et augmentez votre visibilité en ligne"
    },
    {
      title: "E-commerce Haute Performance",
      description: "Des boutiques optimisées pour la conversion maximale, alliant fluidité de navigation, sécurité de paiement et stratégie de croissance.",
      icon: Zap,
      target: "Entrepreneurs et PME en croissance",
      benefits: "Augmentez vos ventes et optimisez votre taux de conversion"
    },
    {
      title: "Solutions Sur Mesure",
      description: "Architectures complexes et applications web métiers conçues pour répondre à vos défis les plus ambitieux avec une scalabilité garantie.",
      icon: Cpu,
      target: "Startups et entreprises avec besoins spécifiques",
      benefits: "Disposez d'une plateforme robuste, évolutive et parfaitement alignée"
    },
    {
      title: "Landing Pages Haute Conversion",
      description: "Design psychologique et copywriting stratégique pour transformer votre trafic en revenus concrets et mesurables.",
      icon: Layout,
      target: "Campagnes marketing et acquisition de leads",
      benefits: "Maximisez votre ROI et générez des conversions qualifiées"
    },
    {
      title: "Refonte & Modernisation",
      description: "Propulsez votre image de marque dans l'ère moderne avec une interface actuelle, rapide, intuitive et optimisée pour la croissance.",
      icon: Search,
      target: "Entreprises avec site vieillissant",
      benefits: "Regagnez en compétitivité et en performance digitale"
    },
    {
      title: "SEO & Croissance Digitale",
      description: "Dominez les résultats de recherche et assurez une visibilité pérenne grâce à nos stratégies sémantiques et techniques avancées.",
      icon: BarChart,
      target: "Entreprises souhaitant augmenter leur trafic organique",
      benefits: "Générez du trafic qualifié et durable sans dépendre de la publicité"
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
      description: "L'essentiel pour une présence digitale de qualité professionnelle.",
      features: [
        "Design Unique & Responsive",
        "Optimisation SEO On-page",
        "Performance Lighthouse 90+",
        "Hébergement Sécurisé",
        "Support 30 jours",
      ],
      highlighted: false,
      cta: "Découvrir cette offre",
    },
    {
      name: "Business",
      price: "5 990",
      description: "La solution complète pour les entreprises en pleine croissance et transformation digitale.",
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
      description: "L'excellence digitale pour les leaders de leur marché et les startups ambitieuses.",
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
      description: "Projets complexes, architectures spécifiques et besoins d'intégration avancée.",
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
      description: "Pas de stagiaires. Votre projet est géré par des experts ayant 10+ ans d'expérience dans le web et la croissance digitale.",
      icon: Award,
    },
    {
      title: "Obsession Qualité",
      description: "Nous ne livrons rien qui ne soit pas parfait. Chaque pixel et chaque ligne de code sont optimisés pour la performance et l'esthétique.",
      icon: ShieldCheck,
    },
    {
      title: "Vitesse & Performance",
      description: "Nos sites chargent en moins d'une seconde avec des scores Lighthouse de 90+. La vitesse génère des conversions.",
      icon: Zap,
    },
    {
      title: "Transparence Totale",
      description: "Suivi en temps réel de l'avancement et communication fluide via Slack/Discord. Vous savez toujours où en est votre projet.",
      icon: Headphones,
    },
  ];

  const methodSteps = [
    {
      number: "01",
      title: "Audit Stratégique",
      description: "Nous analysons vos besoins, votre marché et vos objectifs pour définir une stratégie digitale claire et mesurable.",
      icon: Target,
    },
    {
      number: "02",
      title: "Conception UX/UI",
      description: "Création d'interfaces intuitives et de parcours utilisateurs optimisés pour maximiser l'engagement et la conversion.",
      icon: Layout,
    },
    {
      number: "03",
      title: "Développement Agile",
      description: "Implémentation technique robuste avec les technologies de pointe, livrée dans les délais et avec une qualité irréprochable.",
      icon: Code,
    },
    {
      number: "04",
      title: "Optimisation Continue",
      description: "Suivi des performances, ajustements SEO et améliorations post-lancement pour une croissance digitale constante.",
      icon: BarChart,
    },
  ];

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-primary/10 selection:text-primary overflow-x-hidden">
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
            <a href="#about" className="hover:text-primary transition-all">À Propos</a>
            <a href="#services" className="hover:text-primary transition-all">Services</a>
            <a href="#methode" className="hover:text-primary transition-all">Méthode</a>
            <a href="#offres" className="hover:text-primary transition-all">Offres</a>
          </div>
          <MagneticButton className="bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-full px-8 font-bold">
            Audit Gratuit
          </MagneticButton>
        </div>
      </nav>

      {/* Hero Section - Ultra Premium */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0" ref={scrollRef}>
          <motion.div style={{ y }} className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
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
                Votre partenaire en excellence digitale
              </motion.div>
              
              <AnimatedText
                el="h1"
                text="Propulsez votre entreprise : Des écosystèmes digitaux conçus pour la croissance."
                className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900"
              />

              <AnimatedText
                el="p"
                text="Lumina Nexus transforme votre vision en une réalité digitale performante. Nous créons des sites web, applications et plateformes sur mesure qui captivent vos clients et génèrent des résultats concrets pour les PME et startups exigeantes."
                className="text-xl text-slate-500 max-w-xl leading-relaxed"
                stagger={0.02}
              />

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-5"
              >
                <MagneticButton
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 shadow-2xl shadow-primary/30 rounded-full px-10 h-16 text-lg font-bold"
                >
                  Obtenez votre audit gratuit
                  <ArrowRight className="ml-2 w-6 h-6" />
                </MagneticButton>
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-bold text-slate-900">Réponse sous 24h</span>
                  <span className="text-xs text-slate-400">Diagnostic complet inclus</span>
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
                    Performance Optimale
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="h-3 w-1/3 bg-slate-50 rounded-full" />
                  <div className="h-3 w-full bg-slate-50 rounded-full" />
                  <div className="h-3 w-2/3 bg-slate-50 rounded-full" />
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <div className="text-3xl font-black text-slate-900 mb-1">+45%</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Conversion Moyenne</div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <div className="text-3xl font-black text-slate-900 mb-1">0.8s</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Temps de Chargement</div>
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
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3"
              >
                <tech.icon className="w-6 h-6" />
                <span className="font-bold tracking-tighter text-xl">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Nouvelle Section */}
      <section id="about" className="py-32 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <AnimatedText
                  el="h2"
                  text="L'expertise humaine derrière votre succès digital."
                  className="text-5xl lg:text-6xl font-black mb-8 tracking-tight"
                  stagger={0.03}
                />
                <AnimatedText
                  el="p"
                  text="Chez Lumina Nexus, nous sommes une équipe d'experts passionnés par la création de solutions web qui propulsent la croissance de votre entreprise. Nous croyons que la technologie doit servir une vision claire et générer des résultats concrets."
                  className="text-xl text-slate-500 leading-relaxed"
                  stagger={0.01}
                />
              </div>

              <div className="space-y-8">
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">Notre Mission</h3>
                  <p className="text-slate-500 leading-relaxed">
                    Démocratiser l'excellence technique et le design émotionnel pour les entreprises qui aspirent à une présence digitale impactante et durable.
                  </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">Notre Vision</h3>
                  <p className="text-slate-500 leading-relaxed">
                    Devenir le partenaire de croissance digital de référence pour les PME et startups, reconnu pour notre approche personnalisée et notre capacité à générer un retour sur investissement mesurable.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { label: "Années d'Expérience", value: "10+", icon: Star },
                { label: "Projets Réussis", value: "150+", icon: TrendingUp },
                { label: "Clients Satisfaits", value: "100%", icon: Handshake },
                { label: "Score Lighthouse", value: "90+", icon: Gauge },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-start"
                >
                  <stat.icon className="w-8 h-8 text-primary mb-4" />
                  <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Reformulé et Animé (Bento Grid Style) */}
      <section id="services" className="py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-24">
            <AnimatedText
              el="h2"
              text="Nos Solutions : Votre succès, notre expertise."
              className="text-5xl lg:text-6xl font-black mb-8 tracking-tight"
              stagger={0.03}
            />
            <AnimatedText
              el="p"
              text="Chaque entreprise est unique. Lumina Nexus propose une gamme de solutions sur mesure, conçues pour répondre précisément à vos besoins et vous garantir un avantage concurrentiel durable."
              className="text-xl text-slate-500 leading-relaxed"
              stagger={0.01}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-primary/20 hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col cursor-pointer"
                whileHover={{ y: -5, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 10 } }}
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <service.icon className="w-8 h-8 text-slate-900 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-black mb-3 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm mb-6 flex-grow">{service.description}</p>
                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">À qui s'adresse</span>
                    <p className="text-sm text-slate-600 mt-1">{service.target}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Bénéfices</span>
                    <p className="text-sm text-slate-600 mt-1">{service.benefits}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Method Section - Nouvelle Section Interactive */}
      <section id="methode" className="py-32 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <AnimatedText
              el="h2"
              text="Notre Approche : La Nexus Strategy pour des résultats concrets."
              className="text-5xl lg:text-6xl font-black mb-8 tracking-tight"
              stagger={0.03}
            />
            <AnimatedText
              el="p"
              text="Une méthode éprouvée en 4 étapes pour transformer votre vision en réalité digitale performante et durable."
              className="text-xl text-slate-500 leading-relaxed"
              stagger={0.01}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-lg transition-all flex flex-col items-start"
              >
                <div className="text-6xl font-black text-primary/10 mb-4">{step.number}</div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 absolute top-8 right-8">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section - Reformulé */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <AnimatedText
                el="h2"
                text="Pourquoi nous confier votre vision ?"
                className="text-5xl font-black mb-12 tracking-tight"
                stagger={0.03}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {whyUs.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="offres" className="py-32 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <AnimatedText
              el="h2"
              text="Investissez dans votre succès digital."
              className="text-5xl font-black mb-8 tracking-tight"
              stagger={0.03}
            />
            <AnimatedText
              el="p"
              text="Des offres transparentes conçues pour un retour sur investissement maximal, adaptées à tous les stades de croissance."
              className="text-xl text-slate-500 leading-relaxed"
              stagger={0.01}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative p-10 rounded-[2.5rem] bg-white border ${plan.highlighted ? 'border-primary shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-sm'} flex flex-col`}
                whileHover={{ y: -5, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 10 } }}
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
                <MagneticButton 
                  className={`w-full rounded-full h-14 font-bold text-base transition-all ${plan.highlighted ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}
                >
                  {plan.cta}
                </MagneticButton>
              </motion.div>
            ))}
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
              <AnimatedText
                el="h2"
                text="Prêt à redéfinir vos standards ? Discutons de votre projet."
                className="text-5xl lg:text-7xl font-black mb-10 tracking-tight"
                stagger={0.03}
              />
              <AnimatedText
                el="p"
                text="Partagez vos ambitions et découvrez comment Lumina Nexus peut propulser votre entreprise vers de nouveaux sommets digitaux."
                className="text-xl text-slate-400 mb-16 leading-relaxed"
                stagger={0.01}
              />
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <MagneticButton size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-12 h-20 text-xl font-black shadow-2xl shadow-primary/40">
                  Demander un audit gratuit
                  <ArrowRight className="ml-3 w-7 h-7" />
                </MagneticButton>
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
                Votre partenaire en solutions web haute performance. Nous transformons votre vision en levier de croissance concret pour votre entreprise.
              </p>
            </div>
            <div>
              <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-xs">Navigation</h4>
              <ul className="space-y-5 text-slate-500 font-bold text-sm">
                <li><a href="#about" className="hover:text-primary transition-all">À Propos</a></li>
                <li><a href="#services" className="hover:text-primary transition-all">Services</a></li>
                <li><a href="#methode" className="hover:text-primary transition-all">Méthode</a></li>
                <li><a href="#offres" className="hover:text-primary transition-all">Offres</a></li>
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
