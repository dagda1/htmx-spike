import htmx from 'htmx.org';

htmx.config.selfRequestsOnly = true;

(window as any).htmx = htmx;