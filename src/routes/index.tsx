import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useT } from "@/lib/i18n";
import {
  IconWifi, IconChip, IconRobot, IconWeb,
  IconMedal, IconTrophy, IconArrow,
  IconGear, IconPeople, IconCap, IconDot,
  IconDoc,
} from "@/components/Icon";
import iconCad from "@/assets/icons/cad.png";
import iconPrint from "@/assets/icons/print.png";
import iconCode from "@/assets/icons/code.png";
import iconPlc from "@/assets/icons/plc.png";
import iconPcb from "@/assets/icons/pcb.png";
import iconAi from "@/assets/icons/ai.png";
import iconAir from "@/assets/icons/air.png";
import methodChat from "@/assets/icons/method-chat.png";
import methodDoc from "@/assets/icons/method-doc.png";
import methodAlert from "@/assets/icons/method-alert.png";
import methodLoop from "@/assets/icons/method-loop.png";
import methodShare from "@/assets/icons/method-share.png";
import lukaImg from "@/assets/luka.png";
import borovniceImg from "@/assets/borovnice_stroj.jpg";
import hvataljkaImg from "@/assets/hvataljka.png";
import rcImg from "@/assets/rc_auto.png";
import medaljeImg from "@/assets/medalje_inova.jpg";
import jaMedaljaImg from "@/assets/ja_medalja_inova.jpg";
import profilnaImg from "@/assets/profilna_nova.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luka Kovačić — Mehatronika i Robotika" },
      { name: "description", content: "Portfolio Luke Kovačića — student mehatronike i robotike. Automatizacija, PLC, robotika i razvoj inovativnih strojeva." },
      { property: "og:title", content: "Luka Kovačić — Mehatronika i Robotika" },
      { property: "og:description", content: "Portfolio inženjerskih projekata, automatizacije i robotike." },
    ],
  }),
  component: Index,
});

const methods = [
  { src: methodShare, key: "method.integration" as const },
  { src: methodChat, key: "method.communication" as const },
  { src: methodDoc, key: "method.docs" as const },
  { src: methodAlert, key: "method.problems" as const },
  { src: methodLoop, key: "method.iterate" as const },
];

const awards = [
  { Icon: IconMedal, key: "award.inova" as const, subKey: "award.inova.sub" as const },
  { Icon: IconMedal, key: "award.arca" as const, subKey: "award.arca.sub" as const },
  { Icon: IconMedal, key: "award.kide" as const, subKey: "award.kide.sub" as const },
  { Icon: IconTrophy, key: "award.klima" as const, subKey: "award.klima.sub" as const },
  { Icon: IconMedal, key: "award.ipitex" as const, subKey: "award.ipitex.sub" as const },
];

function Tag({ Icon, children }: { Icon?: React.ComponentType<{ width?: number; height?: number }>; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/5 px-2.5 py-1 text-[12px] font-medium text-primary font-display">
      {Icon ? <Icon width={14} height={14} /> : null}
      {children}
    </span>
  );
}

const tagIcon: Record<string, React.ComponentType<{ width?: number; height?: number }>> = {
  FSB: IconCap,
  TSRB: IconCap,
  TRSB: IconCap,
  "Nagrađeno": IconTrophy,
  "Završni rad": IconDoc,
  "Partneri": IconDot,
};

function SectionHeader({ Icon, label }: { Icon: React.ComponentType<{ width?: number; height?: number }>; label: string }) {
  return (
    <div>
      <div className="flex items-center gap-3 text-primary">
        <Icon width={22} height={22} />
        <span className="text-sm font-semibold tracking-[0.18em]">{label}</span>
      </div>
      <span className="block mt-2 h-px w-16 bg-primary" />
    </div>
  );
}

type IconLike =
  | { Icon: React.ComponentType<{ width?: number; height?: number }>; src?: never }
  | { src: string; Icon?: never };

function CardIcon({ Icon, src, size = 32 }: IconLike & { size?: number }) {
  if (src) return <img src={src} alt="" width={size} height={size} className="object-contain" style={{ width: size, height: size }} />;
  return Icon ? <Icon width={size} height={size} /> : null;
}

