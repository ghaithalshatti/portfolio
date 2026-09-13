/**
 * ===== Project links =====
 * Live URLs for each hosted project, shown in the "Visit Site" popup.
 * Most projects have two links: an admin "dashboard" (the management
 * side) and a "frontend" (the public-facing site customers use). The
 * analytics/clustering project only ever has one thing to visit, so it
 * uses "single" instead of "dashboard"/"frontend".
 * The MTN project has no key here on purpose — it's a private-company
 * project and never gets a demo link.
 * ai-complaints and nl-db-agent are NOT listed here — they use a video
 * demo instead (see VIDEO_DEMOS below).
 */
const PROJECT_LINKS_DATA = {
    'flight-booking': {
        dashboard: 'https://flights-hosting.onrender.com/admin',
        frontend: 'https://flights-hosting.onrender.com',
    },
    'restaurants': {
        dashboard: 'https://restaurants-management-hosting.onrender.com',
        frontend: 'https://restaurants-management-hosting.onrender.com/frontend',
    },
    'marketplace': {
        dashboard: 'https://service-marketplace-hosting.onrender.com',
        frontend: 'https://service-marketplace-hosting.onrender.com/site',
    },
    'real-estate': {
        dashboard: 'https://assets-hosting.onrender.com',
        frontend: 'https://assets-hosting.onrender.com/site',
    },
    'analytics-clustering': {
        single: 'https://cluster-classification-hosting.onrender.com',
    },
};

/**
 * ===== Video demos =====
 * Projects whose "Demo" button opens an in-page video player instead of an
 * external link. The video file is only requested from the server once the
 * viewer actually opens the modal (preload="none" + src set on click) — it
 * is never downloaded just from loading the page.
 * Put the two video files at these paths (create the assets/videos folder).
 */
const VIDEO_DEMOS = {
    'ai-complaints': {
        src: 'assets/videos/ai-complaints-demo.mp4',
        title: 'AI Customer Complaint Management & RAG Automation Platform',
    },
    'nl-db-agent': {
        src: 'assets/videos/nl-db-agent-demo.mp4',
        title: 'Natural Language Database Query & Multi-Agent System',
    },
};

/**
 * ===== Language / localization =====
 * English is the default on every page load (never remembered between
 * visits, by design). Only UI chrome and the Services modal are
 * translated — project names, dates, org/role lines, project detail
 * bullets, the CV summary, education, skills, experience, certifications
 * and languages all stay in English on purpose, even in Arabic mode.
 * Add a data-i18n="key" attribute to any element that should switch, and
 * a matching key here in both "en" and "ar".
 */
