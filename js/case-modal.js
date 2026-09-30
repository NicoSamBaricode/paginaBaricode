/**
 * Bari Code - Interactive Case Study Modal Engine
 * Displays comprehensive problem-solution-results breakdown for each project.
 */

const caseStudiesData = {
    mascotapp: {
        title: "MascotApp",
        badge: "Salud Animal & Sector Público / Civic Tech",
        clientType: "Municipios, Refugios y Comunidades Urbanas",
        summary: "Plataforma integral de fauna urbana y control de zoonosis.",
        heroGradient: "from-blue-600 via-cyan-600 to-indigo-700",
        icon: "🐾",
        problem: {
            es: "Los municipios y refugios enfrentaban un descontrol en el censo de animales urbanos, registros de vacunación en papel que se extraviaban con facilidad, demoras de hasta 3 semanas para coordinar adopciones y falta de trazabilidad en casos de mordeduras o emergencias sanitarias.",
            en: "Municipalities and animal shelters struggled with chaotic pet registries, paper-based vaccination logs prone to loss, 3+ week delays in processing adoption applications, and zero traceability for urban zoonosis outbreaks and animal emergencies."
        },
        solution: {
            es: "Diseñamos y construimos una plataforma modular compuesta por: (1) Aplicación web para gestión municipal con dashboards de zoonosis; (2) Pasaporte Sanitario Digital mediante código QR en chapitas identificatorias; (3) Módulo ciudadano para reporte geolocalizado de animales perdidos; (4) Sistema de match para adopciones responsables.",
            en: "We engineered an end-to-end platform featuring: (1) An enterprise municipal dashboard for zoonosis control; (2) Digital Sanitary QR Passports linked to physical pet tags; (3) Citizen web app for geo-tagged lost/found reporting; (4) Automated matchmaking for responsible pet adoptions."
        },
        results: [
            { stat: "+15.000", label: { es: "Mascotas y familias registradas", en: "Registered pets & families" } },
            { stat: "70%", label: { es: "Reducción en tiempo de adopción", en: "Faster adoption turnaround" } },
            { stat: "100%", label: { es: "Trazabilidad sanitaria con QR", en: "Digital health history tracking" } },
            { stat: "24/7", label: { es: "Disponibilidad para reportes ciudadanos", en: "Uptime for citizen reports" } }
        ],
        stack: ["Angular", "Node.js", "Express", "PostgreSQL", "Mapbox GL", "TailwindCSS", "Docker", "AWS S3"],
        demoUrl: "/presentacion/",
        siteUrl: "https://mascotapp.bari-code.com",
        serviceKey: "opt_custom_software"
    },
    "travel-crm": {
        title: "Travel & Agency CRM",
        badge: "Turismo Internacional & B2B SaaS",
        clientType: "Agencias de Viajes y Operadores Disney / Universal",
        summary: "CRM y motor de cotización dinámica multitarifa para agencias de viajes internacionales.",
        heroGradient: "from-amber-500 via-orange-600 to-red-600",
        icon: "✈️",
        problem: {
            es: "Las agencias cotizaban paquetes turísticos complejos a mano en planillas Excel desactualizadas. Un presupuesto tardaba entre 24 y 48 horas en llegar al cliente, causando una pérdida de hasta 40% de oportunidades comerciales y errores recurrentes en el cálculo de comisiones de agentes.",
            en: "Travel agencies were manually pricing complex multi-park holiday packages in outdated spreadsheets. Preparing a single quote took 24 to 48 hours, causing a 40% drop-off in sales opportunities and frequent errors in agent commission splits."
        },
        solution: {
            es: "Desarrollamos un CRM a medida con motor de reglas y cotizador dinámico que actualiza tarifas de hoteles, parques y pases en tiempo real. Incluye liquidación automática de comisiones multinivel, generación instantánea de PDFs con marca blanca y seguimiento de embudo comercial.",
            en: "We built a specialized CRM with an automated quotation engine pulling live hotel and theme park rates in real-time. Features multi-tier commission payout calculations, automated branded PDF generation, and full pipeline conversion tracking."
        },
        results: [
            { stat: "< 3 min", label: { es: "Tiempo de cotización (vs 48hs)", en: "Quote turnaround (down from 48h)" } },
            { stat: "+35%", label: { es: "Incremento en tasa de conversión", en: "Increase in booking conversion" } },
            { stat: "0%", label: { es: "Errores de liquidación financiera", en: "Commission payout discrepancies" } },
            { stat: "+$1.2M", label: { es: "Transaccionados a través del sistema", en: "Processed through the CRM" } }
        ],
        stack: ["Angular", "Node.js", "Express", "MongoDB", "Chart.js", "PDFKit", "JWT Auth", "TailwindCSS"],
        demoUrl: null,
        siteUrl: "https://maviarenterprises.cloud",
        serviceKey: "opt_web_app"
    },
    "hotel-nico": {
        title: "Hotel Nico - PMS Hotelero",
        badge: "Hospitality & Gestión Hotelera",
        clientType: "Hoteles Boutique, Cabañas y Alojamientos Turísticos",
        summary: "Sistema PMS para control de reservas, check-in digital, gobernanza y facturación.",
        heroGradient: "from-emerald-500 via-teal-600 to-cyan-700",
        icon: "🏨",
        problem: {
            es: "El hotel sufría pérdidas de dinero por doble reserva (overbooking), retrasos de comunicación entre recepción y mucamas sobre el estado de habitaciones limpias/sucias, y cierre de caja nocturno manual que tomaba más de 3 horas por día.",
            en: "The boutique resort faced costly overbookings, miscommunication between reception and housekeeping staff regarding room readiness, and manual daily financial auditing that consumed over 3 hours each night."
        },
        solution: {
            es: "Creamos un Property Management System (PMS) ágil y visual: matriz interactiva de ocupación por habitación/fechas, módulo móvil para equipo de gobernanza con actualización de limpieza en 1 clic, motor de facturación fiscal integrado y estadísticas de ocupación proyectada.",
            en: "We developed a clean, visual Property Management System (PMS): real-time interactive room matrix, mobile-first housekeeping dashboard with 1-click status updates, automated tax invoicing, and predictive occupancy analytics."
        },
        results: [
            { stat: "0", label: { es: "Overbookings desde su puesta en marcha", en: "Overbookings since deployment" } },
            { stat: "4 hrs/día", label: { es: "Ahorradas en tareas de recepción y caja", en: "Saved daily in administrative tasks" } },
            { stat: "98%", label: { es: "Índice de satisfacción del personal", en: "Staff ease-of-use rating" } },
            { stat: "100%", label: { es: "Control en tiempo real de habitaciones", en: "Live housekeeping transparency" } }
        ],
        stack: ["Laravel (PHP 8.2)", "MySQL", "Alpine.js", "Livewire", "TailwindCSS", "REST APIs", "Vite"],
        demoUrl: null,
        siteUrl: "https://hotel.bari-code.com",
        serviceKey: "opt_custom_software"
    },
    "turnero-pro": {
        title: "Turnero Pro",
        badge: "Salud, Estética & Servicios Profesionales",
        clientType: "Clínicas, Consultorios y Profesionales Independientes",
        summary: "Plataforma SaaS para agendamiento autónomo 24/7 y confirmación de turnos por WhatsApp.",
        heroGradient: "from-cyan-500 via-blue-600 to-indigo-800",
        icon: "📅",
        problem: {
            es: "Hasta un 30% de turnos médicos y consultas profesionales se perdían por olvido del paciente ('no-shows'). Las recepciones pasaban más de 4 horas diarias respondiendo chats y llamadas telefónicas para coordinar reprogramaciones.",
            en: "Up to 30% of scheduled appointments were lost to patient no-shows. Front-desk staff spent over 4 hours daily fielding repetitive phone calls and messaging chats just to reschedule appointments."
        },
        solution: {
            es: "Construimos un SaaS de reservas inteligente donde el cliente final agenda su turno en 3 pasos simples. El sistema dispara recordatorios automáticos por WhatsApp y correo electrónico 24hs y 2hs antes de la cita, permitiendo confirmar o cancelar con 1 toque.",
            en: "We engineered an automated booking SaaS enabling patients to book appointments in 3 intuitive steps. Automated WhatsApp and email reminders trigger 24h and 2h before the session, allowing 1-tap confirmation or rescheduling."
        },
        results: [
            { stat: "6%", label: { es: "Tasa de ausentismo (reducida desde 30%)", en: "No-show rate (down from 30%)" } },
            { stat: "15 hrs/sem", label: { es: "Ahorradas en atención telefónica", en: "Staff hours freed from phone calls" } },
            { stat: "24/7", label: { es: "Captación de reservas automáticas", en: "Around-the-clock appointment intake" } },
            { stat: "99.9%", label: { es: "Tasa de entrega de recordatorios WhatsApp", en: "WhatsApp message delivery rate" } }
        ],
        stack: ["React", "Node.js", "MariaDB", "WhatsApp Cloud API", "Express", "TailwindCSS", "Redis"],
        demoUrl: null,
        siteUrl: "https://turnero.bari-code.com",
        serviceKey: "opt_ai_automation"
    }
};

