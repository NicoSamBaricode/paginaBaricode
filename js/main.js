/**
 * Bari Code - Main Application Scripts
 * Handles contact forms, smooth navigation, mobile menu, and user interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 2. Smooth Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.length > 1 && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offset = 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 3. Contact Form Submission (Multi-channel: WhatsApp + Email)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Handle WhatsApp Submit
        const btnWhatsapp = document.getElementById('btnSubmitWhatsapp');
        const btnEmail = document.getElementById('btnSubmitEmail');

        function getFormData() {
            const name = document.getElementById('nombre')?.value.trim() || '';
            const email = document.getElementById('email')?.value.trim() || '';
            const phone = document.getElementById('telefono')?.value.trim() || '';
            const countrySelect = document.getElementById('paisSelect');
            const country = countrySelect ? countrySelect.options[countrySelect.selectedIndex].text : '';
            const serviceSelect = document.getElementById('servicioSelect');
            const service = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex].text : '';
            const company = document.getElementById('empresa')?.value.trim() || 'No especificada';
            const message = document.getElementById('mensaje')?.value.trim() || '';
            const privacy = document.getElementById('privacidadCheckbox')?.checked;

            return { name, email, phone, country, service, company, message, privacy };
        }

        function validateForm(data) {
            if (!data.name || !data.email || !data.message) {
                alert(document.documentElement.lang === 'en' 
                    ? 'Please fill in all required fields (Name, Email, Message).' 
                    : 'Por favor, completá los campos obligatorios (Nombre, Email, Mensaje).');
                return false;
            }
            if (!data.privacy) {
                alert(document.documentElement.lang === 'en'
                    ? 'Please accept the privacy policy to proceed.'
                    : 'Por favor, aceptá las políticas de privacidad para continuar.');
                return false;
            }
            return true;
        }

        if (btnWhatsapp) {
            btnWhatsapp.addEventListener('click', (e) => {
                e.preventDefault();
                const data = getFormData();
                if (!validateForm(data)) return;

                if (window.trackConversionEvent) {
                    window.trackConversionEvent('lead_form_submitted', {
                        channel: 'whatsapp',
                        lead_name: data.name,
                        lead_email: data.email,
                        lead_phone: data.phone,
                        country: data.country,
                        service_requested: data.service,
                        company: data.company
                    });
                }

                const phoneNumber = '542944317769';
                const text = `*Nueva Consulta desde Web Bari Code*%0A%0A👤 *Nombre:* ${encodeURIComponent(data.name)}%0A🏢 *Empresa:* ${encodeURIComponent(data.company)}%0A🌎 *País:* ${encodeURIComponent(data.country)}%0A📧 *Email:* ${encodeURIComponent(data.email)}%0A📱 *Tel/WA:* ${encodeURIComponent(data.phone)}%0A🎯 *Servicio de interés:* ${encodeURIComponent(data.service)}%0A%0A💬 *Mensaje:*%0A${encodeURIComponent(data.message)}`;
                const waUrl = `https://wa.me/${phoneNumber}?text=${text}`;
                window.open(waUrl, '_blank');
            });
        }

        if (btnEmail) {
            btnEmail.addEventListener('click', (e) => {
                e.preventDefault();
                const data = getFormData();
                if (!validateForm(data)) return;

                if (window.trackConversionEvent) {
                    window.trackConversionEvent('lead_form_submitted', {
                        channel: 'email',
                        lead_name: data.name,
                        lead_email: data.email,
                        country: data.country,
                        service_requested: data.service,
                        company: data.company
                    });
                }

                const subject = encodeURIComponent(`Consulta Bari Code - ${data.service} (${data.company})`);
                const body = encodeURIComponent(`Hola equipo de Bari Code,\n\nMi nombre es ${data.name}.\nEmpresa: ${data.company}\nPaís: ${data.country}\nEmail: ${data.email}\nTeléfono: ${data.phone}\nServicio de Interés: ${data.service}\n\nDetalle de la consulta:\n${data.message}\n\nQuedo a la espera de su respuesta.`);
                
                window.location.href = `mailto:info@bari-code.com,ventas@bari-code.com?subject=${subject}&body=${body}`;
            });
        }
    }
});
