import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Kathryn Prociv, Nicole Acevedo",
            "title": "'Quad-State Tornado' crossed four states in four hours, a rare December tornado - NBC News",
            "description": "The National Weather Service will confirm if a single tornado tracked over 200 miles from Arkansas to Kentucky, which could set the record for longest tornado in U.S. history",
            "url": "https://www.nbcnews.com/news/weather/quad-state-tornado-crossed-four-states-four-hours-leaving-trail-death-rcna8465",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-12/211211-mayfield-aerial-destruction-ew-943a-ed86b9.jpg",
            "publishedAt": "2021-12-12T08:15:00Z",
            "content": "Since 1950, there have only been 19 F/EF4 tornadoes in the U.S. during the last month of the year and only 2 F/EF5 tornadoes.\r\nThe last EF4 tornado to strike the U.S. during the month of December was… [+3217 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Jesse O’Neill",
            "title": "'SNL' mocks Chris, Andrew Cuomo as Billie Eilish performs double duty - New York Post ",
            "description": "NBC’s “Saturday Night Live” poked fun at unemployed brothers Andrew and Chris Cuomo as the show returned from a two-week hiatus with Billie Eilish doubling as host and musical gue…",
            "url": "https://nypost.com/2021/12/12/snl-mocks-chris-andrew-cuomo-as-billie-eilish-performs-double-duty/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/12/snl-dec-11.png?w=1024",
            "publishedAt": "2021-12-12T07:08:00Z",
            "content": "NBC’s “Saturday Night Live” poked fun at unemployed brothers Andrew and Chris Cuomo as the show returned from a two-week hiatus with Billie Eilish doubling as host and musical guest.\r\nThe show’s cold… [+4264 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "UFC 269 results, highlights: Julianna Pena scores shocking upset of Amanda Nunes to claim title - CBS Sports",
            "description": "Pena shocked the world by finishing the consensus greatest female fighter of all time inside two rounds at UFC 269",
            "url": "https://www.cbssports.com/mma/news/ufc-269-results-highlights-julianna-pena-scores-shocking-upset-of-amanda-nunes-to-claim-title/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/12/12/ff52666f-0247-492b-a421-ac6bba559d6c/thumbnail/1200x675/381b9b5696a74e75706c8fe15c69f748/julianna-pena-2.jpg",
            "publishedAt": "2021-12-12T06:42:00Z",
            "content": "Julianna Pena did the unthinkable at UFC 269 by out striking and submitting the greatest fighter in women's MMA, Amanda Nunes. Pena staggered Nunes in the second round of their co-main event clash, d… [+1874 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Shawn Hubler",
            "title": "Newsom Calls for Gun Legislation Modeled on the Texas Abortion Law - The New York Times",
            "description": "Gov. Gavin Newsom of California accused Texas of insulating its abortion law from the courts, and then called on lawmakers to use a similar strategy to go after the gun industry.",
            "url": "https://www.nytimes.com/2021/12/12/us/politics/newsom-texas-abortion-law-guns.html",
            "urlToImage": "https://static01.nyt.com/images/2021/12/11/multimedia/11-Newsom/11-Newsom-facebookJumbo.jpg",
            "publishedAt": "2021-12-12T06:33:25Z",
            "content": "Supporters of abortion rights have criticized Texas for drafting its abortion ban to evade review in federal court, where it might be blocked. It effectively deputizes ordinary citizens, including th… [+1695 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Los Angeles Times"
            },
            "author": "Eric Sondheimer",
            "title": "Bryce Young's Heisman path began at Cathedral, Mater Dei - Los Angeles Times",
            "description": "Alabama quarterback Bryce Young became the third Mater Dei graduate to win the Heisman Trophy; his Cathedral and Mater Dei coaches could see it coming.",
            "url": "https://www.latimes.com/sports/highschool/story/2021-12-11/bryce-young-heisman-trophy-roots-la-cathedral-mater-dei",
            "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/a444b9d/2147483647/strip/true/crop/5909x3102+0+0/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb5%2F82%2Ff1273ee64cbd9e8ee74400a16465%2Fheisman-trophy-football-44999.jpg",
            "publishedAt": "2021-12-12T04:18:45Z",
            "content": "Bryce Young, who grew up in Pasadena, was tutored by his father Craig and played football at Santa Ana Mater Dei and Los Angeles Cathedral, won the Heisman Trophy on Saturday after performing at the … [+4172 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Los Angeles Times"
            },
            "author": "Eric Sondheimer",
            "title": "Bryce Young's Heisman path began at Cathedral, Mater Dei - Los Angeles Times",
            "description": "Alabama quarterback Bryce Young became the third Mater Dei graduate to win the Heisman Trophy; his Cathedral and Mater Dei coaches could see it coming.",
            "url": "https://www.latimes.com/sports/highschool/story/2021-12-11/bryce-young-heisman-trophy-roots-la-cathedral-mater-dei",
            "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/a444b9d/2147483647/strip/true/crop/5909x3102+0+0/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb5%2F82%2Ff1273ee64cbd9e8ee74400a16465%2Fheisman-trophy-football-44999.jpg",
            "publishedAt": "2021-12-12T04:18:45Z",
            "content": "Bryce Young, who grew up in Pasadena, was tutored by his father Craig and played football at Santa Ana Mater Dei and Los Angeles Cathedral, won the Heisman Trophy on Saturday after performing at the … [+4172 chars]"
        }
    ]

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>InsideNews - Top Headlines</h2>
                <div className='row'>
                    {this.state.articles.map((elements) => {
                        return <div key={elements.url} className="col">
                        <NewsItem title={elements.title.slice(0,25)} description={elements.description.slice(0,80)} imageUrl={elements.urlToImage} newsUrl={elements.url} />
                    </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
