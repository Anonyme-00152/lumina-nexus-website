import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Check, Code, Zap, Gauge, Lock, Rocket, Users } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Minimalisme Futuriste Épuré
 * - Dark background (#0a0a0a) with electric blue (#00d9ff) and neon violet (#b300ff) accents
 * - Asymmetric layouts with generous whitespace
 * - Fluid animations and micro-interactions
 * - Satoshi Bold for titles, Inter for body text
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("starter");

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
      transition: { duration: 0.6 },
    },
  };

  const services = [
    {
      title: "Site Vitrine",
      description: "Présentez votre entreprise avec élégance et convertissez vos visiteurs en clients.",
      icon: Code,
    },
    {
      title: "E-commerce",
      description: "Boutique en ligne performante optimisée pour les ventes et la conversion.",
      icon: Zap,
    },
    {
      title: "Site Professionnel",
      description: "Solutions sur mesure pour les entreprises qui veulent dominer leur marché.",
      icon: Rocket,
    },
    {
      title: "Landing Page",
      description: "Pages de conversion haute performance pour vos campagnes marketing.",
      icon: Gauge,
    },
    {
      title: "Site Sur Mesure",
      description: "Développement personnalisé selon vos besoins spécifiques et votre vision.",
      icon: Code,
    },
    {
      title: "SEO & Performance",
      description: "Optimisation complète pour dominer Google et améliorer votre visibilité.",
      icon: Rocket,
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
        "Contact form",
        "1 mois de support",
      ],
      highlighted: false,
    },
    {
      name: "Business",
      price: "5 990",
      description: "Pour les PME",
      features: [
        "Site jusqu'à 15 pages",
        "Design premium",
        "SEO avancé",
        "Blog intégré",
        "Analytics",
        "3 mois de support",
        "Maintenance incluse",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "12 990",
      description: "Pour les entreprises",
      features: [
        "Site illimité",
        "E-commerce complet",
        "CRM intégré",
        "Automatisations",
        "API personnalisées",
        "Support prioritaire",
        "6 mois de maintenance",
      ],
      highlighted: false,
    },
    {
      name: "Sur-mesure",
      price: "À partir de 25 000",
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
      title: "Expertise Reconnue",
      description: "15+ ans d'expérience en développement web et design digital.",
      icon: Users,
    },
    {
      title: "Qualité Premium",
      description: "Chaque projet est traité comme une masterpiece, pas un produit standard.",
      icon: Zap,
    },
    {
      title: "Sécurité Maximale",
      description: "Certifications SSL, RGPD compliant, backups automatiques et protection DDoS.",
      icon: Lock,
    },
    {
      title: "Performance",
      description: "Lighthouse 90+, temps de chargement < 2s, optimisation Core Web Vitals.",
      icon: Gauge,
    },
    {
      title: "SEO Domination",
      description: "Stratégie EEAT, structure sémantique parfaite, top 10 Google garanti.",
      icon: Rocket,
    },
    {
      title: "Support Réactif",
      description: "Équipe disponible pour vos questions, mises à jour et améliorations.",
      icon: Code,
    },
  ];

  const processSteps = [
    { step: "01", title: "Analyse", description: "Audit complet de vos besoins et objectifs" },
    { step: "02", title: "Design", description: "Prototypes et validation du concept" },
    { step: "03", title: "Développement", description: "Codage optimisé et tests rigoureux" },
    { step: "04", title: "Optimisation", description: "SEO, performance et sécurité" },
    { step: "05", title: "Livraison", description: "Déploiement et formation" },
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
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            <span className="text-primary">Agence</span>
            <span className="text-accent ml-2">Web</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all">
              Demander un devis
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                Votre présence web
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  extraordinaire
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-muted-foreground max-w-lg"
              >
                Nous créons des sites web qui ne se contentent pas d'exister. Ils convertissent, ils inspirent, ils dominent Google.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex gap-4"
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  Audit gratuit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Voir nos projets
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-96 lg:h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-4">98/100</div>
                  <p className="text-muted-foreground">Lighthouse Score</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Tous les types de sites web
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              De la vitrine élégante au e-commerce performant, nous maîtrisons tous les domaines.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group p-8 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all cursor-pointer"
                >
                  <Icon className="w-12 h-12 text-primary mb-4 group-hover:text-accent transition-colors" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 border-t border-border relative">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "url('/images/pricing-accent.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Formules transparentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Choisissez le plan qui correspond à votre ambition
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pricing.map((plan, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`p-8 rounded-lg border transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-primary/20 to-accent/20 border-primary/50 ring-2 ring-primary/30"
                    : "bg-card/50 border-border hover:border-primary/50"
                }`}
              >
                {plan.highlighted && (
                  <div className="mb-4 inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                    Recommandé
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}€</span>
                  {!plan.price.includes("À partir") && <span className="text-muted-foreground ml-2">/projet</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-accent"
                      : "bg-accent text-accent-foreground hover:bg-primary"
                  }`}
                >
                  Commencer
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Pourquoi nous choisir
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Nous ne sommes pas juste des développeurs. Nous sommes des experts en conversion, SEO et design premium.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 border-t border-border relative">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url('/images/process-visual.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Notre processus éprouvé
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              6 étapes pour transformer votre vision en réalité digitale exceptionnelle.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {processSteps.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                      <span className="text-2xl font-bold text-primary">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Nos clients nous adorent
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Découvrez ce que disent les entreprises qui nous ont fait confiance.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-8 rounded-lg border border-border bg-card/50 hover:bg-card transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-primary text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border relative">
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: "url('/images/testimonials-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl lg:text-6xl font-bold">
              Prêt à transformer votre présence web ?
            </h2>
            <p className="text-xl text-muted-foreground">
              Commencez par un audit gratuit. Découvrez le potentiel inexploité de votre site.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all px-8 py-6 text-lg"
              >
                Demander un audit gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">
                <span className="text-primary">Agence</span>
                <span className="text-accent ml-2">Web</span>
              </h3>
              <p className="text-muted-foreground text-sm">
                Solutions web premium pour les entreprises ambitieuses.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Site Vitrine</a></li>
                <li><a href="#" className="hover:text-primary transition">E-commerce</a></li>
                <li><a href="#" className="hover:text-primary transition">SEO</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">À propos</a></li>
                <li><a href="#" className="hover:text-primary transition">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Légal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Mentions légales</a></li>
                <li><a href="#" className="hover:text-primary transition">Confidentialité</a></li>
                <li><a href="#" className="hover:text-primary transition">CGU</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Agence Web Premium. Tous droits réservés.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition">Twitter</a>
              <a href="#" className="hover:text-primary transition">LinkedIn</a>
              <a href="#" className="hover:text-primary transition">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
