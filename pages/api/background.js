const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Anadolu University',
                degree: 'Business Managment',
                detail: "I continue to study Business Administration Bachelor's Degree at Anadolu University.",
                year: '2019-Present'
            },
            {
                id: 1,
                title: 'Dumlupinar University',
                degree: 'Foreign Trade',
                detail: "I completed my foreign trade associate degree at Dumlupinar University.",
                year: '2016-2018'
            },
            {
                id: 2,
                title: 'Nuri Cingillioğlu Academy',
                degree: 'Science Subjects',
                detail: "I completed my 4-year high school education in Science at Nuri Cingillioğlu Academy Istanbul.",
                year: '2012-2016'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Tesla Technologies',
                role: 'Frontend Developer',
                url: 'https://www.tesla.com/',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '08/2023 - Present',
                location: 'Teksas, USA'
            },
            {
                id: 2,
                title: 'Meta',
                role: 'Internee',
                url: 'https://www.meta.com/',
                desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
                year: '02/2023 - 08/2023',
                location: 'California, Pakistan'
            },
            {
                id: 3,
                title: 'Freelancer',
                role: 'Software Developer',
                url: 'https://www.linkedin/in/cekdarcapar.com/',
                desc: "I developed software as a freelancer on C# and Asp.net.",
                year: '09/2020 - 02/2023',
                location: 'Istanbul, Turkey'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