function SkillCard({
  Icon, src, title, sub, className = "",
}: {
  Icon?: React.ComponentType<{ width?: number; height?: number }>;
  src?: string;
  title: string;
  sub: string;
  className?: string;
}) {
  return (
    <div
      className={`group rounded-lg border border-border/70 bg-card px-3 py-2.5 flex gap-2.5 items-center hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-sm transition-all ${className}`}
    >
      <div className="shrink-0 text-primary">
        {src ? (
          <img src={src} alt="" width={32} height={32} className="object-contain" style={{ width: 32, height: 32 }} />
        ) : Icon ? (
          <Icon width={28} height={28} />
        ) : null}
      </div>
      <div className="min-w-0">
        <div className="text-[13px] font-semibold text-foreground leading-tight">{title}</div>
        <div className="text-[12px] text-muted-foreground mt-1 leading-snug">{sub}</div>
      </div>
    </div>
  );
}

function Index() {
  const { t } = useT();
  const tagKey: Record<string, "tag.fsb" | "tag.tsrb" | "tag.awarded" | "tag.thesis" | "tag.partners"> = {
    FSB: "tag.fsb",
    TSRB: "tag.tsrb",
    "Nagrađeno": "tag.awarded",
    "Završni rad": "tag.thesis",
    "Partneri": "tag.partners",
  };
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative bg-[var(--cream)] overflow-hidden md:h-[calc(100vh-4rem)] h-[calc(100vh-4rem)] min-h-[560px]">
          <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-end h-full">
            <div className="md:col-span-7 fade-up pt-6 md:pt-[18vh] self-start">
              <div className="inline-block">
                <p className="font-display tracking-[0.22em] text-foreground mb-3 md:mb-4 text-[clamp(0.7rem,1vw,1rem)] text-left">
                  {t("hero.greeting")}
                </p>
                <h1 className="font-display text-primary leading-[0.95] whitespace-nowrap font-normal tracking-tight text-[clamp(2.4rem,7vw,6.5rem)]">
                  Luka Kovačić
                </h1>
                <p className="font-display tracking-[0.22em] text-foreground mt-3 md:mt-6 text-[clamp(0.7rem,1vw,1rem)] text-right">
                  {t("hero.role")}
                </p>
                <div className="flex flex-col items-end mt-4 md:mt-8">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href="/zivotopis.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="font-display text-xs md:text-sm tracking-[0.25em] text-foreground hover:text-primary transition-colors"
                    >
                      {t("hero.cv")}
                    </a>
                    <span className="block h-px w-full bg-foreground/50" />
                    <a
                      href="/portfolio.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="font-display text-xs md:text-sm tracking-[0.25em] text-foreground hover:text-primary transition-colors"
                    >
                      {t("hero.portfolio")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 h-full flex items-end justify-center md:justify-end min-h-0">
              <img
                src={lukaImg}
                alt="Luka Kovačić"
                className="h-full max-h-[58vh] md:max-h-none md:h-[92%] w-auto object-contain object-bottom"
              />
            </div>
          </div>
        </section>

        {/* O MENI */}
        <section id="o-meni" className="pt-16 md:pt-20 pb-4 py-[20px]">
          <div className="container-x">
            <div className="grid md:grid-cols-12 gap-10 mb-16">
              <div className="md:col-span-4">
                <h2 className="font-serif text-primary text-5xl md:text-7xl">{t("about.title")}</h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  {t("about.intro")}
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
              {/* Tehničke vještine */}
              <div className="flex flex-col h-full">
                <SectionHeader Icon={IconGear} label={t("about.tech")} />
                <div className="grid grid-cols-1 md:grid-cols-6 gap-3 mt-6 flex-1 auto-rows-fr">
                  <SkillCard className="col-span-1 md:col-span-3" src={iconCad} title={t("skill.cad.title")} sub={t("skill.cad.sub")} />
                  <SkillCard className="col-span-1 md:col-span-3" src={iconPrint} title={t("skill.print.title")} sub={t("skill.print.sub")} />

                  <SkillCard className="col-span-1 md:col-span-2" Icon={IconWifi} title={t("skill.comm.title")} sub={t("skill.comm.sub")} />
                  <SkillCard className="col-span-1 md:col-span-4 py-4 md:py-2.5" src={iconCode} title={t("skill.code.title")} sub={t("skill.code.sub")} />

                  <SkillCard className="col-span-1 md:col-span-3" src={iconPlc} title={t("skill.plc.title")} sub={t("skill.plc.sub")} />
                  <SkillCard className="col-span-1 md:col-span-3" src={iconPcb} title={t("skill.pcb.title")} sub={t("skill.pcb.sub")} />

                  <SkillCard className="col-span-1 md:col-span-6 py-5 md:py-2.5" Icon={IconRobot} title={t("skill.robot.title")} sub={t("skill.robot.sub")} />

                  <SkillCard className="col-span-1 md:col-span-2" src={iconAi} title={t("skill.ai.title")} sub={t("skill.ai.sub")} />
                  <SkillCard className="col-span-1 md:col-span-2" src={iconAir} title={t("skill.air.title")} sub={t("skill.air.sub")} />
                  <SkillCard className="col-span-1 md:col-span-2" Icon={IconWeb} title={t("skill.web.title")} sub={t("skill.web.sub")} />
                </div>
              </div>

              {/* Način rada */}
              <div className="flex flex-col h-full lg:border-l lg:border-border/60 lg:pl-10">
                <SectionHeader Icon={IconPeople} label={t("about.method")} />
                <div className="grid gap-3 mt-6 flex-1 auto-rows-fr">
                  {methods.map(({ src, key }) => (
                    <div
                      key={key}
                      className="group rounded-lg border border-border/70 bg-card px-3 py-2.5 flex gap-2.5 items-center hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-sm transition-all"
                    >
                      <div className="shrink-0 text-primary">
                        <img src={src} alt="" width={32} height={32} className="object-contain" style={{ width: 32, height: 32 }} />
                      </div>
                      <div className="text-[14px] text-foreground">{t(key)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Link
                to="/o-meni"
                className="inline-flex items-center gap-3 rounded-full border border-primary/50 px-7 py-3 text-xs tracking-[0.25em] text-primary hover:bg-primary/5 transition-colors"
              >
                {t("about.more")} <IconArrow width={14} height={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* PROJEKTI */}
        <section id="projekti" className="pt-8 md:pt-10 pb-14 md:pb-20 py-[20px]">
          <div className="container-x">
            <div className="mb-8">
              <h2 className="font-serif text-primary text-5xl md:text-6xl">{t("projects.title")}</h2>
              <p className="font-display text-muted-foreground mt-2 text-sm">{t("projects.subtitle")}</p>
            </div>

            {/* Featured */}
            <article className="rounded-lg border border-border/60 bg-card overflow-hidden grid md:grid-cols-2 hover:shadow-md transition-shadow">
              <div className="bg-card flex items-center justify-center p-4 md:p-6">
                <img src={borovniceImg} alt={t("project.borovnice.title")} className="max-h-[320px] md:max-h-[560px] w-full object-contain" />
              </div>
              <div className="p-5 md:p-10 flex flex-col font-display min-w-0">
                <div className="text-xs text-primary mb-2">2025</div>
                <h3 className="font-display text-base md:text-lg font-medium text-foreground leading-snug tracking-[0.08em] md:tracking-[0.12em] break-words">
                  {t("project.borovnice.title")}
                </h3>
                <span className="block mt-2 h-0.5 w-12 bg-primary" />
                <p className="text-sm text-foreground/75 mt-4 leading-relaxed text-justify">
                  {t("project.borovnice.desc")}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["FSB", "Nagrađeno", "Završni rad", "Partneri"].map((label) => (
                    <Tag key={label} Icon={tagIcon[label]}>{t(tagKey[label])}</Tag>
                  ))}
                </div>
                <div className="mt-auto pt-8 flex justify-end">
                  <Link to="/projekti/$slug" params={{ slug: "stroj-za-pakiranje-borovnica" }} className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground font-display hover:scale-[1.02] hover:shadow-md transition-all">
                    {t("projects.view")} <IconArrow width={14} height={14} />
                  </Link>
                </div>
              </div>
            </article>

            {/* Two secondary */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  slug: "robotska-hvataljka",
                  img: hvataljkaImg, year: "2025",
                  titleKey: "project.hvataljka.title" as const,
                  descKey: "project.hvataljka.desc" as const,
                  tags: ["FSB", "Nagrađeno"],
                },
                {
                  slug: "rc-automobil",
                  img: rcImg, year: "2022",
                  titleKey: "project.rc.title" as const,
                  descKey: "project.rc.desc" as const,
                  tags: ["TSRB", "Završni rad"],
                },
              ].map((p) => (
                <article key={p.slug} className="rounded-lg border border-border/60 bg-card overflow-hidden flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all font-display">
                  <div className="bg-card p-4 md:p-6 flex items-center justify-center h-56 md:h-80">
                    <img src={p.img} alt={t(p.titleKey)} className="max-h-full w-auto object-contain" />
                  </div>
                  <div className="p-5 md:p-7 flex flex-col flex-1 min-w-0">
                    <div className="text-xs text-primary mb-2">{p.year}</div>
                    <h3 className="font-display text-base font-medium text-foreground leading-snug tracking-[0.08em] md:tracking-[0.12em] break-words">{t(p.titleKey)}</h3>
                    <span className="block mt-2 h-0.5 w-12 bg-primary" />
                    <p className="text-sm text-foreground/75 mt-3 leading-relaxed text-justify">{t(p.descKey)}</p>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {p.tags.map((label) => <Tag key={label} Icon={tagIcon[label]}>{t(tagKey[label])}</Tag>)}
                    </div>
                    <div className="mt-auto pt-6 flex justify-end">
                      <Link to="/projekti/$slug" params={{ slug: p.slug }} className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground font-display hover:scale-[1.02] hover:shadow-md transition-all">
                        {t("projects.view")} <IconArrow width={14} height={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6">
              <Link to="/projekti" className="font-display flex items-center justify-center gap-3 md:gap-6 rounded-lg border border-primary/40 px-4 md:px-7 py-3 md:py-4 text-[11px] md:text-sm tracking-[0.18em] md:tracking-[0.25em] text-primary hover:bg-primary/5 transition-colors text-center">
                {t("projects.more")} <IconArrow width={16} height={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* NAGRADE */}
        <NagradeSection />

        {/* KONTAKT */}
        <section id="kontakt" className="py-14 md:py-[20px]">
          <div className="container-x grid md:grid-cols-2 gap-12 items-center">
            <div className="min-w-0">
              <h2 className="font-serif text-primary leading-[0.95] text-[clamp(2.5rem,8vw,7rem)] break-words">
                {t("contact.title.l1")}<br/>{t("contact.title.l2")}
              </h2>
              <div className="mt-8 md:mt-12 space-y-5">
                {[
                  { label: t("contact.address"), value: t("contact.address.value") },
                  { label: t("contact.phone"), value: "+385 99 2038 628" },
                  { label: t("contact.email"), value: "luka.kovacic67@gmail.com", href: "mailto:luka.kovacic67@gmail.com" },
                  { label: t("contact.linkedin"), value: "www.linkedin.com/in/kovacicluka", href: "https://www.linkedin.com/in/kovacicluka" },
                ].map((row) => (
                  <div key={row.label} className="border-b border-border/60 pb-4 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-1 md:gap-4 md:items-baseline min-w-0">
                    <div className="text-[11px] tracking-[0.22em] text-foreground/70">{row.label}</div>
                    {row.href ? (
                      <a href={row.href} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors break-all md:break-normal text-sm md:text-base">
                        {row.value}
                      </a>
                    ) : (
                      <div className="text-foreground break-words text-sm md:text-base">{row.value}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block rounded-2xl overflow-hidden border border-border/60">
              <img src={profilnaImg} alt="Luka Kovačić" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function NagradeSection() {
  const { t } = useT();
  const slides = [medaljeImg, jaMedaljaImg];
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section id="nagrade" className="py-14 md:py-[20px]">
      <div className="container-x grid md:grid-cols-2 gap-10 items-stretch">
        <div className="flex flex-col h-full">
          <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-secondary/40 flex-1 min-h-[400px]">
            {slides.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt="Nagrada"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                style={{ opacity: i === idx ? 1 : 0 }}
              />
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slika ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-primary" : "w-2 bg-border"}`}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-serif text-primary text-5xl md:text-6xl">{t("awards.title")}</h2>
          <p className="text-muted-foreground mt-3 max-w-md">
            {t("awards.subtitle")}
          </p>
          <div className="mt-8 grid gap-3">
            {awards.map(({ Icon, key, subKey }) => (
              <div
                key={key}
                className="rounded-xl border border-border/70 bg-card p-4 flex items-center gap-4 hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-sm transition-all"
              >
                <div className="shrink-0 h-10 w-10 rounded-full border border-primary/30 bg-primary/5 text-primary flex items-center justify-center">
                  <Icon width={20} height={20} />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{t(key)}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t(subKey)}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Link
              to="/nagrade"
              className="inline-flex items-center gap-3 rounded-full border border-primary/50 px-7 py-3 text-xs tracking-[0.25em] text-primary hover:bg-primary/5 transition-colors"
            >
              {t("awards.more")} <IconArrow width={14} height={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
