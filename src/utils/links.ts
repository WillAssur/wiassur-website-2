    interface IClientPartnerLinks {
        links: {
            title: string,
            link: string
        }[],
        extraLinks: {
            title: string,
            link: string
        }[]
    }


    interface IFooterLinks {
        sectionTitle: string,
        links: {
            label: string,
            href: string
        }[]
    }

    interface ISocialLinks {
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
            link: "#"
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
            link: "#"
        },
        {
            title: "Partenaire affinitaire",
            link: "#"
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
                href: '#'
            },
            {
                label: 'Devenir partenaire',
                href: '#'
            },
            {
                label: 'Presse',
                href: '#'
            }
        ]
    },
    {
        sectionTitle: 'Comparateur',
        links: [
            {
                label: 'Auto',
                href: '#'
            },
            {
                label: 'Accident de la vie',
                href: '#'
            },
            {
                label: 'Santé',
                href: '#'
            },
            {
                label: 'Voyage',
                href: '#'
            },
            {
                label: 'Habitation',
                href: '#'
            },
            {
                label: 'Scolaire',
                href: '#'
            }
        ]
    }
    ,
    {
        sectionTitle: 'Assurance',
        links: [
            {
                label: 'Glossaire',
                href: '#'
            },
            {
                label: 'FAQ',
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
        sectionTitle: 'Espace client',
        links: [
            {
                label: 'Connexion',
                href: '#'
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