const TRANSLATIONS = {
    en: {
        personName: 'Ghaith Al Shatti',
        languageBtn: 'Language',
        themeBtn: 'Theme',
        themeModern: 'Modern',
        themeClassic: 'Classic',
        viewProfileBtn: 'View Full Profile',
        servicesBtn: 'Services',
        projectsHeading: 'Projects',
        projectsLead: 'A selection of backend / full-stack Laravel projects, with growing integration of AI and automation technologies.',
        projectDetailsBtn: 'Project details',
        watchDemoBtn: 'Watch Demo',
        visitSiteBtn: 'Visit Site',
        privateDemoBadge: 'Private company project, site unavailable',
        linksModalSubtitle: 'Live project links',
        visitBtn: 'Visit',
        linkDashboardTitle: 'Dashboard',
        linkDashboardDesc: 'Manage the platform from the admin dashboard.',
        linkFrontendTitle: 'Live Website',
        linkFrontendDesc: 'The public-facing site your customers see and use.',
        linkAnalyticsTitle: 'Data Analysis',
        linkAnalyticsDesc: 'Visit the project and try out the data analysis & dashboards.',
        summaryHeading: 'Summary',
        educationHeading: 'Education',
        skillsHeading: 'Skills',
        experienceHeading: 'Experience',
        certificationsHeading: 'Certifications',
        languagesHeading: 'Languages',
        downloadBtn: 'Download',
        footerTagline: '- a personal portfolio showcasing my work and projects.',
        servicesModalTitle: 'Services',
        servicesModalSubtitle: 'What I can build for you',
        serviceWebTitle: 'Web Design & Development',
        serviceWebDesc: "A modern, professional website, or a full web platform, built around how your business actually works. Not a generic template, but something designed to represent you well, load fast, and work smoothly for your customers on any device, whether that's a simple landing page or a complete system your team manages daily.",
        serviceWebDescShort: 'A modern, professional website or web platform, built around how your business actually works.',
        serviceAutomationTitle: 'Business Automation',
        serviceAutomationDesc: "Cutting out the repetitive manual work: approvals, notifications, data entry, follow-ups, reporting, and replacing it with automated processes that run reliably in the background. Less time lost to busywork, fewer things falling through the cracks, and a team that's free to focus on what actually grows the business.",
        serviceAutomationDescShort: 'Replacing repetitive manual work with automated processes that run reliably in the background.',
        serviceIntegrationTitle: 'Systems Integration',
        serviceIntegrationDesc: 'Making the tools your business already relies on, payment systems, messaging apps, CRMs, dashboards, actually talk to each other, instead of living as disconnected islands. Data flows automatically between them, so nothing has to be re-entered by hand and everyone is always working from the same up-to-date information.',
        serviceIntegrationDescShort: 'Connecting the tools your business already uses so data flows between them automatically.',
        serviceSecurityTitle: 'Security & Surveillance Systems',
        serviceSecurityDesc: "Protecting your space around the clock with AI-powered cameras, smart sensors, and alarm systems that keep watch even when you can't. You get notified the moment something needs your attention, with reliable footage and monitoring that give real peace of mind, on-site or away.",
        serviceSecurityDescShort: 'Protecting your space around the clock with AI-powered cameras, sensors, and alarm systems.',
        serviceProcessTitle: 'Process Optimization',
        serviceProcessDesc: 'Taking a close look at how your business actually runs day to day, and reshaping those processes to be faster, clearer, and far less error-prone. The goal is operations that feel effortless instead of chaotic, where every step is simple, every handoff is clean, and everyone on the team knows exactly what to do and when.',
        serviceProcessDescShort: 'Reshaping how your business runs day to day to be faster, clearer, and less error-prone.',
        serviceDigitalTitle: 'Digital Transformation for Physical Businesses',
        serviceDigitalDesc: 'Helping shops, restaurants, and hotels move confidently into the digital world: digital menus and ordering, QR-code experiences for walk-in customers, and secure electronic payment integration. Your business gets a modern, convenient experience for every customer, without losing the personal touch that makes it yours.',
        serviceDigitalDescShort: 'Digital menus, QR-code ordering, and secure e-payments for shops, restaurants, and hotels.',
        serviceAdsTitle: 'Paid Social Advertising (Meta Ads)',
        serviceAdsDesc: 'Running and managing paid advertising campaigns on Facebook and Instagram, from audience targeting and ad creative to budget management and performance tracking. The goal is putting your business in front of the right people and turning that reach into real leads and sales, not just views.',
        serviceAdsDescShort: 'Running Facebook & Instagram ad campaigns that turn reach into real leads and sales.',
        serviceMetaTitle: 'Meta & Telegram Systems Integration',
        serviceMetaDesc: "Connecting your business directly to WhatsApp, Facebook, Instagram, and Telegram, so messages, orders, and customer conversations flow straight into how you work. Includes smart chatbots and instant automated replies across all four platforms, plus custom Telegram bots for orders, support, and automated workflows.",
        serviceMetaDescShort: 'Integrating your systems with WhatsApp, Facebook, Instagram, and Telegram, including smart chatbots, automated replies, and custom Telegram bots.',
    },
    ar: {
        personName: 'غيث الشطي',
        languageBtn: 'اللغة',
        themeBtn: 'المظهر',
        themeModern: 'عصري',
        themeClassic: 'كلاسيكي',
        viewProfileBtn: 'البروفايل الكامل',
        servicesBtn: 'الخدمات',
        projectsHeading: 'المشاريع',
        projectsLead: 'مجموعة مختارة من مشاريع backend / full-stack Laravel، مع تكامل لتقنيات الذكاء الاصطناعي والأتمتة.',
        projectDetailsBtn: 'تفاصيل المشروع',
        watchDemoBtn: 'مشاهدة العرض',
        visitSiteBtn: 'زيارة الموقع',
        privateDemoBadge: 'مشروع خاص بالشركة، العرض غير متاح',
        linksModalSubtitle: 'روابط المشروع الفعلية',
        visitBtn: 'زيارة',
        linkDashboardTitle: 'لوحة التحكم (الداشبورد)',
        linkDashboardDesc: 'إدارة المنصة من خلال لوحة تحكم الأدمن.',
        linkFrontendTitle: 'الموقع الرئيسي',
        linkFrontendDesc: 'الموقع الذي يشاهده الزبائن ويستخدمونه فعلياً.',
        linkAnalyticsTitle: 'تحليل البيانات',
        linkAnalyticsDesc: 'زيارة المشروع وتجربة تحليل البيانات والداشبوردات.',
        summaryHeading: 'نبذة مختصرة',
        educationHeading: 'التعليم',
        skillsHeading: 'المهارات',
        experienceHeading: 'الخبرات',
        certificationsHeading: 'الشهادات',
        languagesHeading: 'اللغات',
        downloadBtn: 'تحميل',
        footerTagline: '- ملف شخصي يعرض أعمالي ومشاريعي.',
        servicesModalTitle: 'الخدمات',
        servicesModalSubtitle: 'الخدمات التي أقدمها',
        serviceWebTitle: 'تصميم وتطوير المواقع الإلكترونية',
        serviceWebDesc: 'موقع إلكتروني عصري واحترافي، أو منصة ويب متكاملة، مصممة بما يتناسب مع طريقة عمل مشروعك فعلياً. ليس قالباً جاهزاً، بل حل مصمم خصيصاً ليعبر عنك بشكل جيد، ويعمل بسرعة وسلاسة لعملائك على أي جهاز، سواء كانت صفحة تعريفية بسيطة أو نظاماً متكاملاً يديره فريقك يومياً.',
        serviceWebDescShort: 'موقع إلكتروني أو منصة ويب احترافية، مصممة خصيصاً حسب طريقة عمل مشروعك.',
        serviceAutomationTitle: 'أتمتة الأعمال',
        serviceAutomationDesc: 'التخلص من الأعمال اليدوية المتكررة، كالموافقات والإشعارات وإدخال البيانات والمتابعات والتقارير، واستبدالها بعمليات آلية تعمل بشكل موثوق في الخلفية. وقت أقل يضيع في الأعمال الروتينية، وأخطاء أقل، وفريق عمل متفرغ للتركيز على ما ينمّي المشروع فعلاً.',
        serviceAutomationDescShort: 'استبدال الأعمال اليدوية المتكررة بعمليات آلية موثوقة توفر وقت فريقك.',
        serviceIntegrationTitle: 'تكامل الأنظمة',
        serviceIntegrationDesc: 'ربط الأدوات التي يعتمد عليها مشروعك، مثل أنظمة الدفع وتطبيقات المراسلة وأنظمة إدارة العملاء ولوحات التحكم، ببعضها البعض بدل أن تبقى منفصلة عن بعضها. تنتقل البيانات تلقائياً بينها، فلا حاجة لإعادة إدخالها يدوياً، ويعمل الجميع دائماً على نفس المعلومات المحدّثة.',
        serviceIntegrationDescShort: 'ربط الأدوات التي يعتمد عليها مشروعك ببعضها، لتنتقل البيانات بينها تلقائياً.',
        serviceSecurityTitle: 'أنظمة الأمن والمراقبة',
        serviceSecurityDesc: 'حماية مكان عملك على مدار الساعة بكاميرات مزودة بالذكاء الاصطناعي، وحساسات ذكية، وأنظمة إنذار تراقب المكان حتى في غيابك. تصلك الإشعارات فور حدوث أي أمر يستدعي انتباهك، مع تسجيل موثوق ومراقبة تمنحك راحة بال حقيقية سواء كنت في الموقع أو خارجه.',
        serviceSecurityDescShort: 'حماية مكان عملك على مدار الساعة بكاميرات ذكية وحساسات وأنظمة إنذار.',
        serviceProcessTitle: 'تحسين العمليات',
        serviceProcessDesc: 'دراسة دقيقة لطريقة سير العمل اليومي في مشروعك، وإعادة تنظيمها لتصبح أسرع وأوضح وأقل عرضة للأخطاء. الهدف أن تصبح العمليات سلسة بدل أن تكون فوضوية، بحيث تكون كل خطوة بسيطة، وكل تسليم منظم، ويعرف كل فرد في الفريق بالضبط ماذا يفعل ومتى.',
        serviceProcessDescShort: 'إعادة تنظيم سير العمل اليومي في مشروعك ليصبح أسرع وأوضح وأقل أخطاءً.',
        serviceDigitalTitle: 'التحول الرقمي للمشاريع التقليدية',
        serviceDigitalDesc: 'مساعدة المحلات والمطاعم والفنادق على الدخول بثقة إلى العالم الرقمي، من خلال قوائم طلبات رقمية، وتجربة عبر رمز QR للزبائن، وربط آمن لأنظمة الدفع الإلكتروني. يحصل مشروعك على تجربة عصرية ومريحة لكل زبون، دون أن يفقد لمسته الشخصية المميزة.',
        serviceDigitalDescShort: 'قوائم رقمية وطلبات عبر QR ودفع إلكتروني آمن للمحلات والمطاعم والفنادق.',
        serviceAdsTitle: 'الإعلانات الممولة على ميتا',
        serviceAdsDesc: 'إدارة وتشغيل حملات إعلانية ممولة على فيسبوك وإنستغرام، بدءاً من استهداف الجمهور المناسب وتصميم الإعلانات، وصولاً إلى إدارة الميزانية ومتابعة الأداء. الهدف إيصال مشروعك للجمهور الصح، وتحويل هذا الوصول إلى عملاء حقيقيين ومبيعات، لا مجرد مشاهدات.',
        serviceAdsDescShort: 'إدارة حملات إعلانية ممولة على فيسبوك وإنستغرام تجلب عملاء حقيقيين لمشروعك.',
        serviceMetaTitle: 'تكامل الأنظمة مع ميتا وتلغرام',
        serviceMetaDesc: 'ربط مشروعك مباشرة مع واتساب وفيسبوك وإنستغرام وتلغرام، بحيث تتكامل الرسائل والطلبات ومحادثات الزبائن مع طريقة عملك. يشمل ذلك شات بوت ذكي وردود آلية فورية على هذه المنصات الأربعة، بالإضافة إلى بوتات تلغرام مخصصة لإدارة الطلبات والدعم والمهام الآلية.',
        serviceMetaDescShort: 'ربط أنظمة مشروعك مع واتساب وفيسبوك وإنستغرام وتلغرام، مع شات بوت وردود آلية ذكية وبوتات تلغرام مخصصة.',
    },
};

