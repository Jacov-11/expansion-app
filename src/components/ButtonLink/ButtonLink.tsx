import React from 'react';
import styles from './ButtonLink.module.scss';

interface ButtonLinkProps {
  href: string;
  text: string;
  iconUrl?: string;
  iconAlt?: string;
}

export default function ButtonLink({ href, text, iconUrl, iconAlt }: ButtonLinkProps) {
    return (
      <a href={href} role="navigation" className={styles.buttonLink}>
        {iconUrl && iconAlt && <img src={iconUrl} className={styles.icon} alt={iconAlt} />}
        {text}
      </a>
    );
  }