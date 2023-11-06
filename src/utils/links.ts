    export interface IClientPartnerLinks {
        links: {
            title: string,
            link: string
        }[],
        extraLinks: {
            title: string,
            link: string
        }[]
    }


    export interface IFooterLinks {
        sectionTitle: string,
        links: {
            label: string,
            href: string
        }[]
    }

   export  interface ISocialLinks {
        alt: string,
        href: string,
        img: string
    }
    


export const clientLinks: IClientPartnerLinks =
{
    links: [
        {
            title: "Conseil gratuit",
            link: "#"

        },
        {
            title: "Produits",
            link: "/nos-produits"
        },
        {
            title: "Aide",
            link: "#"
        },
        {
            title: "A propos",
            link: "/about"
        }
    ],
    extraLinks: [

        {
            title: "Comparer",
            link: "/comparer"
        },
        {
            title: "Se connecter",
            link: "#"
        }

    ]
}


export const partnerLinks: IClientPartnerLinks =
{
    links: [
        {
            title: "Courtier",
            link: "/partner/courtier"

        },
        {
            title: "Conseiller WiASSUR",
            link: "/partner/conseiller"
        },
        {
            title: "Partenaire affinitaire",
            link: "/partner/affinitaire"
        },
    ],
    extraLinks: [

        {
            title: "S'inscrire",
            link: "#"
        },
        {
            title: "Se connecter",
            link: "#"
        }

    ]
}


export const footerLinks: IFooterLinks[] = [
    {
        sectionTitle: 'A propos',
        links: [
            {
                label: 'Qui sommes-nous ?',
                href: '/about'
            },
            {
                label: 'Carrière',
                href: '#'
            },
            {
                label: 'Code de conduite',
                href: '#'
            }
        ]
    },
    {
        sectionTitle: 'Comparateur',
        links: [
            {
                label: 'Apercus des produits',
                href: '/nos-produits'
            },
           
        ]
    }
    ,
    {
        sectionTitle: 'AIDE',
        links: [
            {
                label: 'Déclarer un sinistre',
                href: '/declarer-un-sinistre'
            },
            {
                label: 'Contactez-bous',
                href: '#'
            },
            {
                label: 'Avantages',
                href: '#'
            }
        ]
    }
    ,



    {
        sectionTitle: 'Partenaire',
        links: [
            {
                label: 'Devenir partenaire',
                href: '/partner'
            },
            {
                label: 'Courtier',
                href: '/partner/courtier'
            },
            {
                label: 'Agent',
                href: '#'
            },
            {
                label: 'Partenaire affinitaire',
                href: '/partner/affinitaire'
            },
           

        ]
    }
    ,


    



]

export const socialLinks: ISocialLinks[] = [
    {
        alt: 'Facebook',
        href: '#',
        img: '/icons/facebook.svg'
    },
    {
        alt: 'Instagram',
        href: '#',
        img: '/icons/instagram.svg'
    },
    {
        alt: 'Messenger',
        href: '#',
        img: '/icons/messenger.svg'
    },
    {
        alt: 'Whatsapp',
        href: '#',
        img: '/icons/whatsapp.svg'
    },
]

export const appLinks: ISocialLinks[] = [
    {
        alt: 'Google Play',
        href: '#',
        img: '/icons/playstore.png'
    },
    {
        alt: 'App Store',
        href: '#',
        img: '/icons/appstore.png'
    },
]