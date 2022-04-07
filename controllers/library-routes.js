// const router = require('express').Router();

// const books = [
//   {
//     ibsn: '978-0241265543',
//     title: 'War and Peace',
//     author: 'Leo Tolstoy',
//     year_published: 2017,
//     publisher: 'Penguin Classics',
//     price: 15.49,
//     subject: 'Literature',
//     description: 'At a glittering society party in St. Petersburg in 1805, conversations are dominated by the prospect of war. Terror swiftly engulfs the country as Napoleon’s army marches on Russia, and the lives of three young people are changed forever. The stories of quixotic Pierre, cynical Andrey, and impetuous Natasha interweave with a huge cast, from aristocrats and peasants, to soldiers and Napoleon himself. In War and Peace, Tolstoy entwines grand themes—conflict and love, birth and death, free will and fate—with unforgettable scenes of nineteenth-century Russia, to create a magnificent epic of human life in all its imperfection and grandeur.'
//   },
//   {
//     ibsn: ' 978-1641551625',
//     title: 'Foundations of Woodworking: Essential joinery techniques and building strategies',
//     author: 'Michael Pekovichtoy',
//     year_published: 2021,
//     publisher: 'Taunton Press',
//     price: 32.01,
//     subject: 'Arts and Recreation',
//     description: 'Foundations of Woodworking gets to the very core of the craft of woodworking: laying out, cutting, and assembling joinery for furniture and other treasured wood objects. After an introductory chapter on the basic woodworking strategies that apply to anything you might build, Pekovich dives into a step-by-step, project-by-project description of the essential wood joints, from rabbets and dadoes through mortise and tenons to dovetails and miters. Master these joints--with a combination of hand tools and power tools--and the door is open to create just about any design you can think of.'
//   },
// ];

// const branches = [
//   {
//     branch_name: 'Brookhaven Library',
//     address_1: '1242 North Druid Hills Rd., NE',
//     address_2: "",
//     city: 'Brookhaven',
//     state: 'GA',
//     zip: '30319',
//     phone_number: '(678)-858-3905',
//   },
//   {
//     branch_name: 'Little Free Library',
//     address_1: '885 North Highland Ave. NE',
//     address_2: "",
//     city: 'Atlanta',
//     state: 'GA',
//     zip: '30307',
//     phone_number: '(715)-690-2488',
//   },
// ];

// const cds = [
//   {
//     title: 'Who Do You Think We Are', 
//     discid: 'rock / f4118610',
//     artist: 'A Sound of Thunder',
//     genre: 'Heavy metal',
//     year: 2017,
//     publisher: 'Mad Neptune Records',
//     tracks: 
//     [
//       'Vandals', 
//       'Short Sharp Shock', 
//       'Surrender',
//       '(In Your Own Words) Chernobyl',
//       'Freeze',
//       'Market Street (Everything Is Changing)',
//       'Lost Youth',
//       'Live A Little',
//       'Rome',
//       'Sex Etc.',
//       'Dotted Line',
//       'The Ending',
//     ],
//     description:'ASoT\'s 6th album Who Do You Think We Are? is a covers album paying to tribute to some of the band\'s favorite artists. The songs were selected by both the band and the fans who chose a number of the songs by voting. The chosen songs cover a range of metal and rock history from the early \'70s through the mid \'90s.',
//   },
//   {
//     title: 'We Are', 
//     discid: 'misc / 9408e90d',
//     artist: 'Jon Batiste',
//     genre: 'Jazz',
//     year: 2017,
//     publisher: 'Verve Label Group',
//     tracks: 
//     [
//       'We Are',
//       'Tell the Truth',
//       'I NEED YOU',
//       'Whatchutalkinbout',
//       'Boy Hood'
//     ],
//     description:'We Are is the eighth studio album by American musician Jon Batiste. It was released on Verve Records on March 19, 2021. In April 2022, the album won Album of the Year at the 64th Annual Grammy Awards, making Batiste the first Black artist to win the award since Herbie Hancock in 2008. Wikipedia',
//   },

// ];

// const movies = [
//   {
//     title: 'Don\'t Look Up',
//     isan: '0000-0002-8FA3-0000-0-0000-0000-3',
//     director: 'Adam McKay',
//     actors:
//     [
//       'Leonardo DiCaprio',
//       'Jennifer Lawrence',	
//       'Meryl Streep',
//       'Cate Blanchett',
//       'Rob Morgan',
//     ],
//     genre: 'Comedy', 
//     score: ['Nicholas Britell'],
//     year: 2021,
//     production_company:
//     [
//       'Hyperobject Industries', 
//       'Bluegrass Films',
//     ], 
//     language: 'English',
//     subtitles: true,
//     description: 'Two low-level astronomers must go on a giant media tour to warn mankind of an approaching comet that will destroy planet Earth.',
//   },
//   {
//     title: 'The Road',
//     isan: '0000-0002-61C5-0000-J-0000-0000-H',
//     director: 'John Hillcoat',
//     actors:
//     [
//       'Viggo Mortensen',
//       'Kodi Smit-McPhee',
//       'Robert Duvall',
//       'Charlize Theron',
//     ],
//     genre: 'Drama', 
//     score:
//     [
//       'Nick Cave', 
//       'Warren Ellis',
//     ],
//     year: 2021,
//     production_company: ['2929 Productions'],
//     language: 'English',
//     subtitles: true,
//     description: 'America is a grim, gray shadow of itself after a catastrophe. A man (Viggo Mortensen) and his young son (Kodi Smit-McPhee) wander through this post-apocalyptic world, trying to keep the dream of civilization alive. They journey toward the sea, surviving as best they can on what they can scavenge, and try to avoid roving gangs of savage humans who will turn them into slaves, or worse.',
//   },
// ];

// const patrons = [
//   {
//     user_name: 'rosal',
//     first_name: 'Lica',
//     last_name: 'Rosa',
//     address_1: '5420 Riverdale Rd #S20',
//     city: 'Atlanta',
//     state: 'GA', 
//     zip: '30349',
//   },
//   {
//     user_name: 'byrnel',
//     first_name: 'Liam',
//     last_name: 'Byrne',
//     address_1: '7955 Monticello Dr., NE',
//     city: 'Atlanta',
//     state: 'GA', 
//     zip: '30350',
//   },
// ];

// router.get('/book/:id', async (req, res) => {
//   return res.render('book', books[req.params.id]);
// });

// router.get('/movie/:id', async (req, res) => {
//   return res.render('movie', movies[req.params.id]);
// });

// router.get('/cd/:id', async (req, res) => {
//   return res.render('cd', cds[req.params.id]);
// });

// router.get('/branch/:id', async (req, res) => {
//   return res.render('branch', branches[req.params.id]);
// });

// router.get('/patron/:id', async (req, res) => {
//   return res.render('patron', patrons[req.params.id]);
// });

// module.exports = router;
