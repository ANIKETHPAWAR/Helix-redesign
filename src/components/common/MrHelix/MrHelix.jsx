import React from 'react';
import mascot1 from '../../../assets/Mr.Helix Mascot-1.png';
import mascot2 from '../../../assets/Mr.Helix Mascot-2.png';
import './MrHelix.css';

const mascotSources = { 1: mascot1, 2: mascot2 };

/* Patterns that use absolute positioning — badge would break layout */
const BADGE_HIDDEN_PATTERNS = new Set([
    'endorsement',
    'watermark',
    'accent',
    'companion',
]);

/**
 * MrHelix — Reusable mascot component with varied placement patterns.
 *
 * @param {number}  variant   - 1 (facing right) or 2 (facing left)
 * @param {string}  size      - 'sm' | 'md' | 'lg' | 'xl'  (default 'md')
 * @param {string}  position  - 'left' | 'right' | 'center' (default 'right')
 * @param {string}  pattern   - 'endorsement' | 'companion' | 'watermark' | 'guide' | 'accent' | 'standalone'
 * @param {boolean} animate   - Enable subtle animation (default true)
 * @param {boolean} showBadge - Show "Mr. Helix" name badge (auto-determined by pattern if omitted)
 * @param {string}  className - Additional CSS classes
 */
function MrHelix({
    variant = 1,
    size = 'md',
    position = 'right',
    pattern = 'endorsement',
    animate = true,
    showBadge,
    className = '',
}) {
    const src = mascotSources[variant] || mascot1;

    /* Auto-determine badge visibility based on pattern when not explicitly set */
    const shouldShowBadge =
        showBadge !== undefined ? showBadge : !BADGE_HIDDEN_PATTERNS.has(pattern);

    const wrapperClasses = [
        'mr-helix-wrap',
        `mr-helix-wrap--${size}`,
        `mr-helix-wrap--${position}`,
        `mr-helix-wrap--${pattern}`,
        animate ? 'mr-helix-wrap--animate' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const imgClasses = [
        'mr-helix',
        `mr-helix--${size}`,
        `mr-helix--${position}`,
        `mr-helix--${pattern}`,
        animate ? 'mr-helix--animate' : '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <figure className={wrapperClasses}>
            <img
                src={src}
                alt=""
                role="presentation"
                loading="lazy"
                draggable="false"
                className={imgClasses}
            />

        </figure>
    );
}

export default MrHelix;

