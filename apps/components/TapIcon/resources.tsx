export type IconName =
    'edit'
    | 'plus'
    | 'square'
    | 'trash';

type SvgResourceProps = { [key in IconName]: (fill: string) => string };

export const SvgResources: SvgResourceProps = {
    edit: (fill: string) => `
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 11L14 2L12.5 1.5L3 10L4 11Z" fill="#F7CC15"/>
            <path d="M1.46046 13.3117L2.0466 11.1625C2.24863 10.4217 3.17554 10.1755 3.71847 10.7185L5.28153 12.2815C5.82446 12.8245 5.57831 13.7514 4.83754 13.9534L2.68834 14.5395C1.94184 14.7431 1.25686 14.0582 1.46046 13.3117Z" fill="#F7CC15"/>
            <path d="M2.6 10.6L1.4945 14.4693C1.27897 15.2236 1.97639 15.921 2.73074 15.7055L6.6 14.6M2.6 10.6L11.0047 2.84179C12.1194 1.8129 13.8474 1.84745 14.9201 2.92006V2.92006C16.0551 4.05508 16.0181 5.9064 14.8386 6.99514L6.6 14.6M2.6 10.6L6.6 14.6" stroke="${fill}" stroke-width="1.5"/>
        </svg>
    `,
    plus: (fill: string) => `
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1.5L9 16.5" stroke="${fill}" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M16.5 9L1.5 9" stroke="${fill}" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    `,
    square: (fill: string) => `
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="18" rx="5" fill="${fill}"/>
        </svg>
    `,
    trash: (fill: string) => `
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5844 7L12.8095 15.7353H8.99988H5.19077L3.4158 7H2L4.03182 17H8.99988H13.9682L16 7H14.5844Z" fill="${fill}"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 13H10V6H9V13Z" fill="${fill}"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 5H16V4H2V5Z" fill="${fill}"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 2H12V1H7V2Z" fill="${fill}"/>
        </svg>
    `,
};
