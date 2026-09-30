/**
 * Bari Code - Discovery Call Booking Engine
 * Allows prospects to schedule a 20-30 min strategic discovery session.
 */

function openBookingModal(origin = 'general') {
    const modal = document.getElementById('bookingModal');
    if (!modal) return;

    modal.classList.add('active');
    document.body.classList.add('overflow-hidden');

    if (window.trackConversionEvent) {
        window.trackConversionEvent('booking_modal_opened', { origin });
    }
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('overflow-hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Buttons that trigger booking modal
    document.querySelectorAll('[data-open-booking]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const origin = btn.getAttribute('data-origin') || 'cta_button';
            openBookingModal(origin);
        });
    });

    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.closest('[data-booking-close]')) {
                closeBookingModal();
            }
        });
    }

    // Booking Form Submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('bookName').value.trim();
            const email = document.getElementById('bookEmail').value.trim();
            const company = document.getElementById('bookCompany')?.value.trim() || 'No especificada';
            const date = document.getElementById('bookDate')?.value || 'A coordinar';
            const timeSlot = document.getElementById('bookTimeSlot')?.value || 'Horario Flexible';
            const topic = document.getElementById('bookTopic')?.value || 'Diagnóstico de Software & IA';

            const lang = document.documentElement.lang || 'es';
            const isEn = lang === 'en';

            if (window.trackConversionEvent) {
                window.trackConversionEvent('booking_submitted', {
                    lead_name: name,
                    lead_email: email,
                    company: company,
                    preferred_date: date,
                    time_slot: timeSlot,
                    topic: topic
                });
            }

            // Construct WhatsApp direct confirmation
            const phone = '542944317769';
            let waMsg = '';
            if (isEn) {
                waMsg = `*New Discovery Call Request (20-30 min)*%0A%0A👤 *Name:* ${name}%0A🏢 *Company:* ${company}%0A📧 *Email:* ${email}%0A📅 *Preferred Date:* ${date} (${timeSlot})%0A🎯 *Topic:* ${topic}%0A%0APlease confirm available Google Meet link.`;
            } else {
                waMsg = `*Solicitud de Diagnóstico Estratégico (20-30 min)*%0A%0A👤 *Nombre:* ${name}%0A🏢 *Empresa:* ${company}%0A📧 *Email:* ${email}%0A📅 *Fecha sugerida:* ${date} (${timeSlot})%0A🎯 *Tema:* ${topic}%0A%0A¡Hola equipo de Bari Code! Me gustaría coordinar la sesión por Google Meet.`;
            }

            const waUrl = `https://wa.me/${phone}?text=${waMsg}`;

            // Show success confirmation in modal
            const formContainer = document.getElementById('bookingFormContainer');
            const successContainer = document.getElementById('bookingSuccessContainer');
            if (formContainer && successContainer) {
                formContainer.classList.add('hidden');
                successContainer.classList.remove('hidden');
                document.getElementById('bookingWaDirectLink').href = waUrl;
            } else {
                window.open(waUrl, '_blank');
                closeBookingModal();
            }
        });
    }
});

window.openBookingModal = openBookingModal;
window.closeBookingModal = closeBookingModal;