function openCaseStudyModal(caseId) {
    const data = caseStudiesData[caseId];
    if (!data) return;

    const lang = document.documentElement.lang || 'es';
    const isEn = lang === 'en';

    const modal = document.getElementById('caseStudyModal');
    if (!modal) return;

    // Populate data
    document.getElementById('caseModalIcon').textContent = data.icon;
    document.getElementById('caseModalTitle').textContent = data.title;
    document.getElementById('caseModalBadge').textContent = data.badge;
    document.getElementById('caseModalClient').textContent = data.clientType;
    document.getElementById('caseModalProblem').textContent = data.problem[lang] || data.problem.es;
    document.getElementById('caseModalSolution').textContent = data.solution[lang] || data.solution.es;

    // Results metrics
    const resultsContainer = document.getElementById('caseModalResults');
    resultsContainer.innerHTML = '';
    data.results.forEach(res => {
        const div = document.createElement('div');
        div.className = 'bg-brand-light/60 p-4 rounded-2xl border border-blue-100 text-center';
        div.innerHTML = `
            <div class="text-2xl sm:text-3xl font-extrabold text-brand-blue mb-1">${res.stat}</div>
            <div class="text-xs sm:text-sm text-gray-600 font-medium">${res.label[lang] || res.label.es}</div>
        `;
        resultsContainer.appendChild(div);
    });

    // Tech stack badges
    const stackContainer = document.getElementById('caseModalStack');
    stackContainer.innerHTML = '';
    data.stack.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'px-3 py-1 bg-white border border-gray-200 text-gray-800 text-xs font-semibold rounded-lg shadow-sm';
        span.textContent = tech;
        stackContainer.appendChild(span);
    });

    // Action buttons
    const ctaSimilar = document.getElementById('caseModalCtaSimilar');
    ctaSimilar.onclick = () => {
        closeCaseStudyModal();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        // Preselect service in contact form
        const serviceSelect = document.getElementById('servicioSelect');
        if (serviceSelect && data.serviceKey) {
            serviceSelect.value = data.serviceKey;
        }
        const messageInput = document.getElementById('mensaje');
        if (messageInput) {
            const prefillMsg = isEn 
                ? `Hello Bari Code team, I was reviewing the case study of ${data.title} and I would like to develop a similar solution for my business.` 
                : `Hola equipo de Bari Code, estuve viendo el caso de éxito de ${data.title} y me gustaría evaluar una solución similar para mi empresa.`;
            messageInput.value = prefillMsg;
            messageInput.focus();
        }
    };

    const externalSiteBtn = document.getElementById('caseModalExternalSite');
    if (data.siteUrl) {
        externalSiteBtn.href = data.siteUrl;
        externalSiteBtn.classList.remove('hidden');
    } else {
        externalSiteBtn.classList.add('hidden');
    }

    const demoBtn = document.getElementById('caseModalDemoBtn');
    if (data.demoUrl) {
        demoBtn.href = data.demoUrl;
        demoBtn.classList.remove('hidden');
    } else {
        demoBtn.classList.add('hidden');
    }

    // Open modal
    modal.classList.add('active');
    document.body.classList.add('overflow-hidden');

    if (window.trackConversionEvent) {
        window.trackConversionEvent('case_study_opened', { case_id: caseId, case_title: data.title });
    }
}

function closeCaseStudyModal() {
    const modal = document.getElementById('caseStudyModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('overflow-hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Attach click listeners to case detail buttons
    document.querySelectorAll('[data-open-case]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const caseId = btn.getAttribute('data-open-case');
            openCaseStudyModal(caseId);
        });
    });

    // Close on backdrop or escape
    const modal = document.getElementById('caseStudyModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.closest('[data-modal-close]')) {
                closeCaseStudyModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCaseStudyModal();
        }
    });
});

window.openCaseStudyModal = openCaseStudyModal;
window.closeCaseStudyModal = closeCaseStudyModal;
