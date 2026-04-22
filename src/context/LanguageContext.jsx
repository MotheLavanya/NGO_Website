import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      programs: 'Programs',
      impact: 'Impact',
      donate: 'Donate Now',
      contact: 'Contact',
      volunteer: 'Volunteer'
    },
    hero: {
      title: 'Empowering Lives, Restoring Hope',
      subtitle: 'Join us in our mission to create a world where every child has access to education and every family has health security.',
      ctaPrimary: 'Donate Now',
      ctaSecondary: 'Join Community'
    },
    stats: {
      beneficiaries: 'Beneficiaries',
      villages: 'Villages Covered',
      volunteers: 'Active Volunteers',
      raised: 'Funds Raised (₹)'
    },
    about: {
      title: 'Our Story',
      subtitle: 'From a small community initiative to a nationwide movement of change.',
      message: "Founder's Message",
      timeline: 'Our Journey',
      mission: 'Our Mission',
      vision: 'Our Vision',
      values: 'Our Core Values',
      missionText: 'To create a world where every child has access to quality education and every family has health security.',
      visionText: 'A society built on the foundations of equity, empathy, and sustainable development for the most vulnerable.',
      value1: 'Empathy First',
      value2: 'Radical Transparency',
      value3: 'Sustainable Impact',
      value4: 'Community Lead'
    },

    programs: {
      title: 'What We Do',
      subtitle: 'Focused programs designed for sustainable impact.',
      education: 'Education',
      health: 'Healthcare',
      women: 'Women Empowerment',
      viewAll: 'All Programs',
      cta: 'Learn More'
    },
    stories: {
      title: 'Impact Stories',
      subtitle: 'Real people. Real change. Real impact.',
      readMore: 'Read Full Story',
      before: 'Before',
      after: 'After'
    },
    donate: {
      title: 'Make a Difference',
      subtitle: 'Your contribution directy funds our grassroots initiatives.',
      monthly: 'Monthly',
      oneTime: 'One-time',
      custom: 'Custom Amount',
      raised: 'Raised',
      goal: 'Goal',
      cta: 'Donate Now'
    },
    getInvolved: {
      title: 'Get Involved',
      subtitle: 'There are many ways to support our mission.',
      volunteer: 'Volunteer',
      partner: 'Partner with Us',
      intern: 'Internships',
      volunteerDesc: 'Join our ground team and make a direct impact in villages.',
      partnerDesc: 'Corporate or NGO partnerships for large-scale reach.',
      internDesc: 'For students to learn and contribute to social good.',
      cta: 'Apply Now'
    },
    transparency: {
      title: 'Transparency & Trust',
      subtitle: 'We are committed to the highest standards of accountability.',
      reports: 'Annual Reports',
      audit: 'Audit Timeline',
      download: 'Download PDF'
    },
    blog: {
      title: 'News & Stories',
      subtitle: 'Latest updates from our field operations.',
      readMore: 'Read More'
    },
    faq: {
      title: 'Common Questions',
      subtitle: 'Everything you need to know about our work and donations.',
    },
    newsletter: {
      title: 'Stay Informed',
      subtitle: 'Subscribe to our monthly newsletter for impact updates.',
      placeholder: 'Enter your email address',
      cta: 'Subscribe Now'
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'We are here to answer any questions you may have.',
      name: 'Full Name',
      email: 'Email Address',
      message: 'Message',
      cta: 'Send Message'
    }
    // ... more will be added as we build
  },
  te: {
    nav: {
      home: 'హోమ్',
      about: 'మన గురించి',
      programs: 'కార్యక్రమాలు',
      impact: 'ప్రభావం',
      donate: 'ఇప్పుడే దానం చేయండి',
      contact: 'సంప్రదించండి',
      volunteer: 'వాలంటీర్'
    },
    hero: {
      title: 'జీవితాలను సాధికారం చేస్తూ, ఆశను పునరుద్ధరిస్తూ',
      subtitle: 'ప్రతి బిడ్డకు విద్య మరియు ప్రతి కుటుంబానికి ఆరోగ్య భద్రత ఉన్న ప్రపంచాన్ని సృష్టించే మా మిషన్‌లో మాతో చేరండి.',
      ctaPrimary: 'ఇప్పుడే దానం చేయండి',
      ctaSecondary: 'కమ్యూనిటీలో చేరండి'
    },
    stats: {
      beneficiaries: 'ప్రయోజనం పొందే వారు',
      villages: 'గ్రామాలు',
      volunteers: 'క్రియాశీల వాలంటీర్లు',
      raised: 'వసూలైన నిధులు (₹)'
    },
    about: {
      title: 'మన కథ',
      subtitle: 'ఒక చిన్న కమ్యూనిటీ చొరవ నుండి దేశవ్యాప్త మార్పు ఉద్యమం వరకు.',
      message: 'వ్యవస్థాపకుని సందేశం',
      timeline: 'మన ప్రయాణం',
      mission: 'మా లక్ష్యం',
      vision: 'మా దార్శనికత',
      values: 'మా ప్రధాన విలువలు',
      missionText: 'ప్రతి బిడ్డకు నాణ్యమైన విద్య మరియు ప్రతి కుటుంబానికి ఆరోగ్య భద్రత ఉన్న ప్రపంచాన్ని సృష్టించడం.',
      visionText: 'అత్యంత బలహీన వర్గాల కోసం సమానత్వం, సానుభూతి మరియు స్థిరమైన అభివృద్ధి పునాదులపై నిర్మించబడిన సమాజం.',
      value1: 'సానుభూతి మొదట',
      value2: 'మొత్తం పారదర్శకత',
      value3: 'స్థిరమైన ప్రభావం',
      value4: 'కమ్యూనిటీ నాయకత్వం'
    },

    programs: {
      title: 'మనం ఏమి చేస్తాం',
      subtitle: 'స్థిరమైన ప్రభావం కోసం రూపొందించిన కార్యక్రమాలు.',
      education: 'విద్య',
      health: 'ఆరోగ్య సంరక్షణ',
      women: 'మహిళా సాధికారత',
      viewAll: 'అన్ని కార్యక్రమాలు',
      cta: 'మరింత తెలుసుకోండి'
    },
    stories: {
      title: 'ప్రభావ కథలు',
      subtitle: 'నిజమైన వ్యక్తులు. నిజమైన మార్పు. నిజమైన ప్రభావం.',
      readMore: 'పూర్తి కథను చదవండి',
      before: 'ముందు',
      after: 'తరువాత'
    },
    donate: {
      title: 'మార్పు తీసుకురండి',
      subtitle: 'మీ విరాళం నేరుగా మా కార్యక్రమాలకు నిధులు సమకూరుస్తుంది.',
      monthly: 'నెలవారీ',
      oneTime: 'ఒక్కసారి',
      custom: 'అనుకూల మొత్తం',
      raised: 'వసూలైనది',
      goal: 'లక్ష్యం',
      cta: 'ఇప్పుడే దానం చేయండి'
    },
    getInvolved: {
      title: 'పాల్గొనండి',
      subtitle: 'మా మిషన్‌కు మద్దతు ఇవ్వడానికి అనేక మార్గాలు ఉన్నాయి.',
      volunteer: 'వాలంటీర్',
      partner: 'మాతో భాగస్వామి',
      intern: 'ఇంటర్న్‌షిప్స్',
      volunteerDesc: 'మా గ్రౌండ్ టీమ్‌లో చేరండి మరియు గ్రామాలలో ప్రత్యక్ష ప్రభావాన్ని చూపండి.',
      partnerDesc: 'పెద్ద ఎత్తున చేరువ కావడానికి కార్పొరేట్ లేదా స్వచ్ఛంద సంస్థల భాగస్వామ్యం.',
      internDesc: 'విద్యార్థులు సామాజిక ప్రయోజనం కోసం నేర్చుకోవడానికి మరియు సహకరించడానికి.',
      cta: 'ఇప్పుడే దరఖాస్తు చేసుకోండి'
    },
    transparency: {
      title: 'పారదర్శకత & నమ్మకం',
      subtitle: 'మేము అత్యున్నత స్థాయి జవాబుదారీతనానికి కట్టుబడి ఉన్నాము.',
      reports: 'వార్షిక నివేదికలు',
      audit: 'ఆడిట్ కాలక్రమం',
      download: 'PDF డౌన్‌లోడ్'
    },
    blog: {
      title: 'వార్తలు & కథలు',
      subtitle: 'మా క్షేత్ర కార్యకలాపాల నుండి తాజా అప్‌డేట్‌లు.',
      readMore: 'మరింత చదవండి'
    },
    faq: {
      title: 'సాధారణ ప్రశ్నలు',
      subtitle: 'మా పని మరియు విరాళాల గురించి మీరు తెలుసుకోవలసిన ప్రతిదీ.',
    },
    newsletter: {
      title: 'సమాచారం పొందండి',
      subtitle: 'ప్రభావ అప్‌డేట్‌ల కోసం మా నెలవారీ వార్తాలేఖకు సబ్‌స్క్రయిబ్ చేయండి.',
      placeholder: 'మీ ఇమెయిల్ చిరునామాను ఎంటర్ చేయండి',
      cta: 'ఇప్పుడే సబ్‌స్క్రయిబ్ చేయండి'
    },
    contact: {
      title: 'సంప్రదించండి',
      subtitle: 'మీకు ఉన్న ఏవైనా ప్రశ్నలకు సమాధానం ఇవ్వడానికి మేము ఇక్కడ ఉన్నాము.',
      name: 'పూర్తి పేరు',
      email: 'ఇమెయిల్ చిరునామా',
      message: 'సందేశం',
      cta: 'సందేశం పంపండి'
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'te' : 'en'));
  };

  const t = (path) => {
    const keys = path.split('.');
    let result = translations[language];
    for (const key of keys) {
      if (result[key]) {
        result = result[key];
      } else {
        return path;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
