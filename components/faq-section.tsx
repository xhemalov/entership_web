


"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import CourseToggle from '@/components/course-toggle'

interface FAQSectionProps {
  title?: string;
  isToggled?: boolean;
  setIsToggled?: (value: boolean) => void;
  showToggle?: boolean;
}

// SVG Icons with purple main color
const LightningIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#4A044E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
)

const TargetIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#4A044E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="12" r="5"></circle>
    <circle cx="12" cy="12" r="9"></circle>
  </svg>
)

const ToolsIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#4A044E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 1 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
)

const TrophyIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#4A044E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2"></path>
    <path d="M6 9c0-1 .895-2 2-2h8c1.105 0 2 1 2 2"></path>
    <path d="M9 5a3 3 0 0 1 6 0"></path>
    <line x1="9" y1="14" x2="9" y2="20"></line>
    <line x1="15" y1="14" x2="15" y2="20"></line>
  </svg>
)

const ChatIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#4A044E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
)

export default function FAQSection({ title = "Co tě čeká?", isToggled = false, setIsToggled, showToggle = false }: FAQSectionProps) {
  // KOHORTA content (isToggled = false)
  const kohortaFaqs = [
    {
      icon: <LightningIcon />,
      question: "Rychlý start do AI světa",
      answer: "Za 6-8 týdnů ovládneš nejmodernější AI nástroje a začneš je používat pro svou práci i osobní projekty."
    },
    {
      icon: <TargetIcon />,
      question: "Bez předchozích zkušeností",
      answer: "Kurz je navržen pro úplné začátečníky. Začínáme od základů a postupně tě dovedeme k pokročilým technikám."
    },
    {
      icon: <ToolsIcon />,
      question: "Praktické nástroje zdarma",
      answer: "Naučíš se používat nejlepší AI nástroje, většina z nich je dostupná zdarma nebo má bezplatnou verzi."
    },
    {
      icon: <TrophyIcon />,
      question: "Oficiální certifikát",
      answer: "Po dokončení získáš certifikát, který posílí tvé CV a LinkedIn profil v očích zaměstnavatelů."
    },
    {
      icon: <ChatIcon />,
      question: "Podpora komunity",
      answer: "Přístup k exkluzivní komunitě studentů a přímá podpora od instruktorů. Nikdy nebudeš sám."
    }
  ];

  // FLEX content (isToggled = true)
  const flexFaqs = [
    {
      icon: <LightningIcon />,
      question: "Studuj vlastním tempem",
      answer: "Přístup ke všem materiálům ihned. Studuj kdykoliv a odkudkoliv podle svého vlastního tempa."
    },
    {
      icon: <TargetIcon />,
      question: "Bez předchozích zkušeností",
      answer: "Kurz je navržen pro úplné začátečníky. Začínáme od základů a postupně tě dovedeme k pokročilým technikám."
    },
    {
      icon: <ToolsIcon />,
      question: "Praktické nástroje zdarma",
      answer: "Naučíš se používat nejlepší AI nástroje, většina z nich je dostupná zdarma nebo má bezplatnou verzi."
    },
    {
      icon: <TrophyIcon />,
      question: "Oficiální certifikát",
      answer: "Po dokončení získáš certifikát, který posílí tvé CV a LinkedIn profil v očích zaměstnavatelů."
    },
    {
      icon: <ChatIcon />,
      question: "Individuální konzultace",
      answer: "Osobní podpora lektora a možnost individuálních konzultací pro maximální výsledky."
    }
  ];

  const faqs = isToggled ? flexFaqs : kohortaFaqs;

  return (
    <section className="px-6 py-16 lg:px-12 bg-purple-main">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-nasalization font-bold text-cream text-center mb-16 leading-normal-xl">
          {title}
        </h2>
        {showToggle && setIsToggled && (
          <div className="mb-12">
            <CourseToggle isToggled={isToggled} setIsToggled={setIsToggled} />
          </div>
        )}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-button-cream border-0 rounded-lg px-6"
            >
              <AccordionTrigger className="text-purple-main font-inter font-semibold text-left hover:text-yellow-accent">
                <div className="flex items-center gap-3">
                  {faq.icon}
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-purple-main font-inter leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}