let currentLang = 'en';

function t(key) {
    return TRANSLATIONS[currentLang][key] ?? TRANSLATIONS.en[key] ?? '';
}

function applyLanguage(lang) {
    currentLang = lang;

    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        el.textContent = t(el.dataset.i18n);
    });

    document.querySelectorAll('#lang-dropdown .lang-option').forEach((opt) => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });
}

/* "modern" is the emerald/pistachio palette, "classic" is the original
   blue palette — see the CSS custom properties at the top of style.css. */
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    document.querySelectorAll('#theme-dropdown .theme-option').forEach((opt) => {
        opt.classList.toggle('active', opt.dataset.theme === theme);
    });
}

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- email link: open the Gmail app on mobile, Gmail compose on desktop ---------- */
    const emailLink = document.getElementById('email-link');
    const EMAIL_ADDRESS = 'alshattighaith@gmail.com';
    const mobileQuery = window.matchMedia('(max-width: 640px)');

    const updateEmailLink = () => {
        if (mobileQuery.matches) {
            emailLink.href = 'mailto:' + EMAIL_ADDRESS;
            emailLink.removeAttribute('target');
        } else {
            emailLink.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + EMAIL_ADDRESS;
            emailLink.setAttribute('target', '_blank');
        }
    };

    updateEmailLink();
    mobileQuery.addEventListener('change', updateEmailLink);

    /* ---------- project links modal (dashboard / live site visit links) ---------- */
    const linksOverlay = document.getElementById('links-modal-overlay');
    const linksTitleEl = document.getElementById('links-modal-title');
    const linksListEl = document.getElementById('links-modal-list');
    const linksCloseBtn = document.getElementById('links-modal-close');

    const externalLinkIcon = '<svg viewBox="0 0 24 24"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"/></svg>';

    const buildLinkItem = (titleKey, descKey, url) => `
        <div class="link-item">
            <div class="link-item-text">
                <h4 data-i18n="${titleKey}">${t(titleKey)}</h4>
                <p data-i18n="${descKey}">${t(descKey)}</p>
            </div>
            <a class="link-visit-btn" href="${url}" target="_blank" rel="noopener">
                <span data-i18n="visitBtn">${t('visitBtn')}</span>
                ${externalLinkIcon}
            </a>
        </div>
    `;

    const openLinksModal = (card, key) => {
        const data = PROJECT_LINKS_DATA[key];
        if (!data) return;

        const title = card.querySelector('.project-card-head h3')?.textContent.trim() || '';
        linksTitleEl.textContent = title;

        linksListEl.innerHTML = data.single
            ? buildLinkItem('linkAnalyticsTitle', 'linkAnalyticsDesc', data.single)
            : buildLinkItem('linkDashboardTitle', 'linkDashboardDesc', data.dashboard) +
              buildLinkItem('linkFrontendTitle', 'linkFrontendDesc', data.frontend);

        linksOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeLinksModal = () => {
        linksOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    document.querySelectorAll('[data-demo-links]').forEach((btn) => {
        btn.addEventListener('click', () => openLinksModal(btn.closest('.project-card'), btn.dataset.demoLinks));
    });

    linksCloseBtn.addEventListener('click', closeLinksModal);

    linksOverlay.addEventListener('click', (e) => {
        if (e.target === linksOverlay) closeLinksModal();
    });

    /* ---------- language dropdown ---------- */
    const langToggleBtn = document.getElementById('lang-toggle');
    const langDropdown = document.getElementById('lang-dropdown');

    const closeLangDropdown = () => {
        langDropdown.hidden = true;
        langToggleBtn.setAttribute('aria-expanded', 'false');
    };

    const openLangDropdown = () => {
        closeThemeDropdown();
        langDropdown.hidden = false;
        langToggleBtn.setAttribute('aria-expanded', 'true');
    };

    langToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (langDropdown.hidden) {
            openLangDropdown();
        } else {
            closeLangDropdown();
        }
    });

    document.querySelectorAll('#lang-dropdown .lang-option').forEach((opt) => {
        opt.addEventListener('click', () => {
            applyLanguage(opt.dataset.lang);
            closeLangDropdown();
        });
    });

    /* ---------- theme dropdown ---------- */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeDropdown = document.getElementById('theme-dropdown');

    const closeThemeDropdown = () => {
        themeDropdown.hidden = true;
        themeToggleBtn.setAttribute('aria-expanded', 'false');
    };

    const openThemeDropdown = () => {
        closeLangDropdown();
        themeDropdown.hidden = false;
        themeToggleBtn.setAttribute('aria-expanded', 'true');
    };

    themeToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (themeDropdown.hidden) {
            openThemeDropdown();
        } else {
            closeThemeDropdown();
        }
    });

    document.querySelectorAll('#theme-dropdown .theme-option').forEach((opt) => {
        opt.addEventListener('click', () => {
            applyTheme(opt.dataset.theme);
            closeThemeDropdown();
        });
    });

    document.addEventListener('click', (e) => {
        if (!langDropdown.hidden && !e.target.closest('.lang-switch-wrap')) {
            closeLangDropdown();
        }
        if (!themeDropdown.hidden && !e.target.closest('.theme-switch-wrap')) {
            closeThemeDropdown();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!langDropdown.hidden) closeLangDropdown();
            if (!themeDropdown.hidden) closeThemeDropdown();
        }
    });

    applyLanguage('en'); // English is always the default on page load
    applyTheme('modern'); // the emerald/pistachio palette is always the default on page load

    /* ---------- profile modal ---------- */
    const overlay = document.getElementById('profile-modal-overlay');
    const openBtn = document.getElementById('open-profile-modal');
    const closeBtn = document.getElementById('modal-close');

    const openModal = () => {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    /* ---------- services modal ---------- */
    const servicesOverlay = document.getElementById('services-modal-overlay');
    const openServicesBtn = document.getElementById('open-services-modal');
    const servicesCloseBtn = document.getElementById('services-modal-close');

    const openServicesModal = () => {
        servicesOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeServicesModal = () => {
        servicesOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    openServicesBtn.addEventListener('click', openServicesModal);
    servicesCloseBtn.addEventListener('click', closeServicesModal);

    servicesOverlay.addEventListener('click', (e) => {
        if (e.target === servicesOverlay) closeServicesModal();
    });

    /* ---------- project details modal ---------- */
    const projectOverlay = document.getElementById('project-modal-overlay');
    const projectTitleEl = document.getElementById('project-modal-title');
    const projectOrgEl = document.getElementById('project-modal-org');
    const projectDatesEl = document.getElementById('project-modal-dates');
    const projectListEl = document.getElementById('project-modal-list');
    const projectCloseBtn = document.getElementById('project-modal-close');

    const openProjectModal = (card) => {
        const title = card.querySelector('.project-card-head h3')?.textContent.trim() || '';
        const dates = card.querySelector('.project-dates')?.textContent.trim() || '';
        const orgEl = card.querySelector('.project-org');
        const stepsHTML = card.querySelector('.project-details ul')?.innerHTML || '';

        projectTitleEl.textContent = title;
        projectDatesEl.textContent = dates;
        projectOrgEl.textContent = orgEl ? orgEl.textContent.trim() : '';
        projectListEl.innerHTML = stepsHTML;

        projectOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeProjectModal = () => {
        projectOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    document.querySelectorAll('.details-toggle').forEach((btn) => {
        btn.addEventListener('click', () => {
            openProjectModal(btn.closest('.project-card'));
        });
    });

    projectCloseBtn.addEventListener('click', closeProjectModal);

    projectOverlay.addEventListener('click', (e) => {
        if (e.target === projectOverlay) closeProjectModal();
    });

    /* ---------- video demo modal ---------- */
    const videoOverlay = document.getElementById('video-modal-overlay');
    const videoTitleEl = document.getElementById('video-modal-title');
    const videoPlayer = document.getElementById('video-modal-player');
    const videoDownloadBtn = document.getElementById('video-modal-download');
    const videoCloseBtn = document.getElementById('video-modal-close');

    const openVideoModal = (key) => {
        const demo = VIDEO_DEMOS[key];
        if (!demo) return;

        videoTitleEl.textContent = demo.title;
        videoDownloadBtn.href = demo.src;
        videoPlayer.src = demo.src; // only fetched now, on click — never on page load

        videoOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeVideoModal = () => {
        videoOverlay.classList.remove('active');
        document.body.style.overflow = '';
        videoPlayer.pause();
        videoPlayer.removeAttribute('src');
        videoPlayer.load(); // release the buffered video once the modal closes
    };

    document.querySelectorAll('[data-demo-video]').forEach((btn) => {
        btn.addEventListener('click', () => openVideoModal(btn.dataset.demoVideo));
    });

    /* Some mobile browsers (Android Chrome in particular) render the native
       video fullscreen incorrectly when an ancestor element has a CSS
       transform or is clipped — the video only expands to the modal's own
       (transformed/constrained) box instead of the real device screen.
       Toggling this class strips those constraints for as long as the
       video is actually in native fullscreen. */
    const handleVideoFullscreenChange = () => {
        const fsElement = document.fullscreenElement || document.webkitFullscreenElement;
        videoOverlay.classList.toggle('is-fullscreen', fsElement === videoPlayer);
    };
    document.addEventListener('fullscreenchange', handleVideoFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleVideoFullscreenChange);

    videoCloseBtn.addEventListener('click', closeVideoModal);

    videoOverlay.addEventListener('click', (e) => {
        if (e.target === videoOverlay) closeVideoModal();
    });

    /* ---------- shared escape-key handling ---------- */
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (overlay.classList.contains('active')) closeModal();
        if (servicesOverlay.classList.contains('active')) closeServicesModal();
        if (projectOverlay.classList.contains('active')) closeProjectModal();
        if (videoOverlay.classList.contains('active')) closeVideoModal();
        if (linksOverlay.classList.contains('active')) closeLinksModal();
    });

    /* ---------- footer year ---------- */
    document.getElementById('year').textContent = new Date().getFullYear();
});
