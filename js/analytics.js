/**
 * Bari Code - Analytics, UTM Tracking & Conversion Engine
 * Tracks user interactions, lead submissions, calendar bookings, and WhatsApp conversions.
 */

window.dataLayer = window.dataLayer || [];

function getUtmParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        utm_source: params.get('utm_source') || 'direct',
        utm_medium: params.get('utm_medium') || 'organic',
        utm_campaign: params.get('utm_campaign') || 'none',
        utm_content: params.get('utm_content') || 'none',
        utm_term: params.get('utm_term') || 'none',
        referrer: document.referrer || 'direct',
        landing_page: window.location.pathname
    };
}

// Store UTMs in session storage so they persist across navigation
const currentUtms = getUtmParams();
if (!sessionStorage.getItem('baricode_utms')) {
    sessionStorage.setItem('baricode_utms', JSON.stringify(currentUtms));
}

function getStoredUtms() {
    try {
        return JSON.parse(sessionStorage.getItem('baricode_utms')) || currentUtms;
    } catch(e) {
        return currentUtms;
    }
}

/**
 * Universal Event Tracker for GA4, Google Tag Manager & Meta Pixel
 */
function trackConversionEvent(eventName, eventParams = {}) {
    const enrichedParams = {
        ...getStoredUtms(),
        ...eventParams,
        timestamp: new Date().toISOString(),
        current_lang: document.documentElement.lang || 'es'
    };

    // Google Tag Manager / GA4 DataLayer
    window.dataLayer.push({
        event: eventName,
        ...enrichedParams
    });

    // GA4 direct gtag if loaded
    if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, enrichedParams);
    }

    // Meta Pixel if loaded
    if (typeof window.fbq === 'function') {
        window.fbq('trackCustom', eventName, enrichedParams);
    }

    console.log(`[BariCode Analytics] Event tracked: ${eventName}`, enrichedParams);
}

// Automatic tracking for key elements
document.addEventListener('DOMContentLoaded', () => {
    // 1. Track WhatsApp clicks
    document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(link => {
        link.addEventListener('click', () => {
            const context = link.getAttribute('data-origin') || 'general_whatsapp_button';
            trackConversionEvent('whatsapp_click', {
                origin_button: context,
                destination: link.href
            });
        });
    });

    // 2. Track Email clicks
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.addEventListener('click', () => {
            trackConversionEvent('email_click', {
                email: link.getAttribute('href').replace('mailto:', ''),
                origin: link.getAttribute('data-origin') || 'contact_link'
            });
        });
    });

    // 3. Track Discovery Call bookings
    document.querySelectorAll('[data-open-booking]').forEach(btn => {
        btn.addEventListener('click', () => {
            trackConversionEvent('booking_initiated', {
                origin: btn.getAttribute('data-origin') || 'hero_cta'
            });
        });
    });

    // 4. Track Case Study Views
    document.querySelectorAll('[data-open-case]').forEach(btn => {
        btn.addEventListener('click', () => {
            const caseId = btn.getAttribute('data-open-case');
            trackConversionEvent('case_study_view', {
                case_id: caseId
            });
        });
    });
});

window.trackConversionEvent = trackConversionEvent;
window.getStoredUtms = getStoredUtms;
