import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Check, Code, Zap, Gauge, Lock, Rocket, Users, Search, ShieldCheck, Headphones, BarChart } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Premium Agency (Stripe/Apple style)
 * - Light background (#FFFFFF / #F5F5F5)
 * - Primary color: Dodger Blue (#1E90FF)
 * - Modern typography: Inter, Poppins
 * - Subtle animations and micro-interactions
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const services = [
    {
      title: "Site Vitrine",
      description: "Présentez votre entreprise avec élégance et convertissez vos visiteurs en clients.",
      icon: Code,
    },
    {
      title: "Site E-commerce",
      description: "Boutique en ligne performante optimisée pour les ventes et la conversion.",
      icon: Zap,
    },
    {
      title: "Site Sur Mesure",
      description: "Développement personnalisé selon vos besoins spécifiques et votre vision.",
      icon: Rocket,
    },
    {
      title: "Landing Page",
      description: "Pages de conversion haute performance pour vos campagnes marketing.",
      icon: Gauge,
    },
    {
      title: "Refonte de Site",
      description: "Modernisez votre image de marque avec une interface actuelle et performante.",
      icon: Search,
    },
    {
      title: "Maintenance & SEO",
      description: "Optimisation complète pour dominer Google et assurer la pérennité de votre site.",
      icon: BarChart,
    },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "2 990",
      description: "Parfait pour débuter",
      features: [
        "Site vitrine 5 pages",
        "Design responsive",
        "Optimisation SEO basique",
        "Formulaire de contact",
        "1 mois de support",
      ],
      highlighted: false,
    },
    {
      name: "Business",
      price: "5 990",
      description: "Pour les PME en croissance",
      features: [
        "Site jusqu'à 15 pages",
        "Design premium",
        "SEO avancé",
        "Blog intégré",
        "Analytics",
        "3 mois de support",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "12 990",
      description: "Pour les entreprises établies",
      features: [
        "Site illimité",
        "E-commerce complet",
        "CRM intégré",
        "Automatisations",
        "API personnalisées",
        "Support prioritaire",
      ],
      highlighted: false,
    },
    {
      name: "Sur-mesure",
      price: "Sur devis",
      description: "Solutions enterprise",
      features: [
        "Architecture custom",
        "Intégrations complexes",
        "Équipe dédiée",
        "Support 24/7",
        "Scalabilité garantie",
        "Maintenance annuelle",
      ],
      highlighted: false,
    },
  ];

  const whyUs = [
    {
      title: "Expertise",
      description: "Une équipe de seniors passionnés par l'excellence technique.",
      icon: Users,
    },
    {
      title: "Qualité",
      description: "Chaque pixel est pensé pour offrir une expérience utilisateur parfaite.",
      icon: ShieldCheck,
    },
    {
      title: "Performance",
      description: "Des sites ultra-rapides qui surpassent les standards du web.",
      icon: Zap,
    },
    {
      title: "Support",
      description: "Un accompagnement humain et réactif à chaque étape.",
      icon: Headphones,
    },
    {
      title: "SEO",
      description: "Une structure optimisée pour atteindre les sommets des moteurs de recherche.",
      icon: Search,
    },
  ];

  const processSteps = [
    { step: "01", title: "Analyse", description: "Audit complet de vos besoins et objectifs" },
    { step: "02", title: "Design", description: "Prototypes et validation du concept visuel" },
    { step: "03", title: "Développement", description: "Codage optimisé et tests rigoureux" },
    { step: "04", title: "Optimisation", description: "SEO, performance et sécurité" },
    { step: "05", title: "Livraison", description: "Déploiement et formation à l'outil" },
    { step: "06", title: "Suivi", description: "Support et améliorations continues" },
  ];

  const testimonials = [
    {
      name: "Marie Dupont",
      company: "TechStart Paris",
      text: "Leur site a transformé notre présence en ligne. Les ventes ont augmenté de 150% en 3 mois.",
      rating: 5,
    },
    {
      name: "Jean Martin",
      company: "Luxury Boutique",
      text: "Un travail d'exception. L'équipe a compris notre vision et l'a dépassée.",
      rating: 5,
    },
    {
      name: "Sophie Laurent",
      company: "Digital Agency",
      text: "Performance exceptionnelle. Lighthouse 98/100. Nos clients sont impressionnés.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold tracking-tight"
          >
            <span className="text-primary">Lumina</span>
            <span className="text-foreground ml-1">Nexus</span>
          </motion.div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#offres" className="hover:text-primary transition-colors">Offres</a>
            <a href="#processus" className="hover:text-primary transition-colors">Processus</a>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button className="bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all rounded-full px-6">
              Demander un devis
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#F8FAFC]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Agence Web Premium
              </motion.div>
              
              <motion.h1
                variants={itemVariants}
                className="text-6xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight text-slate-900"
              >
                Votre présence web <br />
                <span className="text-primary">exceptionnelle</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-slate-600 max-w-lg leading-relaxed"
              >
                Nous concevons des expériences digitales de haute qualité qui allient design épuré, performance technique et stratégie de conversion.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all rounded-full px-8 h-14 text-base"
                >
                  Demander un devis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full px-8 h-14 text-base"
                >
                  Voir nos projets
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="relative"
            >
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-xs font-medium text-slate-400">lumina-nexus.com</div>
                </div>
                <div className="space-y-6">
                  <div className="h-4 w-2/3 bg-slate-100 rounded-full" />
                  <div className="h-4 w-full bg-slate-100 rounded-full" />
                  <div className="h-4 w-5/6 bg-slate-100 rounded-full" />
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="aspect-square bg-primary/5 rounded-2xl flex items-center justify-center">
                      <Zap className="text-primary w-8 h-8" />
                    </div>
                    <div className="aspect-square bg-primary/5 rounded-2xl flex items-center justify-center">
                      <BarChart className="text-primary w-8 h-8" />
                    </div>
                    <div className="aspect-square bg-primary/5 rounded-2xl flex items-center justify-center">
                      <ShieldCheck className="text-primary w-8 h-8" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">98/100</div>
                  <div className="text-xs text-slate-500 font-medium">Lighthouse Score</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900"
            >
              Nos services d'excellence
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-500"
            >
              Une approche holistique du web pour propulser votre activité vers de nouveaux sommets.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="offres" className="py-32 bg-[#F8FAFC]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Des offres claires et adaptées</h2>
            <p className="text-xl text-slate-500">Choisissez le pack qui correspond à vos ambitions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-3xl bg-white border ${plan.highlighted ? 'border-primary shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-sm'} flex flex-col`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    Recommandé
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-primary">{plan.price}</span>
                    <span className="text-slate-400 text-sm font-medium">€</span>
                  </div>
                  <p className="text-slate-500 text-sm mt-2">{plan.description}</p>
                </div>
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button 
                  className={`w-full rounded-full h-12 ${plan.highlighted ? 'bg-primary text-white hover:bg-primary/90' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}
                >
                  Choisir cette offre
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-900">Pourquoi choisir Lumina Nexus ?</h2>
              <div className="space-y-8">
                {whyUs.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-slate-50 overflow-hidden border border-slate-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-white rounded-2xl shadow-2xl p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="h-2 w-1/2 bg-slate-100 rounded-full" />
                      <div className="h-2 w-full bg-slate-100 rounded-full" />
                      <div className="h-2 w-3/4 bg-slate-100 rounded-full" />
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10" />
                        <div className="w-8 h-8 rounded-full bg-primary/10" />
                      </div>
                      <div className="w-20 h-8 bg-primary rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processus" className="py-32 bg-[#F8FAFC]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Notre processus de création</h2>
            <p className="text-xl text-slate-500">Une méthodologie rigoureuse pour des résultats exceptionnels.</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mx-auto mb-4 shadow-lg shadow-primary/20">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-500">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Ils nous font confiance</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Zap key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100" />
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
              <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-white rounded-full blur-[120px]" />
              <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-white rounded-full blur-[120px]" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8">Prêt à lancer votre projet ?</h2>
              <p className="text-xl text-white/80 mb-12">Discutons de vos objectifs et créons ensemble quelque chose d'exceptionnel.</p>
              <Button size="lg" className="bg-white text-primary hover:bg-slate-50 rounded-full px-10 h-16 text-lg font-bold shadow-xl">
                Demander un devis maintenant
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold mb-6">
                <span className="text-primary">Lumina</span>
                <span className="text-slate-900 ml-1">Nexus</span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed">
                L'agence web premium qui transforme vos idées en expériences digitales mémorables et performantes.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Navigation</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#offres" className="hover:text-primary transition-colors">Offres</a></li>
                <li><a href="#processus" className="hover:text-primary transition-colors">Processus</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Projets</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li>contact@lumina-nexus.com</li>
                <li>Paris, France</li>
                <li>+33 1 23 45 67 89</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>© 2026 Lumina Nexus. Tous droits réservés.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-primary transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
