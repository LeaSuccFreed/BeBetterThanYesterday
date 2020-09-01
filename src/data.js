import { v4 as uuidv4 } from 'uuid';

export const data = {
    SelfHelp:{
        topic: 'SelfHelp_Books',
        id: uuidv4(),
        books:{
            booksArray: [
                {
                    Title: 'Can\'t Hurt Me: Master Your Mind and Defy the Odds',
                    Author: 'David Goggins',  
                    ratings: 97,
                    url: 'https://www.amazon.com/dp/B07KKP62FW/ref=s9_acsd_obs_hd_bw_b1EO_c2_x_0_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-11&pf_rd_r=2ETZQ6XEWN8DMG6MK9B0&pf_rd_t=101&pf_rd_p=49b9727b-dc03-56d7-b9ac-2fecd81367b9&pf_rd_i=4736',
                    id: uuidv4(),
                    imgUrl:'https://m.media-amazon.com/images/I/41kWOyfqI9L.jpg',
                    dateOfReleased: '15 november 2018'
                },
                {
                    Title: 'Everything Is Figureoutable',
                    Author: 'Marie Forleo',
                    ratings: 93,
                    url: 'https://www.amazon.com/Everything-Is-Figureoutable-audiobook/dp/B07RQV9QNP/ref=sr_1_1?crid=1BH62PMGUT33Y&dchild=1&keywords=marie+forleo+everything+is+figureoutable+book&qid=1598291523&s=audible&sprefix=marie+forle%2Caudible%2C261&sr=1-1',
                    id: uuidv4(),
                    imgUrl: 'https://m.media-amazon.com/images/I/510oGtu+gLL.jpg',
                    dateOfReleased: '10 septembre',
                }
            ]
        }
    },
    Business:{
        topic: 'Business_Books',
        id: uuidv4(),
        books:{
            booksArray:[
                {
                    Title: 'Rich Dad Poor Dad: What the Rich Teach Their Kids About Money - That the Poor and Middle Class Do Not! ',
                    Author: 'Robert Kiyosaki',
                    ratings: 95,
                    url: 'https://www.amazon.com/Rich-Dad-Poor-Dad-Robert-T-Kiyosaki-audio/dp/B008BUHTLE/ref=sr_1_1?dchild=1&keywords=reach+and+poor+dad&qid=1598291826&s=audible&sr=1-1',
                    id: uuidv4(),
                    imgUrl: 'https://m.media-amazon.com/images/I/51AHZGhzZEL.jpg',
                    dateOfReleased: 1997,
                }
            ]
        }
    },
    Podcast: {
        topic: 'Podcast',
        id: uuidv4(),
        podcast: {
            onPurpose:{
                podcasts:[
                    {
                        Title: 'ON How to Start Before You Are Ready',
                        guest: 'Marie Forleo',
                        urlYt: 'https://www.youtube.com/watch?v=5g1OPxftVoM',
                        imgUrl: 'https://i.ytimg.com/vi/5g1OPxftVoM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDC02YRQcBelVKy8nk1IpgoCiGoXg',
                        id: uuidv4(),
                    }
                ]
            },
            impactTheory:{
                podcasts:[
                    {
                        Title: 'How to Make Yourself Immune to Pain',
                        guest: 'David Goggins',
                        urlYt: 'https://www.youtube.com/watch?v=78I9dTB9vqM',
                        imgUrl: 'https://i.ytimg.com/vi/78I9dTB9vqM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAwvjzHPU7X_jDnRW3Pidnx9AhaDw',
                        id: uuidv4(),
                    }
                ]
            }
        }
    }

}