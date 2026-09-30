/**
 * Bari Code - Internationalization (i18n) Engine
 * Supports seamless ES <-> EN language switching with localStorage persistence and instant DOM updates.
 */

const translations = {
    es: {
        // Navigation
        "nav_about": "Nosotros",
        "nav_cases": "Casos de Éxito",
        "nav_services": "Servicios",
        "nav_contact": "Contacto",
        "nav_cta": "Agendar Diagnóstico",

        // Hero
        "hero_badge_ai": "Inteligencia Artificial Aplicada",
        "hero_badge_availability": "Proyectos 100% a medida",
        "hero_badge_international": "Clientes en Arg, Latam, USA y España",
        "hero_title_line1": "Software a medida, ¿querés",
        "hero_title_gradient": "automatizar, vender más y operar mejor?",
        "hero_subtitle": "Diseñamos aplicaciones web, sistemas internos y soluciones con inteligencia artificial adaptadas a los procesos de tu negocio.",
        "hero_cta_primary": "Agendar diagnóstico sin cargo",
        "hero_cta_secondary": "Ver casos reales",
        "hero_reassurance": "Contanos qué querés resolver. Analizamos tu necesidad y te orientamos sin compromiso.",

        // Trust Bar / Metrics
        "metric_projects_count": "+50",
        "metric_projects_label": "Proyectos Realizados",
        "metric_custom_count": "100%",
        "metric_custom_label": "Desarrollo a Medida",
        "metric_agile_count": "Ágil",
        "metric_agile_label": "Metodología & Sprints",
        "metric_support_count": "Post-Launch",
        "metric_support_label": "Soporte y Evolución",
        "metric_remote_count": "Global",
        "metric_remote_label": "Trabajo Remoto Latam / USA / ES",

        // Trust Bar Highlights
        "trust_heading": "Confianza y Respaldo Tecnológico para Empresas Exigentes",
        "trust_card1_title": "+50 Proyectos Entregados",
        "trust_card1_desc": "Soluciones reales implementadas con éxito en múltiples industrias.",
        "trust_card2_title": "Desarrollo 100% a Medida",
        "trust_card2_desc": "Código propietario de alta calidad sin plantillas genéricas ni limitaciones.",
        "trust_card3_title": "Metodología Ágil",
        "trust_card3_desc": "Sprints quincenales, demos funcionales y comunicación transparente continua.",
        "trust_card4_title": "Soporte Post-Lanzamiento",
        "trust_card4_desc": "Mantenimiento evolutivo, estabilidad y acompañamiento técnico permanente.",

        // About
        "about_tag": "Sobre Bari Code",
        "about_title": "No desarrollamos software genérico.",
        "about_lead": "Analizamos tus procesos, detectamos oportunidades de mejora y creamos herramientas digitales que reducen tareas manuales, centralizan información y acompañan el crecimiento de tu empresa.",
        "about_p1": "Nos involucramos a fondo en la lógica de tu negocio. No forzamos tu empresa a un software empaquetado: construimos la tecnología alrededor de cómo trabajás vos y tu equipo.",
        "about_p2": "Desde Bariloche hacia el mundo, combinamos excelencia en ingeniería de software con visión estratégica de negocio y adopción práctica de Inteligencia Artificial.",
        "about_pillar1_title": "Arquitectura Escalable",
        "about_pillar1_desc": "Estructuras sólidas preparadas para soportar alto tráfico y crecer sin rehacer código.",
        "about_pillar2_title": "UI/UX Centrado en el Usuario",
        "about_pillar2_desc": "Interfaces limpias y fluidas para que tu equipo y clientes las adopten sin curva de fricción.",
        "about_pillar3_title": "Integración con Sistemas",
        "about_pillar3_desc": "Conexión fluida con tus ERPs, CRMs, pasarelas de pago y APIs preexistentes.",
        "about_pillar4_title": "Acompañamiento Continuo",
        "about_pillar4_desc": "Garantía de calidad, monitoreo proactivo y evolución continua de tus aplicaciones.",

        // Cases / Portfolio
        "cases_tag": "Casos de Éxito Reales",
        "cases_title": "Impacto y Resultados Comprobados",
        "cases_subtitle": "Explorá cómo ayudamos a empresas e instituciones a optimizar sus operaciones y multiplicar sus ventas con tecnología a medida.",
        "case_btn_details": "Ver Caso Completo",
        "case_btn_demo": "Ver Demo / Pitch",
        "case_btn_site": "Visitar Plataforma",
        "case_btn_similar": "Quiero una solución similar",

        // Case 1
        "case1_tag": "Salud Animal & Sector Público",
        "case1_title": "MascotApp",
        "case1_desc": "Plataforma integral de fauna urbana y control de zoonosis. Conecta ciudadanos, veterinarias y municipios con pasaportes sanitarios QR, rescates coordinados y censos geolocalizados.",
        "case1_stat": "+15.000 mascotas registradas | 70% menos tiempo en adopciones",

        // Case 2
        "case2_tag": "Gestión & CRM Turístico",
        "case2_title": "Travel & Agency CRM",
        "case2_desc": "CRM a medida para agencias de viajes internacionales especializadas en parques temáticos. Cotización automatizada de paquetes en minutos, liquidación de comisiones y métricas en vivo.",
        "case2_stat": "Cotizaciones en 3 min (90% más rápido) | +35% tasa de cierre",

        // Case 3
        "case3_tag": "Gestión Hotelera (PMS)",
        "case3_title": "Hotel Bari Code - PMS Hotelero",
        "case3_desc": "Sistema de gestión integral para alojamientos turísticos y hoteles independientes. Centraliza reservas, calendario de disponibilidad en tiempo real, facturación y gobernanza operativa.",
        "case3_stat": "0 overbookings | Ahorro de 4 horas diarias de administración",

        // Case 4
        "case4_tag": "Agenda & Turnos Online",
        "case4_title": "Turnero Pro",
        "case4_desc": "Plataforma SaaS para reserva y administración de turnos online 24/7 con recordatorios inteligentes y confirmaciones automatizadas por WhatsApp para profesionales y consultorios.",
        "case4_stat": "Reducción de ausentismo del 30% al 6% | Agenda 100% automatizada",

        // Services Section
        "services_tag": "Nuestras Soluciones",
        "services_title": "Servicios de Software e Inteligencia Artificial",
        "services_subtitle": "Desarrollamos soluciones tecnológicas robustas orientadas a generar retorno de inversión y eficiencia operativa.",

        "srv1_title": "Desarrollo de Software a Medida",
        "srv1_desc": "Sistemas empresariales diseñados desde cero para digitalizar procesos complejos y centralizar tu operación.",
        "srv2_title": "Aplicaciones Web de Alto Rendimiento",
        "srv2_desc": "Plataformas SaaS, portales de clientes y paneles administrativos rápidos, seguros y responsivos.",
        "srv3_title": "Aplicaciones Mobile (iOS & Android)",
        "srv3_desc": "Apps nativas e híbridas diseñadas para brindar una experiencia impecable a usuarios y colaboradores.",
        "srv4_title": "Automatización de Procesos con IA",
        "srv4_desc": "Optimización de flujos de trabajo repetitivos y procesamiento inteligente de datos para ahorrar cientos de horas.",
        "srv5_title": "Chatbots & Asistentes con IA",
        "srv5_desc": "Agentes conversacionales inteligentes entrenados con el conocimiento de tu empresa para atención y ventas 24/7.",
        "srv6_title": "Integración de APIs y Sistemas",
        "srv6_desc": "Conectamos tu software con ERPs, CRMs, pasarelas de pago, facturación electrónica y servicios en la nube.",
        "srv7_title": "Infraestructura Cloud & DevOps",
        "srv7_desc": "Despliegue seguro en la nube (AWS/GCP/DigitalOcean), escalabilidad, monitoreo y copias de seguridad.",
        "srv8_title": "Consultoría Tecnológica & Auditoría",
        "srv8_desc": "Asesoramiento estratégico para definir tu roadmap digital, seleccionar tecnologías y modernizar sistemas.",
        "srv_view_more": "Ver detalle del servicio →",

        // International Banner
        "intl_title": "Ingeniería de Software con Alcance Global",
        "intl_desc": "Trabajamos de forma 100% remota con empresas de Argentina, Latinoamérica, Estados Unidos y España. Brindamos tarifas altamente competitivas, coincidencia de husos horarios (Nearshore) y comunicación en español e inglés.",

        // CTA Mid
        "mid_cta_title": "¿Tenés un proyecto en mente o querés mejorar tu software actual?",
        "mid_cta_desc": "Agendá una llamada de diagnóstico de 20 a 30 minutos con nuestros especialistas técnicos. Te orientamos sobre alcance, viabilidad y presupuesto.",
        "mid_cta_btn": "Reservar Diagnóstico Gratuito",

        // Contact Section
        "contact_tag": "Hablemos de tu Proyecto",
        "contact_title": "Agendá una Consulta Estratégica",
        "contact_subtitle": "Analizamos tu necesidad y te presentamos una propuesta clara y sin compromiso.",
        "contact_directors_title": "Liderazgo y Contacto Directo",
        "contact_remote_badge": "Servicios para Argentina y el Exterior",
        "contact_form_name": "Nombre completo *",
        "contact_form_email": "Email corporativo *",
        "contact_form_phone": "Teléfono / WhatsApp (con código de país) *",
        "contact_form_country": "País *",
        "contact_form_service": "¿Qué necesitás resolver? *",
        "contact_form_msg": "Contanos sobre tu necesidad, objetivos o desafíos *",
        "contact_form_privacy": "Acepto las políticas de privacidad y autorizo a Bari Code a contactarme para fines relacionados con esta consulta.",
        "contact_btn_whatsapp": "Enviar por WhatsApp",
        "contact_btn_email": "Enviar por Email",
        "contact_btn_calendar": "Agendar Videollamada (Meet / Cal)",

        // Country Options
        "country_ar": "Argentina 🇦🇷",
        "country_es": "España 🇪🇸",
        "country_us": "Estados Unidos 🇺🇸",
        "country_mx": "México 🇲🇽",
        "country_co": "Colombia 🇨🇴",
        "country_cl": "Chile 🇨🇱",
        "country_uy": "Uruguay 🇺🇾",
        "country_pe": "Perú 🇵🇪",
        "country_other": "Otro país 🌎",

        // Service Options
        "opt_custom_software": "Desarrollo de Software a Medida",
        "opt_web_app": "Aplicación Web / SaaS",
        "opt_mobile_app": "Aplicación Mobile (iOS/Android)",
        "opt_ai_automation": "Automatización de Procesos con IA",
        "opt_ai_chatbots": "Chatbots y Asistentes con IA",
        "opt_integrations": "Integración de APIs y Sistemas",
        "opt_cloud_devops": "Infraestructura Cloud y Mantenimiento",
        "opt_consulting": "Consultoría Tecnológica & Diagnóstico",

        // Modal Discovery Call
        "modal_call_title": "Agendar Diagnóstico Gratuito (20-30 min)",
        "modal_call_subtitle": "Elegí el horario o completá tus datos para coordinar una sesión estratégica por Google Meet con nuestro equipo.",
        "modal_call_close": "Cerrar",

        // Footer
        "footer_rights": "Todos los derechos reservados. San Carlos de Bariloche, Argentina."
    },
    en: {
        // Navigation
        "nav_about": "About Us",
        "nav_cases": "Case Studies",
        "nav_services": "Services",
        "nav_contact": "Contact",
        "nav_cta": "Book Discovery Call",

        // Hero
        "hero_badge_ai": "Applied Artificial Intelligence",
        "hero_badge_availability": "100% Tailored Development",
        "hero_badge_international": "Clients in US, Spain, Arg & Latam",
        "hero_title_line1": "Custom software, looking to",
        "hero_title_gradient": "automate, sell more, and operate smarter?",
        "hero_subtitle": "We engineer custom web applications, internal systems, and AI-powered solutions tailored to your business processes.",
        "hero_cta_primary": "Book a Free Discovery Call",
        "hero_cta_secondary": "View Real Case Studies",
        "hero_reassurance": "Tell us what you need to solve. We assess your requirements and guide you with zero commitment.",

        // Trust Bar / Metrics
        "metric_projects_count": "+50",
        "metric_projects_label": "Delivered Projects",
        "metric_custom_count": "100%",
        "metric_custom_label": "Tailor-Made Code",
        "metric_agile_count": "Agile",
        "metric_agile_label": "Sprints & Fast Delivery",
        "metric_support_count": "Post-Launch",
        "metric_support_label": "Ongoing Support & SLAs",
        "metric_remote_count": "Global",
        "metric_remote_label": "Remote & Nearshore US/Latam/ES",

        // Trust Bar Highlights
        "trust_heading": "Enterprise Reliability & Technical Proven Excellence",
        "trust_card1_title": "+50 Delivered Projects",
        "trust_card1_desc": "Real, high-impact digital solutions deployed across various industries.",
        "trust_card2_title": "100% Custom Engineering",
        "trust_card2_desc": "Clean, scalable proprietary codebase. No generic or rigid templates.",
        "trust_card3_title": "Agile Methodology",
        "trust_card3_desc": "Bi-weekly sprints, working demos, and transparent continuous communication.",
        "trust_card4_title": "Post-Launch Support",
        "trust_card4_desc": "Evolutionary maintenance, high availability, and ongoing technical guidance.",

        // About
        "about_tag": "About Bari Code",
        "about_title": "We don't build generic software.",
        "about_lead": "We analyze your business operations, pinpoint opportunities for automation, and build digital tools that eliminate manual tasks, unify data, and fuel your company's growth.",
        "about_p1": "We dive deep into your workflow logic. We never force your business into off-the-shelf software; we engineer technology around the way you and your team work best.",
        "about_p2": "From Bariloche to the world, we combine software engineering excellence with business strategy and practical AI adoption.",
        "about_pillar1_title": "Scalable Architecture",
        "about_pillar1_desc": "Robust structures built to withstand high volume traffic and scale without rewrites.",
        "about_pillar2_title": "User-Centric UI/UX",
        "about_pillar2_desc": "Sleek, intuitive interfaces that your team and customers adopt from day one without friction.",
        "about_pillar3_title": "Seamless System Integration",
        "about_pillar3_desc": "Flawless API connections to your existing ERPs, CRMs, payment gateways, and databases.",
        "about_pillar4_title": "Continuous Partnership",
        "about_pillar4_desc": "Code quality assurance, proactive monitoring, and evolutionary feature roadmaps.",

        // Cases / Portfolio
        "cases_tag": "Real Case Studies",
        "cases_title": "Proven Impact & Business Results",
        "cases_subtitle": "Explore how we helped companies and organizations optimize operations and multiply conversions with bespoke technology.",
        "case_btn_details": "View Full Case Study",
        "case_btn_demo": "View Demo / Pitch",
        "case_btn_site": "Visit Platform",
        "case_btn_similar": "I want a similar solution",

        // Case 1
        "case1_tag": "Animal Health & Civic Tech",
        "case1_title": "MascotApp",
        "case1_desc": "Comprehensive civic platform for urban pet care and zoonosis control. Connects citizens, shelters, and municipalities with QR health passports and geo-tracked rescues.",
        "case1_stat": "+15,000 registered pets | 70% reduction in adoption processing times",

        // Case 2
        "case2_tag": "Travel CRM & Quoting Engine",
        "case2_title": "Travel & Agency CRM",
        "case2_desc": "Custom CRM for international travel agencies specializing in Disney & Universal theme parks. Dynamic multi-park quotation engine, automated commission payouts, and live revenue analytics.",
        "case2_stat": "Quotes generated in under 3 mins (90% faster) | +35% conversion rate",

        // Case 3
        "case3_tag": "Hospitality & Hotel PMS",
        "case3_title": "Hotel Bari Code - PMS Platform",
        "case3_desc": "Full Property Management System for boutique hotels and independent resorts. Unifies live reservation calendars, housekeeping workflows, invoicing, and occupancy reporting.",
        "case3_stat": "0 overbookings | 4 daily hours saved in repetitive administration",

        // Case 4
        "case4_tag": "Smart Booking & Appointments",
        "case4_title": "Turnero Pro",
        "case4_desc": "SaaS online appointment management platform operating 24/7 with automated WhatsApp and email reminders for medical clinics, studios, and service professionals.",
        "case4_stat": "No-shows slashed from 30% to 6% | 100% automated booking calendar",

        // Services Section
        "services_tag": "Our Core Services",
        "services_title": "Custom Software & AI Solutions",
        "services_subtitle": "We engineer robust digital platforms engineered to maximize ROI and operational efficiency.",

        "srv1_title": "Custom Software Development",
        "srv1_desc": "Tailor-made enterprise software to digitize complex operations and centralize your business data.",
        "srv2_title": "High-Performance Web Applications",
        "srv2_desc": "Scalable SaaS platforms, customer portals, and internal dashboards built with modern frameworks.",
        "srv3_title": "Mobile App Development (iOS & Android)",
        "srv3_desc": "Native and cross-platform mobile apps engineered for speed, engagement, and intuitive user experiences.",
        "srv4_title": "AI Process Automation",
        "srv4_desc": "Workflow automation and intelligent data processing to eliminate hundreds of manual work hours.",
        "srv5_title": "AI Chatbots & Virtual Agents",
        "srv5_desc": "Conversational AI trained on your corporate knowledge base to handle 24/7 client support and qualification.",
        "srv6_title": "API & System Integrations",
        "srv6_desc": "Seamless synchronization between legacy ERPs, CRMs, cloud platforms, and financial gateways.",
        "srv7_title": "Cloud Infrastructure & DevOps",
        "srv7_desc": "Secure cloud architectures (AWS/GCP/DigitalOcean), high-availability hosting, CI/CD, and monitoring.",
        "srv8_title": "Tech Consulting & Architecture Audits",
        "srv8_desc": "Strategic guidance to plan your digital roadmap, select tech stacks, and modernize legacy software.",
        "srv_view_more": "Explore service details →",

        // International Banner
        "intl_title": "Nearshore Software Development for US, Europe & Latam",
        "intl_desc": "We work 100% remotely with companies in North America, Spain, and Latin America. We offer high-tier senior engineering, aligned time zones (EST/CST/CET), and seamless English/Spanish communication.",

        // CTA Mid
        "mid_cta_title": "Have a project in mind or looking to upgrade your tech stack?",
        "mid_cta_desc": "Book a 20–30 minute discovery call with our technical architects. We'll assess feasibility, architecture, and estimated investment.",
        "mid_cta_btn": "Book a Free Discovery Call",

        // Contact Section
        "contact_tag": "Let's Talk About Your Goals",
        "contact_title": "Schedule a Strategic Discovery Call",
        "contact_subtitle": "We analyze your requirements and deliver a clear technical and commercial proposal.",
        "contact_directors_title": "Leadership & Direct Contacts",
        "contact_remote_badge": "Serving Argentina, US & International Clients",
        "contact_form_name": "Full name *",
        "contact_form_email": "Business email *",
        "contact_form_phone": "Phone / WhatsApp (with country code) *",
        "contact_form_country": "Country *",
        "contact_form_service": "What do you need to build or solve? *",
        "contact_form_msg": "Describe your project, goals, and key challenges *",
        "contact_form_privacy": "I agree to the privacy policy and authorize Bari Code to contact me regarding this inquiry.",
        "contact_btn_whatsapp": "Send via WhatsApp",
        "contact_btn_email": "Send via Email",
        "contact_btn_calendar": "Book Video Call (Meet / Cal)",

        // Country Options
        "country_ar": "Argentina 🇦🇷",
        "country_es": "Spain 🇪🇸",
        "country_us": "United States 🇺🇸",
        "country_mx": "Mexico 🇲🇽",
        "country_co": "Colombia 🇨🇴",
        "country_cl": "Chile 🇨🇱",
        "country_uy": "Uruguay 🇺🇾",
        "country_pe": "Peru 🇵🇪",
        "country_other": "Other country 🌎",

        // Service Options
        "opt_custom_software": "Custom Software Development",
        "opt_web_app": "Web Application / SaaS",
        "opt_mobile_app": "Mobile App (iOS/Android)",
        "opt_ai_automation": "AI Process Automation",
        "opt_ai_chatbots": "AI Chatbots & Virtual Agents",
        "opt_integrations": "API & System Integrations",
        "opt_cloud_devops": "Cloud Infrastructure & Maintenance",
        "opt_consulting": "Technology Consulting & Discovery",

        // Modal Discovery Call
        "modal_call_title": "Book a Free Discovery Call (20-30 min)",
        "modal_call_subtitle": "Pick a preferred time or enter your contact details to schedule a Google Meet video session with our team.",
        "modal_call_close": "Close",

        // Footer
        "footer_rights": "All rights reserved. San Carlos de Bariloche, Argentina."
    }
};

let currentLang = 'es';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('baricode_lang', lang);
    document.documentElement.lang = lang;

    // Update text elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update placeholders with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Update active states on language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('bg-brand-blue', 'text-white', 'shadow-sm');
            btn.classList.remove('text-gray-600', 'hover:text-brand-blue');
        } else {
            btn.classList.remove('bg-brand-blue', 'text-white', 'shadow-sm');
            btn.classList.add('text-gray-600', 'hover:text-brand-blue');
        }
    });

    // Dispatch custom event for other scripts (e.g. analytics, modals)
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// Auto-detect language on load
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    const savedLang = localStorage.getItem('baricode_lang');
    const browserLang = navigator.language && navigator.language.startsWith('en') ? 'en' : 'es';

    const initialLang = langParam || savedLang || (browserLang === 'en' ? 'en' : 'es');
    setLanguage(initialLang);

    // Attach click listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = btn.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });
});
