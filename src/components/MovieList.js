import React from 'react'
import { useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieProvider';

const movieList = {
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg",
      "genre_ids": [
        28,
        12,
        14
      ],
      "id": 960704,
      "original_language": "ja",
      "original_title": "鋼の錬金術師 完結編 最後の錬成",
      "overview": "The Elric brothers’ long and winding journey comes to a close in this epic finale, where they must face off against an unworldly, nationwide threat.",
      "popularity": 4030.287,
      "poster_path": "/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg",
      "release_date": "2022-06-24",
      "title": "Fullmetal Alchemist: The Final Alchemy",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 47
    },
    {
      "adult": false,
      "backdrop_path": "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 760161,
      "original_language": "en",
      "original_title": "Orphan: First Kill",
      "overview": "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
      "popularity": 3744.732,
      "poster_path": "/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg",
      "release_date": "2022-07-27",
      "title": "Orphan: First Kill",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 964
    },
    {
      "adult": false,
      "backdrop_path": "/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg",
      "genre_ids": [
        14,
        35,
        10751
      ],
      "id": 642885,
      "original_language": "en",
      "original_title": "Hocus Pocus 2",
      "overview": "It’s been 29 years since someone lit the Black Flame Candle and resurrected the 17th-century sisters, and they are looking for revenge. Now it is up to three high-school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow’s Eve.",
      "popularity": 3389.879,
      "poster_path": "/7ze7YNmUaX81ufctGqt0AgHxRtL.jpg",
      "release_date": "2022-09-27",
      "title": "Hocus Pocus 2",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 648
    },
    {
      "adult": false,
      "backdrop_path": "/hT3OqvzMqCQuJsUjZnQwA5NuxgK.jpg",
      "genre_ids": [
        53
      ],
      "id": 985939,
      "original_language": "en",
      "original_title": "Fall",
      "overview": "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
      "popularity": 3302.231,
      "poster_path": "/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
      "release_date": "2022-08-11",
      "title": "Fall",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 1363
    },
    {
      "adult": false,
      "backdrop_path": "/83oeqwN64WtafGoITvsOzjKIQaM.jpg",
      "genre_ids": [
        28,
        35,
        53
      ],
      "id": 718930,
      "original_language": "en",
      "original_title": "Bullet Train",
      "overview": "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
      "popularity": 3103.725,
      "poster_path": "/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
      "release_date": "2022-07-03",
      "title": "Bullet Train",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 1680
    },
    {
      "adult": false,
      "backdrop_path": "/aIkG2V4UXrfkxMdJZmq30xO0QQr.jpg",
      "genre_ids": [
        878,
        12,
        28
      ],
      "id": 791155,
      "original_language": "en",
      "original_title": "Secret Headquarters",
      "overview": "While hanging out after school, Charlie and his friends discover the headquarters of the world’s most powerful superhero hidden beneath his home. When villains attack, they must team up to defend the headquarters and save the world.",
      "popularity": 3117.231,
      "poster_path": "/8PsHogUfvjWPGdWAI5uslDhHDx7.jpg",
      "release_date": "2022-08-12",
      "title": "Secret Headquarters",
      "video": false,
      "vote_average": 7,
      "vote_count": 81
    },
    {
      "adult": false,
      "backdrop_path": "/ghsPsvM0sEztdNT4kUlTsBF2LEF.jpg",
      "genre_ids": [
        18,
        28,
        53
      ],
      "id": 852046,
      "original_language": "fr",
      "original_title": "Athena",
      "overview": "Hours after the tragic death of their youngest brother in unexplained circumstances, three siblings have their lives thrown into chaos.",
      "popularity": 2780.156,
      "poster_path": "/fenNPxVF5ERy0CSyVruuEg959Hg.jpg",
      "release_date": "2022-09-09",
      "title": "Athena",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 250
    },
    {
      "adult": false,
      "backdrop_path": "/7AiIrnDMaOhPrw9elJ5NNjijTW4.jpg",
      "genre_ids": [
        53,
        9648
      ],
      "id": 916605,
      "original_language": "en",
      "original_title": "The Infernal Machine",
      "overview": "Reclusive and controversial author Bruce Cogburn is drawn out of hiding by an obsessive fan, forcing the novelist to confront a past that he thought he could escape, and to account for events set in motion by his bestseller decades earlier. Cogburn's search for who is behind the manipulation and mental torment he encounters leads to an emotional roller-coaster ride full of fear and danger, where things are not always as clear as they seem to be, and where past deeds can have dire consequences.",
      "popularity": 2508.595,
      "poster_path": "/bSqpOGzaKBdGkBLmcm1JJIVryYy.jpg",
      "release_date": "2022-09-23",
      "title": "The Infernal Machine",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 65
    },
    {
      "adult": false,
      "backdrop_path": "/rgZ3hdzgMgYgzvBfwNEVW01bpK1.jpg",
      "genre_ids": [
        28,
        53,
        18
      ],
      "id": 429473,
      "original_language": "en",
      "original_title": "Lou",
      "overview": "A young girl is kidnapped during a powerful storm. Her mother joins forces with her mysterious neighbour to set off in pursuit of the kidnapper. Their journey will test their limits and expose the dark secrets of their past.",
      "popularity": 1945.623,
      "poster_path": "/djM2s4wSaATn4jVB33cV05PEbV7.jpg",
      "release_date": "2022-09-23",
      "title": "Lou",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 243
    },
    {
      "adult": false,
      "backdrop_path": "/rwgmDkIEv8VjAsWx25ottJrFvpO.jpg",
      "genre_ids": [
        10749,
        18
      ],
      "id": 744276,
      "original_language": "en",
      "original_title": "After Ever Happy",
      "overview": "As a shocking truth about a couple's families emerges, the two lovers discover they are not so different from each other. Tessa is no longer the sweet, simple, good girl she was when she met Hardin — any more than he is the cruel, moody boy she fell so hard for.",
      "popularity": 1740.669,
      "poster_path": "/6b7swg6DLqXCO3XUsMnv6RwDMW2.jpg",
      "release_date": "2022-08-24",
      "title": "After Ever Happy",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 373
    },
    {
      "adult": false,
      "backdrop_path": "/2k9tBql5GYH328Krj66tDT9LtFZ.jpg",
      "genre_ids": [
        53,
        12,
        27
      ],
      "id": 760741,
      "original_language": "en",
      "original_title": "Beast",
      "overview": "A recently widowed man and his two teenage daughters travel to a game reserve in South Africa. However, their journey of healing soon turns into a fight for survival when a bloodthirsty lion starts to stalk them.",
      "popularity": 1775.519,
      "poster_path": "/asRkNwbMuLheJ2nnnbRCIr2PdnI.jpg",
      "release_date": "2022-08-11",
      "title": "Beast",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 621
    },
    {
      "adult": false,
      "backdrop_path": "/nnUQqlVZeEGuCRx8SaoCU4XVHJN.jpg",
      "genre_ids": [
        14,
        12,
        10751
      ],
      "id": 532639,
      "original_language": "en",
      "original_title": "Pinocchio",
      "overview": "A wooden puppet embarks on a thrilling adventure to become a real boy.",
      "popularity": 1908.354,
      "poster_path": "/g8sclIV4gj1TZqUpnL82hKOTK3B.jpg",
      "release_date": "2022-09-07",
      "title": "Pinocchio",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 891
    },
    {
      "adult": false,
      "backdrop_path": "/5EzpTMkpg3DecNoP2DAOBlh0Fi6.jpg",
      "genre_ids": [
        28,
        80
      ],
      "id": 993145,
      "original_language": "en",
      "original_title": "Bullet Proof",
      "overview": "The Thief  pulls off the robbery of a lifetime when he robs the psychotic drug lord, Temple. The plan goes off without a hitch until the Thief discovers a stowaway in his getaway car - Temple's pregnant wife, Mia.",
      "popularity": 1604.404,
      "poster_path": "/cj6YmTAU7Jvn3w6d2NfjQzpX7Pw.jpg",
      "release_date": "2022-08-19",
      "title": "Bullet Proof",
      "video": false,
      "vote_average": 5.1,
      "vote_count": 15
    },
    {
      "adult": false,
      "backdrop_path": "/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg",
      "genre_ids": [
        14,
        28,
        35
      ],
      "id": 616037,
      "original_language": "en",
      "original_title": "Thor: Love and Thunder",
      "overview": "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
      "popularity": 1488.579,
      "poster_path": "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      "release_date": "2022-07-06",
      "title": "Thor: Love and Thunder",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 4147
    },
    {
      "adult": false,
      "backdrop_path": "/olPXihyFeeNvnaD6IOBltgIV1FU.jpg",
      "genre_ids": [
        27,
        9648
      ],
      "id": 882598,
      "original_language": "en",
      "original_title": "Smile",
      "overview": "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
      "popularity": 1300.464,
      "poster_path": "/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg",
      "release_date": "2022-09-23",
      "title": "Smile",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 183
    },
    {
      "adult": false,
      "backdrop_path": "/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg",
      "genre_ids": [
        53,
        28,
        878
      ],
      "id": 766507,
      "original_language": "en",
      "original_title": "Prey",
      "overview": "When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
      "popularity": 1197.202,
      "poster_path": "/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
      "release_date": "2022-08-02",
      "title": "Prey",
      "video": false,
      "vote_average": 7.9,
      "vote_count": 4281
    },
    {
      "adult": false,
      "backdrop_path": "/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
      "genre_ids": [
        28,
        18
      ],
      "id": 361743,
      "original_language": "en",
      "original_title": "Top Gun: Maverick",
      "overview": "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
      "popularity": 1169.032,
      "poster_path": "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
      "release_date": "2022-05-24",
      "title": "Top Gun: Maverick",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 4245
    },
    {
      "adult": false,
      "backdrop_path": "/qaTzVAW1u16WFNsepjCrilBuInc.jpg",
      "genre_ids": [
        16,
        28,
        10751,
        35,
        878
      ],
      "id": 539681,
      "original_language": "en",
      "original_title": "DC League of Super-Pets",
      "overview": "When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.",
      "popularity": 1207.154,
      "poster_path": "/r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
      "release_date": "2022-07-27",
      "title": "DC League of Super-Pets",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 789
    },
    {
      "adult": false,
      "backdrop_path": "/3PieOs1t6dPHWlgvX3XoqTIQLqN.jpg",
      "genre_ids": [
        12,
        28,
        878
      ],
      "id": 507086,
      "original_language": "en",
      "original_title": "Jurassic World Dominion",
      "overview": "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
      "popularity": 1205.411,
      "poster_path": "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
      "release_date": "2022-06-01",
      "title": "Jurassic World Dominion",
      "video": false,
      "vote_average": 7,
      "vote_count": 3596
    },
    {
      "adult": false,
      "backdrop_path": "/gX6VtQ7X6GRvcJQJhFZO9ZJ00q7.jpg",
      "genre_ids": [
        27,
        35
      ],
      "id": 816952,
      "original_language": "en",
      "original_title": "My Best Friend's Exorcism",
      "overview": "The year is 1988. Abby and Gretchen have been best friends since fourth grade. After an evening of skinny-dipping goes disastrously wrong, Gretchen begins to act…different, which leads Abby to suspect her best friend may be possessed by a demon. With help from some unlikely allies, Abby embarks on a quest to save Gretchen. But is their friendship powerful enough to beat the devil?",
      "popularity": 1052.782,
      "poster_path": "/yIXICkqthsqbNtvtEd6rpIt3cT4.jpg",
      "release_date": "2022-09-29",
      "title": "My Best Friend's Exorcism",
      "video": false,
      "vote_average": 6.2,
      "vote_count": 70
    }
  ],
  "total_pages": 35423,
  "total_results": 708460
}

export default function MovieList() {

  const { movies } = useContext(MovieContext);




  return (
    <>
      {movies.map((movie) => { return (<Movie key={movie.id} movie={movie} />) }
      )}
    </>
  )
}


